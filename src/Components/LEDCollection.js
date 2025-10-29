import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../contexts/CartContext';
import { allProducts } from '../Components/ProductData'; 
import "../styles/Led.css";


const ledItems = allProducts.filter(product => product.id >= 201 && product.id <= 205);

function LEDCollection() {
  const cart = useContext(CartContext);

  const handleAddToCart = (item) => {
    if (cart && cart.addToCart) {
      cart.addToCart({ 
        id: item.id, 
        name: item.name, 
        price: item.price, 
        img: item.image // Use 'image' instead of 'img' to match centralized data
      });
    }
  };

  return (
    <section className="led-section">
      <div className="led-inner">
        <div className="led-header">
          <h2>LED Lights Collection</h2>
        </div>
        
        <div className="led-grid">
          {ledItems.map((it) => (
            <article className="led-card" key={it.id}>
              <Link to={`/led/${it.id}`} className="led-media-link"> {/* Fixed route */}
                <div className="led-media">
                  <img src={it.image} alt={it.name} /> {/* Use 'image' instead of 'img' */}
                  <div className="led-badge">LED</div>
                  <div className="led-price">{it.price}</div>
                </div>
              </Link>
              <div className="led-body">
                <h3 className="title">
                  <Link to={`/led/${it.id}`}>{it.name}</Link> {/* Fixed route */}
                </h3>
                <p className="led-desc">{it.description}</p> {/* Use 'description' instead of 'desc' */}
                <div className="led-actions">
                  <button
                    className="btn led-add"
                    onClick={() => handleAddToCart(it)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LEDCollection;