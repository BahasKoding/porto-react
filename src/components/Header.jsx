import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Typed from 'typed.js';
import profileImage from '../assets/rai.png';
import backgroundSvg from '../assets/bg.svg';

function Header({ scrollToSection }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Mahasiswa Sistem Informasi', 'Web Developer', 'Konten Kreator', 'Digital Marketer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <header 
        className="bg-dark text-white py-20 md:py-32 lg:py-40 relative overflow-hidden" 
        id="home" 
        ref={ref}
      >
        {/* Background SVG */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: `url(${backgroundSvg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5, // Sesuaikan opacity sesuai kebutuhan
          }}
        />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            className="w-full lg:w-1/2 mb-12 lg:mb-0 order-1 lg:order-1"
            variants={itemVariants}
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0 lg:w-96 lg:h-96 mb-8 lg:mb-0"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                className="absolute inset-0 bg-primary rounded-full"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.1 }
                }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.img
                src={profileImage}
                alt="Rai - Professional [Desain/Marketing/Web Development/Penulisan]"
                className="rounded-full w-full h-full object-cover border-4 border-white shadow-lg relative z-10"
                loading="eager"
                decoding="async"
                variants={{
                  rest: { scale: 1, rotate: 0 },
                  hover: { scale: 1.1, rotate: 5 }
                }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.div
                className="absolute inset-0 bg-primary rounded-full mix-blend-overlay"
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 0.3 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent rounded-full mix-blend-overlay"
                variants={{
                  rest: { opacity: 0, rotate: 0 },
                  hover: { opacity: 0.6, rotate: 360 }
                }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.div>
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-2"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              variants={itemVariants}
            >
              Hai, Saya <span className="text-primary">Rai</span>!
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-300"
              variants={itemVariants}
            >
              Seorang <span ref={typedRef} className="text-primary"></span>
            </motion.p>
            <motion.p 
              className="text-base md:text-lg mb-8 text-gray-400 max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Mengubah <span className="text-primary font-semibold">ide kreatif</span> menjadi 
              <span className="text-white font-semibold"> solusi digital yang inovatif</span>. 
              Saya memadukan <span className="text-primary font-semibold">teknologi, kreativitas, dan strategi</span> untuk 
              <span className="text-white font-semibold"> mengeksplorasi potensi dunia digital</span>.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              variants={itemVariants}
            >
              <motion.button
                className="bg-primary text-dark font-bold py-3 px-6 rounded-full hover:bg-opacity-80 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('portfolio')}
              >
                Lihat Portofolio
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-primary text-primary font-bold py-3 px-6 rounded-full hover:bg-primary hover:text-dark transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
              >
                Hubungi Saya
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;