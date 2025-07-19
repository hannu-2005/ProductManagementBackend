package org.example.productmanagementbackend.service;

import org.example.productmanagementbackend.entity.Product;

import java.util.List;

public interface ProductService {
     Product saveProduct(Product product);
     List<Product> saveAllProducts(List<Product> products);
     List<Product> getAllProducts();
     Product getProductById(Long id);
     Product updateProduct(Long id, Product product);
     void deleteProductById(Long id);
}
