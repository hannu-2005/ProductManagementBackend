// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import ListProducts from './components/ListProducts';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import DeleteProduct from './components/DeleteProduct';
import Product from './components/Product';

import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQs from './components/FAQs';
import About from './components/About';

function App() {
  return (
    <Router>
      <Header />

      <div className="container mt-4 mb-5">
        <Switch>
          <Route exact path="/" component={ListProducts} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/updateProduct/:id" component={UpdateProduct} />
          <Route path="/deleteProduct/:id" component={DeleteProduct} />
          <Route path="/viewProduct/:id" component={Product} />

          {/* New pages */}
          <Route path="/features" component={Features} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/faqs" component={FAQs} />
          <Route path="/about" component={About} />
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
