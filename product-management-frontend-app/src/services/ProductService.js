import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/products';

class ProductService {
  getProducts() {
    return axios.get(API_BASE_URL);
  }

  getProductById(id) {
    return axios.get(`${API_BASE_URL}/${id}`);
  }

  addProduct(product) {
    return axios.post(API_BASE_URL, product);
  }

  deleteProduct(id) {
    return axios.delete(`${API_BASE_URL}/${id}`);
  }

  updateProduct(id, product) {
    return axios.put(`${API_BASE_URL}/${id}`, product);
  }
}

const productService = new ProductService();
export default productService;
