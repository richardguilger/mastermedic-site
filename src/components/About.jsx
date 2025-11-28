import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="sobre" className="about">
            <div className="container">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>Sobre a Mastermedic BH</h2>
                    <p>Há mais de 14 anos a Mastermedic BH tem a missão de levar bem-estar e saúde de forma prática e acessível.</p>

                    <div className="values-grid">
                        <div className="value-item">
                            <i className="fas fa-heart"></i>
                            <h4>Missão</h4>
                            <p>Proporcionar conforto, alívio e qualidade de vida.</p>
                        </div>
                        <div className="value-item">
                            <i className="fas fa-handshake"></i>
                            <h4>Valores</h4>
                            <p>Compromisso, seriedade, verdade e transparência.</p>
                        </div>
                        <div className="value-item">
                            <i className="fas fa-shield-alt"></i>
                            <h4>Segurança</h4>
                            <p>Garantia de 5 anos. Produtos com ANVISA, ROHS, CE e INMETRO.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
