import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Produtos', id: 'services' },
    { name: 'Contato', id: 'contact' },
  ];

  const services = [
    'Geotêxteis não Tecidos',
    'Drenagem e Filtração',
    'Contenção e Reforço',
    'Consultoria Técnica',
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '(11) 5242-4280',
      href: 'tel:(11)5242-4280',
    },
    {
      icon: Mail,
      text: 'contato@ntcbrasil.com.br',
      href: 'mailto:contato@ntcbrasil.com.br',
    },
    {
      icon: MapPin,
      text: 'São Paulo, SP',
      href: null,
    },
  ];

  return (
    <footer className="bg-gradient-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={scrollToTop}
            >
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754259313480_0.png"
                alt="NTC Geo"
                className="h-12 w-auto filter invert"
              />
            </motion.div>

            <p className="text-gray-300 leading-relaxed">
              Líder em soluções de geotêxteis para construção civil. Maior
              distribuidor do Brasil de manta geotêxtil com foco em drenagem,
              filtração, contenção, reforço e separação.
            </p>

            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/ntcbrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-1.5 h-1.5 bg-accent-400 rounded-full"></div>
                  <span className="text-gray-300">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold">Contato</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <item.icon size={16} className="text-accent-400" />
                  </div>
                  {item.href ? (
                    <motion.a
                      href={item.href}
                      className="text-gray-300 hover:text-accent-400 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      {item.text}
                    </motion.a>
                  ) : (
                    <span className="text-gray-300">{item.text}</span>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-sm text-gray-400 mb-2">
                Horário de Atendimento:
              </p>
              <p className="text-gray-300">Segunda a Sexta: 8h às 18h</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © 2024 NTC Geo. Todos os direitos reservados.
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center hover:bg-accent-600 transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
