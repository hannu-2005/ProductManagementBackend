import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      product: {}  // changed from products to product
    };
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    ProductService.getProductById(this.state.id).then(
      response => {
        this.setState({ product: response.data });
      }
    ).catch(error => {
      console.error('Error fetching product:', error);
    });
  }

  cancel() {
    this.props.history.push('/');
  }

  render() {
    const { product } = this.state;
    return (
      <div className='container'>
        <h1>View Product Page</h1>
        
        <label>Product Id</label>
        <div>{product.id}</div>

        <label>Product Name</label>
        <div>{product.name}</div>

        <label>Product Price</label>
        <div>{product.price}</div>

        <label>Product Quantity</label>
        <div>{product.quantity}</div>

        <button className="btn btn-danger mt-3" onClick={this.cancel}>Cancel</button> 
      </div>
    );
  }
}

export default Product;
