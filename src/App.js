import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar.jsx'
import Hero from './components/Hero';
import About from './components/AboutUs.jsx'
import Features from './components/Products.jsx';
import ColorPalettes from './components/ColorPalette.jsx'
import Projects from './components/Projects';
import BannerSection from './components/BannerSection'
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <TopNavbar/>
      <Navbar />
      <Hero />
      <About/>
      <Features />
      <ColorPalettes/>
      <Projects/>
      <Testimonial />
      <BannerSection/>
     <FAQ />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
