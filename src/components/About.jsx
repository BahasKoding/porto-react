import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import akademiKreator from '../assets/Akademi_kreator.png';
import coursera from '../assets/Coursera.png';
import bnsp from '../assets/BNSP.png';
import { SiMysql, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiReact, SiGit, SiGithub, SiLaravel, SiPhp, SiPostgresql, SiTailwindcss, SiBootstrap } from 'react-icons/si';
import canvaIcon from '../assets/logo/canva.png';
import capcutIcon from '../assets/logo/capcut.png';
import chatgptIcon from '../assets/logo/chatgpt.png';
import cursorIcon from '../assets/logo/cursor.svg';
import figmaIcon from '../assets/logo/figma.png';
import vscodeIcon from '../assets/logo/vscode.png';
import wordIcon from '../assets/logo/microsoft.png';
import excelIcon from '../assets/logo/excel.png';
import pptIcon from '../assets/logo/ppt.png';
import laragonIcon from '../assets/logo/laragon.svg';
import postmanIcon from '../assets/logo/postman.svg';
import xamppIcon from '../assets/logo/xampp.svg';
import notionIcon from '../assets/logo/notion.svg';
import xmindIcon from '../assets/logo/xmind.svg';
import viteIcon from '../assets/logo/vite.svg';

function About() {
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

  const skills = [
    { name: 'HTML', icon: SiHtml5 },
    { name: 'CSS', icon: SiCss3 },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'React.js', icon: SiReact },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'PHP', icon: SiPhp },
    { name: 'Laravel', icon: SiLaravel },
    { name: 'MySQL', icon: SiMysql },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Bootstrap', icon: SiBootstrap },
  ];
  
  const tools = [
    { name: 'VS Code', icon: vscodeIcon },
    { name: 'Figma', icon: figmaIcon },
    { name: 'Postman', icon: postmanIcon },
    { name: 'XAMPP', icon: xamppIcon },
    { name: 'Laragon', icon: laragonIcon },
    { name: 'Canva', icon: canvaIcon },
    { name: 'CapCut', icon: capcutIcon },
    { name: 'ChatGPT', icon: chatgptIcon },
    { name: 'Cursor', icon: cursorIcon },
    { name: 'Word', icon: wordIcon },
    { name: 'Excel', icon: excelIcon },
    { name: 'PowerPoint', icon: pptIcon },
    { name: 'Notion', icon: notionIcon },
    { name: 'XMind', icon: xmindIcon },
    { name: 'Vite', icon: viteIcon },
  ];

  const achievements = [
    {
      title: "Akademi Kreator",
      description: "Menyelesaikan program pelatihan intensif di Akademi Kreator, mengembangkan keterampilan dalam pembuatan konten digital dan strategi pemasaran online.",
      image: akademiKreator
    },
    {
      title: "Sertifikasi Google IT Support",
      description: "Meraih sertifikasi profesional dari Google dalam bidang IT Support, memperdalam pemahaman tentang troubleshooting, manajemen sistem, keamanan jaringan, dan layanan pelanggan dalam lingkungan IT.",
      image: coursera
    },
    {
      title: "Sertifikasi BNSP (Badan Nasional Sertifikasi Profesi)",
      description: "Memperoleh sertifikasi kompetensi nasional dari BNSP, mengakui keahlian profesional dalam bidang teknologi informasi sesuai standar industri Indonesia.",
      image: bnsp
    }
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  return (
    <section className="bg-white py-20" id="about" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center"
          variants={fadeIn}
          initial="hidden"
          animate={controls}
        >
          Tentang Saya
        </motion.h2>

        <motion.div 
          className="space-y-8 text-center lg:text-left"
          variants={fadeIn}
          initial="hidden"
          animate={controls}
        >
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Saya adalah seorang <span className="text-primary font-semibold">mahasiswa jurusan Sistem Informasi</span> dengan 
            passion yang mendalam dalam menjelajahi dunia digital. Fokus utama saya meliputi 
            <span className="text-primary font-semibold"> pengembangan web, pembuatan konten, dan pemasaran digital</span>.
          </p>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Dengan pengalaman <span className="text-primary font-semibold">1-3 tahun</span> di industri teknologi, 
            saya telah terlibat dalam berbagai proyek yang menantang, mulai dari pengembangan aplikasi web sederhana 
            hingga kampanye pemasaran digital yang kreatif.
          </p>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Keahlian Utama</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  {React.createElement(skill.icon, {
                    className: "w-10 h-10 md:w-14 md:h-14 text-gray-400 hover:text-[#4F46E5] transition-all duration-300",
                    title: skill.name
                  })}
                  <span className="mt-2 text-xs text-gray-500">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Tools yang Saya Gunakan</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.img 
                    src={tool.icon} 
                    alt={tool.name}
                    className="w-10 h-10 md:w-14 md:h-14 object-contain"
                    title={tool.name}
                    loading="lazy"
                    initial={{ filter: "grayscale(100%)" }}
                    whileHover={{ filter: "grayscale(0%)" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="mt-2 text-xs text-gray-500">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Saya percaya bahwa kombinasi antara teknologi dan kreativitas memiliki kekuatan untuk menciptakan perubahan positif. 
            Itulah mengapa saya selalu bersemangat untuk mengambil bagian dalam proyek-proyek yang tidak hanya menantang secara teknis, 
            tetapi juga memiliki dampak nyata dalam dunia digital.
          </p>
        </motion.div>

        <motion.div 
          className="mt-12"
          variants={fadeIn}
          initial="hidden"
          animate={controls}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">Pencapaian Terbaru</h3>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ 
                clickable: true,
                el: '.swiper-pagination'
              }}
              autoplay={{ delay: 5000 }}
              className="bg-gray-100 rounded-lg"
            >
              {achievements.map((achievement, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col md:flex-row items-center p-6 md:p-10">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full md:w-1/3 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 cursor-pointer"
                      loading="lazy"
                      onClick={() => {
                        setSelectedImage(achievement.image);
                        setModalOpen(true);
                      }}
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 text-primary hover:text-dark transition-colors duration-300"></div>
            <div className="swiper-button-next absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 text-primary hover:text-dark transition-colors duration-300"></div>
            <div className="swiper-pagination absolute bottom-2 left-1/2 transform -translate-x-1/2"></div>
       </div>
        </motion.div>
      </div>

      {/* Modal for enlarged image */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setModalOpen(false)}
          >
            <motion.img
              src={selectedImage}
              alt="Achievement"
              className="max-w-full max-h-full object-contain rounded-lg p-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default About;