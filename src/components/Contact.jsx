import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contato" className="contact">
            <div className="container">
                <h2 className="section-title">Fale Conosco</h2>
                <div className="contact-grid">
                    {/* Contact Info Card */}
                    <motion.div
                        className="contact-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="icon-box">
                            <i className="fas fa-headset"></i>
                        </div>
                        <h3>Central de Atendimento</h3>
                        <p>Estamos prontos para te atender.</p>
                        <div className="contact-details">
                            <a href="tel:08005560006" className="contact-link"><i className="fas fa-phone-alt"></i> 0800 556 0006</a>
                            <a href="mailto:atendimento@mastermedicbh.com" className="contact-link"><i className="fas fa-envelope"></i> atendimento@mastermedicbh.com</a>
                            <a href="mailto:mastermedicbh@gmail.com" className="contact-link"><i className="fas fa-envelope"></i> mastermedicbh@gmail.com</a>
                        </div>
                    </motion.div>

                    {/* WhatsApp Card */}
                    <motion.div
                        className="contact-card highlight-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="icon-box">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                        <h3>WhatsApp</h3>
                        <p>Atendimento rápido e personalizado.</p>
                        <a href="https://wa.me/5531999675382" target="_blank" className="btn-whatsapp-large pulse">
                            <i className="fab fa-whatsapp"></i> Iniciar Conversa
                        </a>
                        <p className="phone-number">+55 31 99967-5382</p>
                    </motion.div>

                    {/* Location Card */}
                    <motion.div
                        className="contact-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="icon-box">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <h3>Localização</h3>
                        <p><strong>Mastermedic Equipamentos de Massagem LTDA</strong></p>
                        <p>Belo Horizonte - MG</p>
                        <p className="cnpj">CNPJ: 47.730.075/0001-91</p>
                        <div className="flags-container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" alt="Bandeira do Brasil" className="flag-small" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Bandeira_de_Minas_Gerais.svg" alt="Bandeira de Minas Gerais" className="flag-small" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
