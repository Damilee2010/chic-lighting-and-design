// Header.js
import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { SearchContext } from '../contexts/SearchContext';
import Visitor from './Visitor';
import "../styles/Hero.css";

function Header() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const close = () => setOpen(false);
  
  // Safely get context with fallbacks
  const cart = useContext(CartContext) || {};
  const search = useContext(SearchContext) || {};

  // Check if mobile screen - updated for 412px and below
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (open || cart?.openCart || search?.openSearch) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [open, cart?.openCart, search?.openSearch]);

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      console.log('Searching for:', search.query);
      // Add your search logic here
    }
  };

  const handleCloseSearch = () => {
    if (search.close) search.close();
    if (search.setQuery) search.setQuery(''); 
  };

  const handleResultClick = (product) => {
    console.log('Selected product:', product);
    handleCloseSearch();
    
    // Navigate to appropriate details page based on product type or ID range
    if (product.type === 'led' || (product.id && product.id >= 200)) {
      // LED products - navigate to LED details
      navigate(`/led/${product.id}`);
    } else {
      // Regular products - navigate to product details
      navigate(`/products/${product.id}`);
    }
  };

  // Function to handle menu item clicks that also trigger other actions
  const handleMenuAction = (action) => {
    close(); // Close the menu first
    setTimeout(() => {
      if (typeof action === 'function') {
        action(); // Then perform the action
      }
    }, 300); // Match the transition duration
  };

  // Safe context functions with fallbacks
  const toggleSearch = () => {
    if (search.toggle) {
      search.toggle();
    } else {
      console.warn('Search context not available');
    }
  };

  const toggleCart = () => {
    if (cart.toggleCart) {
      cart.toggleCart();
    } else {
      console.warn('Cart context not available');
    }
  };

  const closeCart = () => {
    if (cart.close) {
      cart.close();
    }
  };

  const updateCartQty = (id, qty) => {
    if (cart.updateQty && qty >= 0) {
      cart.updateQty(id, qty);
    }
  };

  const removeFromCart = (id) => {
    if (cart.removeFromCart) {
      cart.removeFromCart(id);
    }
  };

  return (
    <div className="header">
      <h1 className="header-title"><span className="span">Chic</span> Lightings</h1>

      <div className="icons">
        <button className="icon-btn" onClick={toggleSearch} aria-label="Open search">
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        </button>
        <button className="icon-btn" onClick={toggleCart} aria-label="Open cart">
          <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
          <span className="cart-count">{cart?.totals?.totalCount || 0}</span>
        </button>
        {!isMobile && <Visitor/>}
        <button className="menu-btn" onClick={() => setOpen((s) => !s)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          <i className="fa-solid fa-bars" aria-hidden="true"></i>
        </button>
      </div>

      {/* Combined overlay for menu and cart */}
      <div 
        className={`sheet-overlay ${(open || cart?.openCart || search?.openSearch) ? 'visible' : ''}`} 
        onClick={() => { 
          close(); 
          closeCart(); 
          handleCloseSearch();
        }} 
        aria-hidden={!(open || cart?.openCart || search?.openSearch)}
      ></div>

      {/* Search Overlay */}
      <div className={`search-overlay ${search?.openSearch ? 'visible' : ''}`} aria-hidden={!search?.openSearch}>
        <div className="search-container">
          <div className="search-box">
            <input 
              value={search?.query || ''} 
              onChange={(e) => search.setQuery ? search.setQuery(e.target.value) : null}
              onKeyPress={handleSearch}
              placeholder="Search products..." 
              autoFocus
            />
            <button 
              className="search-action" 
              onClick={handleSearch}
              aria-label="Search"
            >
              <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
              <span className="sr-only">Search</span>
            </button>
            <button 
              className="search-close" 
              onClick={handleCloseSearch}
              aria-label="Close search"
            >
              <i className="fa-solid fa-times" aria-hidden="true" />
            </button>
          </div>

          {/* Search Results - Positioned directly under search box */}
          {(search?.query && search?.openSearch) && (
            <div className="search-results-container">
              {search.isSearching ? (
                <div className="search-loading">Searching...</div>
              ) : search.searchResults && search.searchResults.length > 0 ? (
                <div className="search-results-list">
                  {search.searchResults.map(product => (
                    <div 
                      key={product.id} 
                      className="search-result-item"
                      onClick={() => handleResultClick(product)}
                    >
                      <div className="search-result-info">
                        <h4>{product.name}</h4>
                        <p>{product.description || product.desc || 'No description available'}</p>
                        <div className="search-result-meta">
                          <span className="search-result-price">{product.price || 'N/A'}</span>
                          <span className="search-result-type">{product.type || 'product'}</span>
                          <span className="search-result-rating">{product.rating || 'No rating'}</span>
                        </div>
                        <div className="search-result-category">
                          {product.type === 'led' || (product.id && product.id >= 200) ? 'LED Product' : 'Lighting Product'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="search-no-results">
                  No products found for "{search.query}"
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Navigation Side Sheet */}
      <aside className={`side-sheet ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-hidden={!open}>
        {/* Mobile Actions Section - Show in menu on mobile */}
        {isMobile && (
          <div className="mobile-actions">
            <div className="action-item" onClick={() => handleMenuAction(toggleSearch)}>
              <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
              <span>Search</span>
            </div>
            <div className="action-item" onClick={() => handleMenuAction(toggleCart)}>
              <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
              <span>Cart</span>
              <span className="cart-count">{cart?.totals?.totalCount || 0}</span>
            </div>
            <div className="action-item visitor-item">
              <Visitor/>
            </div>
          </div>
        )}

        <nav className="sheet-nav">
          <NavLink to="/" onClick={close} className={({isActive}) => isActive ? 'navlink active': 'navlink'}>Home</NavLink>
          <NavLink to="/products" onClick={close} className={({isActive}) => isActive ? 'navlink active': 'navlink'}>Products</NavLink>
          <NavLink to="/led" onClick={close} className={({isActive}) => isActive ? 'navlink active': 'navlink'}>LEDs</NavLink>
          <NavLink to="/gallery" onClick={close} className={({isActive}) => isActive ? 'navlink active': 'navlink'}>Gallery</NavLink>
          <NavLink to="/offers" onClick={close} className={({isActive}) => isActive ? 'navlink active': 'navlink'}>Offers</NavLink>
          <NavLink to="/contact" onClick={close} className={({isActive}) => isActive ? 'navlink active': 'navlink'}>Contact</NavLink>
        </nav>

        {/* Desktop Actions Section - Only show in menu on desktop */}
        {!isMobile && (
          <div className="desktop-actions">
            <Visitor/>
          </div>
        )}
      </aside>

      {/* Cart Side Sheet */}
      <aside className={`side-sheet cart-sheet ${cart?.openCart ? 'open' : ''}`} role="dialog" aria-modal="true" aria-hidden={!cart?.openCart}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="cart-close" onClick={closeCart}>Close</button>
        </div>
        <div className="cart-body">
          {cart?.cartItems?.length ? cart.cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <div className="cart-item-title">{item.title || item.name || 'Unknown Item'}</div>
                <div className="cart-item-meta">${item.price || '0.00'} × {item.qty || 0}</div>
              </div>
              <div className="cart-item-controls">
                <button className="ctrl-btn" onClick={() => updateCartQty(item.id, (item.qty || 0) - 1)}>-</button>
                <span>{item.qty || 0}</span>
                <button className="ctrl-btn" onClick={() => updateCartQty(item.id, (item.qty || 0) + 1)}>+</button>
                <button className="ctrl-btn remove" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          )) : <div className="cart-empty">Your cart is empty</div>}
        </div>
        {cart?.cartItems?.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">Total: ${(cart?.totals?.totalPrice || 0).toFixed(2)}</div>
            <button className="btn checkout">Checkout</button>
          </div>
        )}
      </aside>
    </div>
  );
}

export default Header;