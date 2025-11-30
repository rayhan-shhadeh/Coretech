import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Solutions = lazy(() => import('./pages/Solutions').then(module => ({ default: module.Solutions })));
const Products = lazy(() => import('./pages/Products').then(module => ({ default: module.Products })));
const Partners = lazy(() => import('./pages/Partners').then(module => ({ default: module.Partners })));
const Resources = lazy(() => import('./pages/Resources').then(module => ({ default: module.Resources })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

// Loading component
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-charcoal">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-electric-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-gray-600 dark:text-gray-400">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-dark-charcoal smooth-scroll custom-scrollbar">
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/products" element={<Products />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
