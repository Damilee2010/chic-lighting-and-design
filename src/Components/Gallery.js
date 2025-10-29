// Gallery.js - Updated with 7 images per row
import React, { useState } from "react";
import "../styles/Gallery.css";

function Gallery() {
  const GALLERY = [
    { src: "/Images/led-spot.jpg" },
    { src: "/Images/led-decoration.jpg" },
    { src: "/Images/accent-light.jpg" },
    { src: "/Images/atlas-garden-lantern.jpg" },
    { src: "/Images/apart-led.jpg" },
    { src: "/Images/chandelier.jpg" },
    { src: "/Images/eclipse-garden-lamp.jpg" },
    { src: "/Images/nimbus-lantern.jpg" },
    { src: "/Images/wall-sconce.jpg" },
    { src: "/Images/strip-led.jpg" },
    { src: "/Images/lyra-outdoor-lantern.jpg" },
    { src: "/Images/solara-hanging-light.jpg" },
    { src: "/Images/vintage-lamp.jpg" },
    { src: "/Images/pendant-lamp.jpg" },
    { src: "/Images/zen-accent-light.jpg" },
    { src: "/Images/outdoor-lantern.jpg" },
    { src: "/Images/desk-lamp.jpg" },
    { src: "/Images/floor-lamp.jpg" },
    { src: "/Images/aria-reading-lamp.jpg" },
    { src: "/Images/table-lamp.jpg" },
    { src: "/Images/halo-patio-light.jpg" }
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 14; // Show 14 items per page (2 rows of 7)

  // Calculate pagination values
  const totalPages = Math.ceil(GALLERY.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = GALLERY.slice(startIndex, startIndex + itemsPerPage);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      closeModal();
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
    <section className="gallery-section animate-up">
      <h2 className="section-title">Gallery</h2>
      <p className="gallery-subtitle">
        Explore our lighting and fan collections — where modern design meets comfort.
      </p>
      
      <div className="gallery-grid">
        {currentItems.map((item, i) => (
          <div key={startIndex + i} className="gallery-item" onClick={() => openModal(item.src)}>
            <img src={item.src} alt={`Gallery ${startIndex + i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="gallery-pagination">
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
        Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, GALLERY.length)} of {GALLERY.length} images
      </div>

      {/* Modal Popup */}
      {selectedImage && (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <img src={selectedImage} alt="Enlarged view" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
