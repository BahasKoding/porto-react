import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Portfolio({ scrollToSection }) {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      description: "Meningkatkan UX dan konversi penjualan melalui redesign UI yang intuitif.",
      image: "https://via.placeholder.com/400x300",
      details: "Proyek ini bertujuan untuk meningkatkan pengalaman pengguna dan tingkat konversi pada platform e-commerce. Melalui analisis mendalam terhadap perilaku pengguna dan tren desain terkini, kami berhasil menciptakan antarmuka yang lebih intuitif dan menarik. Hasilnya, tingkat konversi meningkat sebesar 30% dalam 3 bulan pertama setelah peluncuran.",
      github: "",
      demo: "",
    },
    {
      id: 2,
      title: "Aplikasi Manajemen Tugas",
      description: "Mengembangkan aplikasi produktivitas dengan fitur kolaborasi real-time.",
      image: "https://via.placeholder.com/400x300",
      details: "Aplikasi ini dirancang untuk membantu tim meningkatkan produktivitas mereka. Dengan fitur kolaborasi real-time, pengguna dapat berbagi tugas, menetapkan deadline, dan melacak progres proyek dengan mudah. Feedback dari pengguna sangat positif, dengan 90% melaporkan peningkatan efisiensi kerja tim.",
      github: "",
      demo: "",
    },
    {
      id: 3,
      title: "Website Portofolio Interaktif",
      description: "Merancang website portofolio yang menampilkan karya secara dinamis dan interaktif.",
      image: "https://via.placeholder.com/400x300",
      details: "Proyek ini merupakan tantangan kreatif untuk menampilkan karya-karya desain secara interaktif. Menggunakan animasi dan transisi yang mulus, website ini memberikan pengalaman browsing yang menarik bagi pengunjung. Hasilnya adalah peningkatan waktu kunjungan rata-rata sebesar 40%.",
      github: "",
      demo: "",
    },
    {
      id: 4,
      title: "Aplikasi Pembelajaran Online",
      description: "Mengembangkan platform e-learning yang interaktif dan mudah digunakan.",
      image: "https://via.placeholder.com/400x300",
      details: "Platform ini dirancang untuk memudahkan proses belajar mengajar secara online. Dengan fitur-fitur seperti video conference terintegrasi, quiz interaktif, dan sistem manajemen tugas, platform ini telah membantu ribuan siswa dan guru dalam proses pembelajaran jarak jauh.",
      github: "",
      demo: "",
    },
    {
      id: 5,
      title: "Sistem Manajemen Inventori",
      description: "Merancang sistem inventori yang efisien untuk bisnis retail.",
      image: "https://via.placeholder.com/400x300",
      details: "Sistem ini dikembangkan untuk mengoptimalkan manajemen stok dan inventori pada bisnis retail. Dengan fitur pelacakan real-time, prediksi stok, dan integrasi dengan sistem POS, proyek ini berhasil meningkatkan efisiensi operasional dan mengurangi kerugian akibat overstock atau stockout.",
      github: "",
      demo: "",
    }
  ];

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


  const [selectedProject, setSelectedProject] = useState(null);

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
    <motion.section 
      className="bg-gray-100 py-20" 
      id="portfolio"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center"
          variants={itemVariants}
        >
          Karya Terbaik Saya
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer flex flex-col"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <img src={project.image} alt={project.title} loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
              </div>
              <div className="px-6 pb-4">
                <button
                  className="w-full bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  Lihat Detail
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <motion.button
            className="bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-primary-dark transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
          >
            Mari Berkolaborasi!
          </motion.button>
        </motion.div>

        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-lg p-8 max-w-4xl mx-4 w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto rounded-lg shadow-md" />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{selectedProject.title}</h3>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">{selectedProject.details}</p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
                      >
                        GitHub Repository
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white text-sm font-semibold py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                  <button
                    className="bg-gray-300 text-gray-800 text-sm font-semibold py-2 px-4 rounded hover:bg-gray-400 transition duration-300"
                    onClick={() => setSelectedProject(null)}
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

export default Portfolio;