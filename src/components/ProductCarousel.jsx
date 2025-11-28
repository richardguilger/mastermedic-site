import React, { useState } from 'react';

const ProductCarousel = ({ images, altText }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="product-carousel">
            {images.map((img, index) => (
                <div key={index} className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}>
                    <img src={img} alt={`${altText} ${index + 1}`} />
                </div>
            ))}
            <div className="carousel-nav">
                <button className="carousel-prev" onClick={prevSlide}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="carousel-next" onClick={nextSlide}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default ProductCarousel;
