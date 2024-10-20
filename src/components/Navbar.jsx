import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const menuVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 }
  };

  const sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'Tentang' },
    { id: 'portfolio', name: 'Portofolio' },
    { id: 'testimonials', name: 'Testimoni' },
    { id: 'contact', name: 'Kontak' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const sectionElements = sections.map(section => document.getElementById(section.id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section) {
          const sectionTop = section.offsetTop - 100; // Adjust this value as needed
          if (currentScrollPos >= sectionTop) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/70 backdrop-blur-md border-b-2 border-primary' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <a href="#home" className="text-2xl font-bold text-white">Rai</a>
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-white hover:text-primary transition duration-300 ${
                activeSection === section.id ? 'text-primary' : ''
              }`}
            >
              {section.name}
            </button>
          ))}
        </div>
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <motion.div
        className="md:hidden overflow-hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="px-4 py-2 bg-dark/90 backdrop-blur-md">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block w-full text-left py-2 text-white hover:text-primary transition duration-300 ${
                activeSection === section.id ? 'text-primary' : ''
              }`}
            >
              {section.name}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;