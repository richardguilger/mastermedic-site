import React from 'react';
import { motion } from 'framer-motion';
import ProductCarousel from './ProductCarousel';

const Products = () => {
    return (
        <section id="produtos" className="products">
            <div className="container">
                <h2 className="section-title">Nossas Soluções em Saúde</h2>

                {/* Product 1: Eletroterapia */}
                <motion.div
                    className="feature-row"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="feature-image">
                        <ProductCarousel
                            images={['/assets/img/eletroterapia_1.jpg', '/assets/img/eletroterapia_2.png']}
                            altText="Eletroterapia Intensiva"
                        />
                    </div>
                    <div className="feature-text">
                        <h3>Eletroterapia Intensiva (TENS e FES)</h3>
                        <p className="feature-highlight">Alívio imediato da dor e reabilitação muscular.</p>
                        <p>
                            Nossa tecnologia de Eletroterapia Intensiva combina as técnicas TENS (Estimulação Elétrica
                            Nervosa Transcutânea) e FES (Estimulação Elétrica Funcional) para proporcionar um tratamento
                            completo. Ideal para quem sofre com dores crônicas, tensões musculares ou precisa de
                            fortalecimento após lesões.
                        </p>
                        <p>Recupere sua mobilidade e viva sem as limitações da dor.</p>
                        <a href="#contato" className="btn-outline">Solicitar Orçamento</a>
                    </div>
                </motion.div>

                {/* Product 2: Cinta Massageadora */}
                <motion.div
                    className="feature-row reverse"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="feature-text">
                        <h3>Cinta Massageadora</h3>
                        <p className="feature-highlight">Sua massagem terapêutica diária.</p>
                        <p>
                            Desenvolvida para se adaptar perfeitamente ao seu corpo, a Cinta Massageadora Mastermedic atua
                            profundamente nos tecidos, promovendo relaxamento, redução do estresse e melhora da circulação
                            sanguínea local. Perfeita para usar em casa, no trabalho ou onde você estiver.
                        </p>
                        <p>Transforme seus momentos de descanso em sessões de terapia renovadora.</p>
                        <a href="#contato" className="btn-outline">Solicitar Orçamento</a>
                    </div>
                    <div className="feature-image">
                        <ProductCarousel
                            images={['/assets/img/cinta_massageadora_new_1.png', '/assets/img/cinta_massageadora_2.png']}
                            altText="Cinta Massageadora"
                        />
                    </div>
                </motion.div>

                {/* Product 3: Botas de Compressão */}
                <motion.div
                    className="feature-row"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="feature-image">
                        <ProductCarousel
                            images={['/assets/img/botas_compressao.png', '/assets/img/botas_compressao_2.png']}
                            altText="Botas de Compressão"
                        />
                    </div>
                    <div className="feature-text">
                        <h3>Botas de Compressão Pneumática</h3>
                        <p className="feature-highlight">Tecnologia de ponta para circulação e drenagem.</p>
                        <p>
                            As Botas de Compressão Mastermedic utilizam um sistema inteligente de massagem por pressão de ar
                            para estimular o fluxo sanguíneo e linfático. São essenciais para combater o inchaço nas pernas,
                            prevenir varizes, acelerar a recuperação pós-treino e proporcionar uma sensação única de leveza.
                        </p>
                        <p>Sinta suas pernas leves e revitalizadas todos os dias.</p>
                        <a href="#contato" className="btn-outline">Solicitar Orçamento</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Products;
