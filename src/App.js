import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import Residents from './components/Residents';
// import Media from './components/media';
import Loading from './components/Loading';
// import SpecialProjects from './components/Product';
// import Production from './components/Service';
// import Advertisement from './components/Advertisement';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';
import './assets/fonts/fonts.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NetWork from './components/Network';
import Expertise from './components/Expertise';
import Training from './components/Training';
import Service from './components/PGNAAservice';
import PGNAAService from './components/PGNAAservice';
import XRayservice from './components/XRayservice';
import RadiationProducts from './components/RadiationProducts';
// import
function App() {
  const [loading, setLoading] = useState(true);
  const [cursorExpanded, setCursorExpanded] = useState(false);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 2000);

    // Custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    };

    const expandCursor = () => {
      cursor.classList.add('custom-cursor-expanded');
      setCursorExpanded(true);
    };

    const shrinkCursor = () => {
      cursor.classList.remove('custom-cursor-expanded');
      setCursorExpanded(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', expandCursor);
      el.addEventListener('mouseleave', shrinkCursor);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', expandCursor);
        el.removeEventListener('mouseleave', shrinkCursor);
      });
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <Loading />
      ) : (
        <div className="min-h-screen" >
          <BrowserRouter>
          <Navbar />
            <Routes>
              <Route index path="/" key="home" element={<Hero />} />
              <Route path="/about-us" key="about" element={<About />} />
              <Route path="/contact-us" key="contact" element={<Contact />} />
              <Route path="/our-network" key="network" element={<NetWork />} />
              <Route path="/expertise" key="expertise" element={<Expertise />} />
              <Route path="/training" key="expertise" element={<Training />} />
              <Route path="/service/pgnaa-service" key="service" element={<PGNAAService />} />
              <Route path="/service/xray-service" key="service" element={<XRayservice />} />
              <Route path="/product/radiation-product" key="service" element={<RadiationProducts />} />
              {/* <Route path="/about" key="about" element={<AboutUs />} />
              <Route path="/service/pgnaa-analyzer" key="pgnaa-analyzer" element={<AboutUs />} />
              <Route path="/service/xray-analyzer" key="xray-analyzer" element={<AboutUs />} />
              <Route path="/product/xrf-sample-preperation-product" key="xrf-sample-preperation-product" element={<AboutUs />} /> */}
              {/* <Route path="/product/radiation-isotope-products" key="radiation-isotope-products" element={<XRF />} /> */}

              {/* <Route path="/training" key="training" element={<AboutUs />} />
              <Route path="/network" key="network" element={<AboutUs />} /> */}
            </Routes>
          </BrowserRouter>

          {/* <About /> */}
          {/* <Media /> */}
          {/* <Residents /> */}
          {/* <SpecialProjects /> */}
          {/* <Production />
          <Advertisement /> */}
          {/* <Contact /> */}
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App; 