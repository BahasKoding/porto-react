import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaInstagram, FaTiktok, FaYoutube, FaEnvelope, FaDiscord, FaWhatsapp, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

function Footer({ scrollToSection }) {
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

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log('Subscribed:', email);
    setEmail('');
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaInstagram, url: 'https://instagram.com/yourusername', label: 'Instagram' },
    { icon: FaTiktok, url: 'https://tiktok.com/@yourusername', label: 'TikTok' },
    { icon: FaYoutube, url: 'https://youtube.com/c/yourchannel', label: 'YouTube' },
    { icon: FaEnvelope, url: 'mailto:your.email@example.com', label: 'Email' },
    { icon: FaDiscord, url: 'https://discord.gg/yourserver', label: 'Discord' },
    { icon: FaWhatsapp, url: 'https://wa.me/yourphonenumber', label: 'WhatsApp' },
  ];

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
    <motion.footer 
      className="bg-dark text-white py-16"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
        >
          {/* Column 1: About */}
          <motion.div variants={itemVariants} className="text-left">
            <h3 className="text-2xl font-bold mb-4">Rai</h3>
            <p className="text-gray-400 mb-4">
              Mahasiswa Sistem Informasi yang bersemangat dalam pengembangan web, pembuatan konten, dan pemasaran digital. 
              Berdedikasi untuk mengeksplorasi dan menciptakan solusi digital yang inovatif.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.label}
                >
                  <link.icon className="text-2xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="text-left">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                {['home', 'about', 'portfolio', 'testimonials', 'contact'].map((section) => (
                  <li key={section}>
                    <motion.button
                      onClick={() => scrollToSection(section)}
                      className="text-gray-400 hover:text-primary transition duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Column 3: Newsletter */}
          <motion.div variants={itemVariants} className="text-left">
            <h3 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with my latest projects and tech insights.</p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="border border-gray-700 p-2 rounded-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="bg-transparent text-white w-full focus:outline-none"
                />
              </div>
              <motion.button
                type="submit"
                className="bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.hr className="my-8 border-gray-700" variants={itemVariants} />

        {/* Bottom section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rai. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="/privacy-policy" className="text-gray-400 hover:text-primary text-sm transition duration-300">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-400 hover:text-primary text-sm transition duration-300">Terms of Service</a>
          </div>
        </motion.div>

        {/* Made with love section */}
        <motion.div 
          className="mt-8 text-center text-gray-500 text-sm"
          variants={itemVariants}
        >
          <p>
            Dibuat dengan ❤️ oleh{' '}
            <a 
              href="https://www.instagram.com/bahaskoding/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark transition-colors duration-300"
            >
              Rai
            </a>{' '}
            menggunakan{' '}
            <a 
              href="https://reactjs.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <FaReact className="inline-block mx-1 text-blue-400 hover:text-blue-500 transition-colors duration-300" />
            </a>{' '}
            dan{' '}
            <a 
              href="https://tailwindcss.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <SiTailwindcss className="inline-block mx-1 text-teal-400 hover:text-teal-500 transition-colors duration-300" />
            </a>
          </p>
          <p className="mt-2">
            Menggabungkan kreativitas dan teknologi untuk menciptakan pengalaman web yang luar biasa
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;