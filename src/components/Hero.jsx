import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        '/assets/img/hero_slide_1.png',
        '/assets/img/hero_slide_2.png',
        '/assets/img/hero_slide_3.png'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section id="home" className="hero">
            <div className="hero-carousel">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 95, 115, 0.7), rgba(10, 147, 150, 0.5)), url('${slide}')`
                        }}
                    ></div>
                ))}
            </div>
            <div className="hero-content">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Viva Sem Limites: A Revolução no Seu Bem-Estar
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Tecnologia terapêutica avançada para quem não aceita menos que uma vida plena
                    e sem dores. Recupere sua liberdade agora.
                </motion.p>
                <motion.a
                    href="#produtos"
                    className="btn-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Quero Transformar Minha Vida
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;
