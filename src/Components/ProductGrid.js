// ProductGrid.js - Updated with Pagination
import React, { useContext, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductGrid.css";
import { CartContext } from '../contexts/CartContext';

function ProductGrid() {
  const cart = useContext(CartContext);
  const placeholder = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" font-size="24" text-anchor="middle" fill="%23999" dy=".3em">No image</text></svg>';
  
  const [products] = useState([
    {id: 1,
      image: "/Images/outdoor-lantern.jpg",
      name: "Aurora Outdoor Lantern",
      description: "Stylish weather-resistant lantern perfect for patios.",
      type: "durable",
      price: "$189",
      rating: "⭐⭐⭐⭐",
      fullDescription: "Crafted from rustproof aluminum with a glass enclosure, the Aurora Lantern brings elegance and endurance to any outdoor setting.",
      features: ["Weather resistant", "LED compatible", "2-year warranty"],
      specifications: {
        material: "Aluminum & Glass",
        dimensions: "20\" H x 8\" W",
        bulbType: "E26",
        weight: "5.2 lbs"
      }
    },
    {
      id: 2,
      image: "/Images/accent-light.jpg",
      name: "Luna Wall Sconce",
      description: "Decorative wall-mounted light for ambient spaces.",
      type: "decor",
      price: "$149",
      rating: "⭐⭐⭐⭐⭐",
      fullDescription: "The Luna Sconce adds a touch of soft illumination to hallways and living rooms, featuring a matte black finish and frosted diffuser.",
      features: ["Matte finish", "Energy efficient", "Soft glow"],
      specifications: {
        material: "Steel & Frosted Glass",
        dimensions: "12\" H x 6\" W",
        bulbType: "E27",
        weight: "3.1 lbs"
      }
    },
    {
      id: 3,
      image: "/Images/desk-lamp.jpg",
      name: "Nova Desk Lamp",
      description: "Sleek adjustable desk lamp with dimmable light.",
      type: "modern",
      price: "$119",
      rating: "⭐⭐⭐⭐",
      fullDescription: "Perfect for study or work, Nova features adjustable brightness and a flexible arm for targeted illumination.",
      features: ["Adjustable arm", "Touch dimmer", "LED lighting"],
      specifications: {
        material: "Matte aluminum",
        dimensions: "18\" H x 7\" D",
        bulbType: "Integrated LED",
        weight: "3.3 lbs"
      }
    },
    {
      id: 4,
      image: "/Images/zen-accent-light.jpg",
      name: "Zen Accent Light",
      description: "Compact table light with a minimalist design.",
      type: "classic",
      price: "$99",
      rating: "⭐⭐⭐⭐",
      fullDescription: "Designed for subtle beauty, the Zen Accent Light fits perfectly on nightstands or side tables, emitting a calm warm glow.",
      features: ["Compact size", "Soft light tone", "Energy-saving"],
      specifications: {
        material: "Resin base & linen shade",
        dimensions: "15\" H x 8\" W",
        bulbType: "E14 LED",
        weight: "2.1 lbs"
      }
    },
    {
      id: 5,
      image: "/Images/vintage-lamp.jpg",
      name: "Edison Vintage Lamp",
      description: "Classic filament-style lamp with brass finish.",
      type: "durable",
      price: "$159",
      rating: "⭐⭐⭐⭐⭐",
      fullDescription: "The Edison Lamp delivers nostalgic charm with a modern touch. Ideal for home offices or reading corners.",
      features: ["Filament bulb", "Brass base", "3-year warranty"],
      specifications: {
        material: "Brass & Glass",
        dimensions: "17\" H x 9\" W",
        bulbType: "E27 filament",
        weight: "4.2 lbs"
      }
    },
    {
      id: 6,
      image: "/Images/chandelier.jpg",
      name: "Celeste Crystal Chandelier",
      description: "Elegant hanging chandelier with crystal details.",
      type: "classic",
      price: "$499",
      rating: "⭐⭐⭐⭐⭐",
      fullDescription: "Bring a touch of luxury to your dining space with the Celeste Chandelier, featuring hand-cut crystals and adjustable suspension.",
      features: ["Crystal glass", "Adjustable chain", "Dimmable"],
      specifications: {
        material: "Steel & Crystal",
        dimensions: "24\" H x 20\" W",
        bulbType: "E12",
        weight: "12 lbs"
      }
    },
    {
      id: 7,
      image: "/Images/floor-lamp.jpg",
      name: "Verona Floor Lamp",
      description: "Tall standing lamp with sleek silhouette.",
      type: "modern",
      price: "$219",
      rating: "⭐⭐⭐⭐",
      fullDescription: "The Verona Floor Lamp adds elegance to any modern space with a metal frame and ambient light diffusion.",
      features: ["Stable base", "LED compatible", "Soft diffusion"],
      specifications: {
        material: "Stainless steel",
        dimensions: "60\" H x 10\" D",
        bulbType: "E26 LED",
        weight: "7.8 lbs"
      }
    },
    {
      id: 8,
      image: "/Images/aria-reading-lamp.jpg",
      name: "Aria Reading Lamp",
      description: "Floor lamp ideal for study or lounge spaces.",
      type: "decor",
      price: "$179",
      rating: "⭐⭐⭐⭐",
      fullDescription: "With its adjustable neck and matte finish, the Aria Lamp brings both function and elegance to your favorite corner.",
      features: ["Adjustable neck", "Warm white LED", "Anti-glare shade"],
      specifications: {
        material: "Metal & Plastic",
        dimensions: "58\" H x 9\" D",
        bulbType: "E26 LED",
        weight: "6.5 lbs"
      }
    },
    {
      id: 9,
      image: "/Images/table-lamp.jpg",
      name: "Amber Table Lamp",
      description: "Warm-glow bedside lamp with linen shade.",
      type: "decor",
      price: "$139",
      rating: "⭐⭐⭐⭐",
      fullDescription: "A cozy addition to your bedside or living space, the Amber Lamp combines functionality with soft aesthetics.",
      features: ["Fabric shade", "Warm tone", "Compact base"],
      specifications: {
        material: "Ceramic & Fabric",
        dimensions: "16\" H x 8\" D",
        bulbType: "E27 LED",
        weight: "2.6 lbs"
      }
    },
    {
      id: 10,
      image: "/Images/pendant-lamp.jpg",
      name: "Orion Pendant Lamp",
      description: "Industrial ceiling lamp with matte finish.",
      type: "modern",
      price: "$189",
      rating: "⭐⭐⭐⭐⭐",
      fullDescription: "The Orion Pendant Lamp gives your kitchen or workspace a refined industrial appeal with adjustable hanging height.",
      features: ["Adjustable cord", "Matte surface", "Energy efficient"],
      specifications: {
        material: "Metal",
        dimensions: "12\" H x 10\" D",
        bulbType: "E26 LED",
        weight: "3.8 lbs"
      }
    },
    {
      id: 11,
      image: "/Images/atlas-garden-lantern.jpg",
      name: "Atlas Garden Lantern",
      description: "Outdoor lantern perfect for garden pathways.",
      type: "classic",
      price: "$199",
      rating: "⭐⭐⭐⭐",
      fullDescription: "Illuminate your garden with the Atlas Lantern — designed to withstand rain and heat while enhancing outdoor beauty.",
      features: ["Rustproof", "Ground stake", "Solar compatible"],
      specifications: {
        material: "Aluminum",
        dimensions: "19\" H x 7\" W",
        bulbType: "Solar LED",
        weight: "4.9 lbs"
      }
    },
    {
      id: 12,
      image: "/Images/halo-patio-light.jpg",
      name: "Halo Patio Light",
      description: "Circular lantern ideal for decks and terraces.",
      type: "durable",
      price: "$179",
      rating: "⭐⭐⭐⭐⭐",
      fullDescription: "The Halo Patio Light provides consistent ambient glow with weather-resistant construction for year-round outdoor use.",
      features: ["IP65 waterproof", "Rechargeable battery", "Modern design"],
      specifications: {
        material: "Plastic & Metal",
        dimensions: "15\" H x 12\" D",
        bulbType: "Rechargeable LED",
        weight: "4.2 lbs"
      }
    },
    {
      id: 13,
      image: "/Images/nimbus-lantern.jpg",
      name: "Nimbus Lantern",
      description: "Portable lantern with USB rechargeable light.",
      type: "durable",
      price: "$129",
      rating: "⭐⭐⭐⭐",
      fullDescription: "Compact and reliable, Nimbus is ideal for camping or emergency lighting with up to 20 hours of illumination per charge.",
      features: ["USB rechargeable", "Portable handle", "Lightweight"],
      specifications: {
        material: "ABS plastic",
        dimensions: "10\" H x 6\" D",
        bulbType: "LED",
        weight: "2.5 lbs"
      }
    },
    {
      id: 14,
      image: "/Images/solara-hanging-light.jpg",
      name: "Solara Hanging Light",
      description: "Hanging outdoor lantern with solar panel top.",
      type: "decor",
      price: "$159",
      rating: "⭐⭐⭐⭐",
      fullDescription: "Eco-friendly and efficient, Solara automatically charges during the day and lights your garden at night.",
      features: ["Solar-powered", "Automatic on/off", "Rustproof"],
      specifications: {
        material: "Metal & Plastic",
        dimensions: "14\" H x 8\" D",
        bulbType: "LED solar",
        weight: "3.9 lbs"
      }
    },
    {
      id: 15,
      image: "/Images/lyra-outdoor-lantern.jpg",
      name: "Lyra Outdoor Lantern",
      description: "Elegant modern lantern with frosted glass shade.",
      type: "modern",
      price: "$189",
      rating: "⭐⭐⭐⭐⭐",
      fullDescription: "The Lyra Lantern combines sleek design and efficient LED lighting to create an inviting atmosphere for outdoor evenings.",
      features: ["Frosted glass", "LED ready", "Durable build"],
      specifications: {
        material: "Glass & Steel",
        dimensions: "21\" H x 9\" W",
        bulbType: "E26 LED",
        weight: "5.4 lbs"
      }
    },
    {
      id: 16,
      image: "/Images/helios-patio-torch.jpg",
      name: "Helios Patio Torch",
      description: "Outdoor lantern with warm firelight imitation.",
      type: "classic",
      price: "$169",
      rating: "⭐⭐⭐⭐",
      fullDescription: "Helios brings the charm of traditional torches into modern outdoor design, featuring flickering flame-effect LEDs.",
      features: ["Flame effect", "Solar charge", "Weatherproof"],
      specifications: {
        material: "Aluminum & Glass",
        dimensions: "18\" H x 7\" W",
        bulbType: "LED flame",
        weight: "4.1 lbs"
      }
    },
    {
      id: 17,
      image: "/Images/eclipse-garden-lamp.jpg",
      name: "Eclipse Garden Lamp",
      description: "Minimalist outdoor lamp for landscape highlights.",
      type: "durable",
      price: "$179",
      rating: "⭐⭐⭐⭐",
      fullDescription: "Eclipse provides subtle illumination for pathways and garden features, blending durability and modern aesthetics.",
      features: ["IP67 waterproof", "Energy-efficient", "Anti-glare lens"],
      specifications: {
        material: "Powder-coated aluminum",
        dimensions: "18\" H x 8\" W",
        bulbType: "E27 LED",
        weight: "4.6 lbs"
      }
    }
  ]);

  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Show 8 products per page

  // Available filter types
  const availableTypes = useMemo(() => {
    const types = Array.from(new Set(products.map((p) => p.type)));
    return ["all", ...types];
  }, [products]);

  // Filter products based on active filter
  const filteredProducts = useMemo(() => {
    let result = products;
    
    // Filter by type
    if (activeFilter !== "all") {
      result = result.filter((p) => p.type === activeFilter);
    }
    
    // Sort products
    if (sortBy === "price-low") {
      result = [...result].sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
    } else if (sortBy === "price-high") {
      result = [...result].sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
    } else if (sortBy === "rating") {
      result = [...result].sort((a, b) => {
        const aRating = (a.rating.match(/⭐/g) || []).length;
        const bRating = (b.rating.match(/⭐/g) || []).length;
        return bRating - aRating;
      });
    } else if (sortBy === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }
    
    return result;
  }, [products, activeFilter, sortBy]);

  // Calculate pagination values
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  // Reset to first page when filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, sortBy]);

  const handleAddToCart = (product) => {
    if (cart && cart.addToCart) {
      cart.addToCart({ 
        id: product.id, 
        name: product.name, 
        price: product.price, 
        img: product.image 
      });
    }
  };

  // Pagination handlers
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <section id="products" className={`product-grid ${activeFilter === 'all' ? 'all-active' : ''}`}>
      <h2>Our Products</h2>
      
      {/* Filter Controls */}
      <div className="filter-controls">
        <div className="filters">
          <span className="filter-label">Filter by Type:</span>
          {availableTypes.map((type) => (
            <button 
              key={type} 
              className={`filter-btn ${activeFilter === type ? "active" : ""}`} 
              onClick={() => setActiveFilter(type)}
            >
              {type === "all" ? "All Products" : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="sort-controls">
          <label htmlFor="sort-select">Sort by:</label>
          <select 
            id="sort-select"
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="default">Default</option>
            <option value="name">Name (A-Z)</option>
            <option value="price-low">Price (Low to High)</option>
            <option value="price-high">Price (High to Low)</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
      
      {/* Results Count */}
      <div className="results-count">
        Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProducts.length)} of {filteredProducts.length} products
        {activeFilter !== "all" && (
          <span className="active-filter">
            filtered by: <strong>{activeFilter}</strong>
            <button 
              className="clear-filter" 
              onClick={() => setActiveFilter("all")}
            >
              Clear filter
            </button>
          </span>
        )}
      </div>
      
      {/* Products Grid */}
      <div className="grid">
        {currentItems.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <article className="product">
              <div className="product-img">
                <img src={product.image || placeholder} alt={product.name} />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <div className="product-meta">
                <span className="price">{product.price}</span>
                <span className="rating" aria-label={`Rating ${product.rating}`}>
                  {product.rating}
                </span>
              </div>
              <button 
                className="btn" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleAddToCart(product); 
                }}
              >
                Add to Cart
              </button>
            </article>
          </Link>
        ))}
      </div>
      
      {/* Pagination */}
      {filteredProducts.length > itemsPerPage && (
        <div className="pagination">
          <button
            className={`pagination-btn ${currentPage === 1 ? 'pagination-btn-disabled' : ''}`}
            onClick={goToPrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          {getPageNumbers().map((page, index) => (
            page === '...' ? (
              <span key={`dots-${index}`} className="pagination-dots">...</span>
            ) : (
              <button
                key={page}
                className={`pagination-btn ${currentPage === page ? 'pagination-btn-active' : ''}`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            )
          ))}
          
          <button
            className={`pagination-btn ${currentPage === totalPages ? 'pagination-btn-disabled' : ''}`}
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      <div className="pagination-info">
        Page {currentPage} of {totalPages}
      </div>
      
      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <div className="no-results">
          <p>No products found matching your criteria.</p>
          <button 
            className="btn btn-primary" 
            onClick={() => {
              setActiveFilter("all");
              setSortBy("default");
            }}
          >
            Show All Products
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductGrid;