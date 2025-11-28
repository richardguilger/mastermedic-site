// Centralized image imports for proper bundling
// This ensures all images are processed by Vite and load correctly on all devices

// Hero carousel images
import heroSlide1 from '/public/assets/img/hero_slide_1.png';
import heroSlide2 from '/public/assets/img/hero_slide_2.png';
import heroSlide3 from '/public/assets/img/hero_slide_3.png';

// Product images - Eletroterapia
import eletroterapia1 from '/public/assets/img/eletroterapia_1.jpg';
import eletroterapia2 from '/public/assets/img/eletroterapia_2.png';

// Product images - Cinta Massageadora
import cintaMassageadora1 from '/public/assets/img/cinta_massageadora_new_1.png';
import cintaMassageadora2 from '/public/assets/img/cinta_massageadora_2.png';

// Product images - Botas de Compressão
import botasCompressao1 from '/public/assets/img/botas_compressao.png';
import botasCompressao2 from '/public/assets/img/botas_compressao_2.png';

// Telemedicine images
import telemedicina1 from '/public/assets/img/telemedicina_1.png';
import telemedicina2 from '/public/assets/img/telemedicina_2.png';

// Logo
import logo from '/public/assets/img/logo.png';

export const images = {
    hero: {
        slide1: heroSlide1,
        slide2: heroSlide2,
        slide3: heroSlide3,
    },
    products: {
        eletroterapia: [eletroterapia1, eletroterapia2],
        cintaMassageadora: [cintaMassageadora1, cintaMassageadora2],
        botasCompressao: [botasCompressao1, botasCompressao2],
    },
    telemedicina: [telemedicina1, telemedicina2],
    logo: logo,
};

export default images;
