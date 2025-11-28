import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Telemedicine from './components/Telemedicine';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Telemedicine />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
