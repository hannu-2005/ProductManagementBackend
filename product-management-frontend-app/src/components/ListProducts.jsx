import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductService from '../services/ProductService';

class ListProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.addProduct = this.addProduct.bind(this);
  }

  componentDidMount() {
    ProductService.getProducts()
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }

  addProduct() {
    this.props.history.push('/addproduct');
  }

  render() {
    return (
      <div>
        <h1 className="text-center">List of Products Page</h1>
        <button className='btn btn-primary mb-3' onClick={this.addProduct}>Add Product</button>

        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th> {/* Added sequence number header */}
              <th scope="col">Product Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Product Quantity</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td> {/* sequence number */}
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.props.history.push(`/deleteProduct/${product.id}`)}
                  >
                    Delete Product
                  </button>{' '}
                  <button
                    className="btn btn-info"
                    onClick={() => this.props.history.push(`/updateProduct/${product.id}`)}
                  >
                    Update Product
                  </button>{' '}
                  <button
                    className="btn btn-secondary"
                    onClick={() => this.props.history.push(`/viewProduct/${product.id}`)}
                  >
                    View Product
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListProducts;
