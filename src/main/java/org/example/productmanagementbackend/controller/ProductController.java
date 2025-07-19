package org.example.productmanagementbackend.controller;

import org.example.productmanagementbackend.entity.Product;
import org.example.productmanagementbackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductService productService;

    // ✅ Create product
    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    // ✅ Add multiple
    @PostMapping("/add/all")
    public List<Product> addAllProducts(@RequestBody List<Product> products) {
        return productService.saveAllProducts(products);
    }

    // ✅ Get all
    @GetMapping
    public List<Product> getProducts() {
        return productService.getAllProducts();
    }

    // ✅ Get by ID
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    // ✅ Update
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        return productService.updateProduct(id, productDetails);
    }

    // ✅ Delete
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProductById(id);
    }
}
