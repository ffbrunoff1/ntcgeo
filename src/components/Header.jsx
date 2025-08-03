import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Produtos', id: 'services' },
    { name: 'Contato', id: 'contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754259313480_0.png"
              alt="NTC Geo"
              className={`h-10 md:h-12 w-auto transition-all duration-300 ${
                isScrolled ? 'filter-none' : ''
              }`}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map(item => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 hover:text-accent-500 ${
                  isScrolled ? 'text-primary-500' : 'text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="tel:(11)5242-4280"
              className={`hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-accent text-white hover:shadow-lg'
                  : 'bg-white text-primary-500 hover:bg-gray-50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={16} />
              <span>(11) 5242-4280</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-primary-500' : 'text-white'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-3 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            {menuItems.map(item => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-primary-500 font-medium hover:text-accent-500 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.a
              href="tel:(11)5242-4280"
              className="flex items-center space-x-2 px-4 py-2 text-primary-500 font-medium hover:text-accent-500 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={16} />
              <span>(11) 5242-4280</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
