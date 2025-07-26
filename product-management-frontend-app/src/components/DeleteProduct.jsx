import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class DeleteProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      message: '',
    };
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    ProductService.deleteProduct(this.state.id)  // Corrected method name here
      .then(() => {
        this.setState({ message: `Product with ID ${this.state.id} deleted successfully!` });
        setTimeout(() => {
          this.props.history.push('/');
        }, 1500);
      })
      .catch((err) => {
        console.error('Error deleting product:', err);
        this.setState({ message: 'Error deleting product. Check backend logs.' });
      });
  }

  cancel() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center mb-4">Delete Product</h1>
        <div className="alert alert-info text-center">{this.state.message}</div>
        <div className="text-center">
          <button className="btn btn-danger mt-3" onClick={this.cancel}>
            Back to Products
          </button>
        </div>
      </div>
    );
  }
}

export default DeleteProduct;
