import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { allProducts } from '../Components/ProductData'; // Import centralized data
import '../styles/ProductDetails.css';

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const cart = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProduct = allProducts.find(p => p.id === parseInt(productId));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/');
    }
    setLoading(false);
  }, [productId, navigate]);

  if (loading) return <div className="loading">Loading product details...</div>;
  if (!product) return <div className="error">Product not found</div>;

  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          <div className="product-badge">{product.type}</div>
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="price">{product.price}</div>
          <div className="rating">{product.rating}</div>
          <p className="full-description">{product.fullDescription}</p>
          <div className="features">
            <h3>Key Features:</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="specifications">
            <h3>Specifications:</h3>
            <div className="spec-grid">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <span className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="action-buttons">
            <button className="btn btn-primary add-to-cart" onClick={() => cart.addToCart(product)}>
              Add to Cart - {product.price}
            </button>
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
              ← Back to Products
            </button>
          </div>
        </div>
      </div>
      <div className="related-products">
        <h3>You Might Also Like</h3>
        <div className="related-grid">
          {allProducts
            .filter(p => p.type === product.type && p.id !== product.id)
            .slice(0, 3)
            .map(related => (
              <Link key={related.id} to={`/product/${related.id}`} className="related-card">
                <img src={related.image} alt={related.name} />
                <h4>{related.name}</h4>
                <span className="price">{related.price}</span>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;