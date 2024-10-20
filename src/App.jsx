import React, { Suspense, lazy } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

// Menggunakan dynamic import untuk lazy loading
const About = lazy(() => import('./components/About'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router basename="/porto-react">
      <div className="App">
        <Navbar scrollToSection={scrollToSection} />
        <Header scrollToSection={scrollToSection} />
        <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Portfolio scrollToSection={scrollToSection} />
        <Testimonials scrollToSection={scrollToSection} />
        <Contact />
        <Footer scrollToSection={scrollToSection} />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;