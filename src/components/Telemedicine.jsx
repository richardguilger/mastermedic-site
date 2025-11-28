import React from 'react';
import { motion } from 'framer-motion';
import images from '../assets/images';

const Telemedicine = () => {
    return (
        <section id="telemedicina" className="telemedicine">
            <div className="container">
                <motion.div
                    className="tele-content"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="badge">Exclusividade Mastermedic</span>
                    <h2>Programa Telemedicina Integrada: Saúde na Palma da Sua Mão</h2>
                    <p className="highlight">Cuidado médico completo, sem filas e sem sair de casa.</p>
                    <p>
                        Imagine ter um médico à sua disposição 24 horas por dia, 7 dias por semana. Com o nosso Programa de
                        Telemedicina Integrada, isso é realidade. Oferecemos acesso imediato a profissionais qualificados
                        para cuidar de você e da sua família, garantindo tranquilidade e segurança em todos os momentos.
                    </p>
                    <ul className="tele-benefits">
                        <li><i className="fas fa-check-circle"></i> Pronto atendimento médico ilimitado.</li>
                        <li><i className="fas fa-check-circle"></i> Sem necessidade de deslocamento ou espera em hospitais.</li>
                        <li><i className="fas fa-check-circle"></i> Programa com custo zero, exclusivo para nossos clientes.</li>
                    </ul>
                    <a href="https://acesso.qualitylifebrasil.com.br" target="_blank" className="btn-gradient pulse">
                        QUERO ACESSAR AGORA <i className="fas fa-arrow-right"></i>
                    </a>
                    <p className="legal-note" style={{ fontSize: '0.8rem', marginTop: '1rem', opacity: 0.8 }}>
                        PROJETO DE LEI N.º 2.464, DE 2024
                    </p>
                </motion.div>
                <motion.div
                    className="tele-image"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={images.telemedicina[1]} alt="Médico em atendimento online" />
                </motion.div>
            </div>
        </section>
    );
};

export default Telemedicine;
