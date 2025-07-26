import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      price: '',
      quantity: '',
    };

    this.changeIdHandler = this.changeIdHandler.bind(this);
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changePriceHandler = this.changePriceHandler.bind(this);
    this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  changeIdHandler(event) {
    this.setState({ id: event.target.value });
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

  saveProduct(e) {
    e.preventDefault();

    let product = {
      id: Number(this.state.id),      // Convert id to number (important if your backend expects number)
      name: this.state.name,
      price: parseFloat(this.state.price),
      quantity: parseInt(this.state.quantity),
    };

    console.log('Adding product:', product);

    ProductService.addProduct(product)  // Use addProduct method as per your ProductService
      .then((res) => {
        alert('Product added successfully!');
        this.props.history.push('/');    // Redirect to the list or home page
      })
      .catch((err) => {
        console.error('Error adding product:', err);
        alert('Failed to add product. Please check console for details.');
      });
  }

  cancel(e) {
    e.preventDefault();
    this.props.history.push('/');        // Cancel and go back to list or home
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">Add Product</h1>
        <form>
          <div className="form-group mb-3">
            <center><label>Product Id</label></center>
            <input
              type="text"
              className="form-control"
              value={this.state.id}
              onChange={this.changeIdHandler}
              placeholder="Enter Product Id"
            />
          </div>

          <div className="form-group mb-3">
            <center><label>Product Name</label></center>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.changeNameHandler}
              placeholder="Enter Product Name"
            />
          </div>

          <div className="form-group mb-3">
            <center><label>Product Price</label></center>
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
            <center><label>Product Quantity</label></center>
            <input
              type="number"
              className="form-control"
              value={this.state.quantity}
              onChange={this.changeQuantityHandler}
              placeholder="Enter Product Quantity"
            />
          </div>

          <button className="btn btn-primary mt-3 me-2" onClick={this.saveProduct}>
            Save
          </button>
          <button className="btn btn-danger mt-3 ms-2" onClick={this.cancel}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
