import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

function Contact() {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-white py-20" id="contact" ref={ref}>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2 
          className="text-4xl font-bold text-gray-800 mb-12 text-center"
          variants={fadeIn}
          initial="hidden"
          animate={controls}
        >
          Mari Berkolaborasi
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            variants={fadeIn}
            initial="hidden"
            animate={controls}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Hubungi Saya</h3>
            <p className="text-gray-600 mb-8">Ayo wujudkan ide brilian Anda menjadi realitas digital!</p>
            <div className="space-y-4">
              <a href="mailto:your.email@example.com" className="flex items-center text-gray-600 hover:text-primary transition duration-300">
                <FaEnvelope className="mr-4 text-xl" />
                <span>your.email@example.com</span>
              </a>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-primary transition duration-300">
                <FaLinkedin className="mr-4 text-xl" />
                <span>LinkedIn Profile</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center text-gray-600 hover:text-primary transition duration-300">
                <FaPhone className="mr-4 text-xl" />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            variants={fadeIn}
            initial="hidden"
            animate={controls}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition duration-300"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-dark transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Kirim Pesan
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;