import React from "react";
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
// import New from "./Components/New";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <ProductGrid />
      <LEDCollection />
      <Offers />
      <Gallery/>
      <Contact/>
      {/* <New /> */}
    </React.Fragment>
  );
}

function App() {
  // small protected-route wrapper
  function ProtectedRoute({ children }) {
    const { user } = useAuth();
    if (!user) return <Navigate to="/login" replace />;
    return children;
  }

  return (
    <React.Fragment>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductGrid />
              </ProtectedRoute>
            }
          />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/led/:ledId" element={<LEDDetail />} />
          <Route path="/led" element={<LEDCollection />} />
          <Route path="/led-product/:id" element={<LEDDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;