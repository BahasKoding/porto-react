import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import backgroundSvg from '../assets/bg.svg'; // Pastikan path ini benar

function Testimonials({ scrollToSection }) {
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

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechInnovate",
      content: "Kolaborasi dengan Anda telah membawa perubahan signifikan pada platform kami. Pemahaman mendalam Anda tentang UX dan kemampuan teknis yang luar biasa menghasilkan peningkatan engagement user sebesar 35%.",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      role: "Product Manager, StartUp X",
      content: "Pendekatan Anda dalam menyelesaikan masalah desain yang kompleks sungguh mengesankan. Solusi yang Anda berikan tidak hanya estetis, tapi juga meningkatkan efisiensi operasional kami sebesar 40%.",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "CTO, DataDriven Co.",
      content: "Keahlian Anda dalam full-stack development sungguh luar biasa. Aplikasi yang Anda kembangkan tidak hanya cepat dan aman, tapi juga sangat skalabel. Ini telah membantu kami menghemat 50% biaya infrastruktur.",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-dark text-white py-20 relative overflow-hidden" id="testimonials" ref={ref}>
        {/* Background SVG */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: `url(${backgroundSvg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3, // Sesuaikan opacity sesuai kebutuhan
          }}
        />
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          variants={fadeIn}
          initial="hidden"
          animate={controls}
        >
          Apa Kata Mereka Tentang Saya?
        </motion.h2>
        
        <motion.div 
          className="relative"
          variants={fadeIn}
          initial="hidden"
          animate={controls}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-2xl italic mb-8">"{testimonials[currentIndex].content}"</p>
              <div className="flex items-center justify-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-16 h-16 rounded-full mr-4 border-2 border-primary"
                />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-primary">{testimonials[currentIndex].name}</h3>
                  <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={prevTestimonial} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-dark p-2 rounded-full"
          >
            &#8592;
          </button>
          <button 
            onClick={nextTestimonial} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-dark p-2 rounded-full"
          >
            &#8594;
          </button>
        </motion.div>

        <motion.div 
          className="mt-16 text-center "
          variants={fadeIn}
          initial="hidden"
          animate={controls}
        >
          <p className="text-xl text-gray-300 mb-8">
            Saya berkomitmen untuk memberikan hasil terbaik dan nilai tambah bagi setiap proyek yang saya kerjakan.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="inline-block bg-primary text-dark font-semibold py-3 px-8 rounded-full hover:bg-opacity-80 transition duration-300"
          >
            Mulai Proyek Bersama
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;