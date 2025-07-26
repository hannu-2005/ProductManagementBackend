import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      name: '',
      price: '',
      quantity: '',
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changePriceHandler = this.changePriceHandler.bind(this);
    this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    // Fetch product details by id
    ProductService.getProductById(this.state.id)
      .then((res) => {
        let product = res.data;
        this.setState({
          name: product.name,
          price: product.price,
          quantity: product.quantity,
        });
      })
      .catch((err) => {
        console.error('Error fetching product:', err);
        alert('Failed to load product details.');
      });
  }

  changeNameHandler(event) {
    this.setState({ name: event.target.value });
  }

  changePriceHandler(event) {
    this.setState({ price: event.target.value });
  }

  changeQuantityHandler(event) {
    this.setState({ quantity: event.target.value });
  }

  updateProduct(e) {
    e.preventDefault();

    const product = {
      name: this.state.name,
      price: parseFloat(this.state.price),
      quantity: parseInt(this.state.quantity, 10),
    };

    ProductService.updateProduct(this.state.id, product)
      .then(() => {
        alert('Product updated successfully!');
        this.props.history.push('/'); // redirect to product list
      })
      .catch((err) => {
        console.error('Error updating product:', err);
        alert('Failed to update product.');
      });
  }

  cancel(e) {
    e.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">Update Product</h1>
        <form>
          <div className="form-group mb-3">
            <label className="d-block text-center">Product ID</label>
            <input
              type="text"
              className="form-control"
              value={this.state.id}
              disabled
            />
          </div>

          <div className="form-group mb-3">
            <label className="d-block text-center">Product Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.changeNameHandler}
              placeholder="Enter Product Name"
            />
          </div>

          <div className="form-group mb-3">
            <label className="d-block text-center">Product Price</label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              value={this.state.price}
              onChange={this.changePriceHandler}
              placeholder="Enter Product Price"
            />
          </div>

          <div className="form-group mb-3">
            <label className="d-block text-center">Product Quantity</label>
            <input
              type="number"
              className="form-control"
              value={this.state.quantity}
              onChange={this.changeQuantityHandler}
              placeholder="Enter Product Quantity"
            />
          </div>

          <button className="btn btn-primary mt-3 me-2" onClick={this.updateProduct}>
            Update
          </button>
          <button className="btn btn-danger mt-3 ms-2" onClick={this.cancel}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateProduct;
