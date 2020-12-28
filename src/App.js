import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import { productData, productDataTwo } from "./components/Products/data";
import Products from "./components/Products/Products";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
