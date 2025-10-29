// App.js
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Hero from "./Components/Hero";
import ProductGrid from "./Components/ProductGrid";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Offers from "./Components/Offers";
import Gallery from "./Components/Gallery";
import LEDCollection from "./Components/LEDCollection";
import Header from "./Components/Header";
import ProductDetail from "./contexts/ProductDetail"; 
import LEDDetail from "./Components/LEDDetail";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <ProductGrid />
      <LEDCollection />
      <Offers />
      <Gallery/>
      <Contact/>
    </React.Fragment>
  );
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<><Hero/><ProductGrid /></>} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/led/:ledId" element={<LEDDetail />} />
        <Route path="/led" element={<><Hero/><LEDCollection /></>} />
        <Route path="/led-product/:id" element={<LEDDetail />} />
        <Route path="/gallery" element={<><Hero/><Gallery /></>} />
        <Route path="/offers" element={<><Hero/><Offers /></>} />
        <Route path="/contact" element={<><Hero/><Contact /></>} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;