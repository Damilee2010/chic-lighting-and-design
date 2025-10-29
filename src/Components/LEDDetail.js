import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { allProducts } from '../Components/ProductData'; // Import centralized data
import '../styles/LEDDetail.css';

function LEDDetail() {
  const { ledId } = useParams();
  const navigate = useNavigate();
  const cart = useContext(CartContext);

  const ledProduct = allProducts.find(item => item.id === parseInt(ledId));

  if (!ledProduct) {
    return (
      <div className="led-not-found">
        <h2>LED Product Not Found</h2>
        <p>The requested LED product does not exist.</p>
        <button onClick={() => navigate('/leds')} className="btn">
          Back to LED Collection
        </button>
      </div>
    );
  }

  return (
    <div className="led-detail">
      <div className="led-detail-content">
        <div className="led-image-section">
          <div className="led-main-image">
            <img src={ledProduct.image} alt={ledProduct.name} />
          </div>
        </div>
        
        <div className="led-info-section">
          <h1>{ledProduct.name}</h1>
          <div className="led-price">{ledProduct.price}</div>
          <p className="led-short-desc">{ledProduct.description}</p>
          
          <p className="led-full-description">{ledProduct.fullDescription}</p>
          
          <div className="led-features">
            <h3>Features:</h3>
            <ul>
              {ledProduct.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="led-specifications">
            <h3>Technical Specifications:</h3>
            <div className="spec-grid">
              {Object.entries(ledProduct.specifications).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                </div>
              ))}
            </div>
          </div>

          <button 
            className="btn led-add-to-cart"
            onClick={() => cart.addToCart({
              id: ledProduct.id,
              name: ledProduct.name,
              price: ledProduct.price,
              image: ledProduct.image, 
              description: ledProduct.description
            })}
          >
            Add to Cart - {ledProduct.price}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LEDDetail;