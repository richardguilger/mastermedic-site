import React, { useState } from 'react';
import images from '../assets/images';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header id="header">
            <div className="container">
                <div className="logo">
                    <a href="#home">
                        <img src={images.logo} alt="Mastermedic BH Logo" />
                    </a>
                </div>
                <nav className={isMenuOpen ? 'active' : ''}>
                    <ul>
                        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Início</a></li>
                        <li><a href="#telemedicina" onClick={() => setIsMenuOpen(false)}>Telemedicina</a></li>
                        <li><a href="#produtos" onClick={() => setIsMenuOpen(false)}>Produtos</a></li>
                        <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
                        <li><a href="#contato" className="btn-contact" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
                    </ul>
                </nav>
                <div className="mobile-menu-icon" onClick={toggleMenu}>
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </div>
        </header>
    );
};

export default Header;
