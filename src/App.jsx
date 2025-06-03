import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar.jsx'
import Hero from './components/Hero';
import About from './components/AboutUs.jsx'
import Products from './components/Products.jsx';
import ColorPalettes from './components/ColorPalette.jsx'
import Projects from './components/Projects';
import BannerSection from './components/BannerSection'
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer';

import ProductDetail from './components/ProductDetails.jsx'; // Naya component, product detail ke liye


function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <Navbar />

      <Routes>
        {/* Home page route jahan saare sections hain */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Products />
              <ColorPalettes />
              <Projects />
              <Testimonial />
              <BannerSection />
              <FAQ />
            </>
          }
        />

        {/* Product detail page */}
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
