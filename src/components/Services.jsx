import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Droplets,
  Mountain,
  Layers,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const applications = [
    {
      icon: Droplets,
      title: 'Drenagem',
      description: 'Controle eficiente do fluxo de água',
    },
    {
      icon: Shield,
      title: 'Filtração',
      description: 'Separação de partículas finas',
    },
    {
      icon: Mountain,
      title: 'Contenção',
      description: 'Estabilização de taludes e aterros',
    },
    {
      icon: Layers,
      title: 'Reforço',
      description: 'Aumento da resistência estrutural',
    },
  ];

  const productFeatures = [
    'Fabricado com fibras sintéticas de alta resistência',
    'Excelente desempenho em diversas condições climáticas',
    'Resistência superior à tração e perfuração',
    'Instalação simples e eficiente',
    'Contribui para sustentabilidade das obras',
    'Certificações técnicas e ambientais',
    'Disponível em diferentes gramaturas',
    'Garantia de qualidade e durabilidade',
  ];

  const productImages = [
    {
      src: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754259300652_09ygmvgttxxn_geotextil-front-506x372.jpg',
      alt: 'Geotêxtil não tecido - vista frontal',
    },
    {
      src: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754259302279_hj477urxar_geotextil-1-1024x768.jpg',
      alt: 'Aplicação de geotêxtil em obra',
    },
    {
      src: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754259304561_xnovr83hxwk_manta-geotextil-3-1024x768.jpg',
      alt: 'Manta geotêxtil em instalação',
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-accent-500 font-semibold text-lg tracking-wide uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Nossos Produtos
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Geotêxteis <span className="text-gradient">não Tecidos</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Soluções versáteis e duráveis para projetos de engenharia civil e
            ambiental. Ideais para estabilização de solos, drenagem, filtragem e
            proteção contra erosão.
          </motion.p>
        </motion.div>

        {/* Applications Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {applications.map((app, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <app.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-500 mb-2">
                {app.title}
              </h3>
              <p className="text-gray-600">{app.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Images */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="absolute -inset-4 bg-gradient-accent rounded-2xl blur-xl opacity-20"></div>
              <motion.img
                src={productImages[0].src}
                alt={productImages[0].alt}
                className="relative w-full h-80 object-cover rounded-2xl shadow-custom"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {productImages.slice(1).map((image, index) => (
                <motion.img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-40 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-primary-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Características Técnicas
              </motion.h3>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Os geotêxteis não tecidos são fabricados a partir de fibras
                sintéticas de alta resistência, oferecendo excelente desempenho
                em diversas condições climáticas e de solo. Sua instalação é
                simples e eficiente, contribuindo para a sustentabilidade e
                longevidade das obras.
              </motion.p>
            </div>

            {/* Features List */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h4 className="text-xl font-semibold text-primary-500 mb-4">
                Benefícios e Características
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {productFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.05, duration: 0.5 }}
                  >
                    <CheckCircle
                      size={20}
                      className="text-accent-500 flex-shrink-0 mt-0.5"
                    />
                    <p className="text-gray-600">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="btn-primary flex items-center space-x-2 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Project Example */}
        <motion.div
          className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-primary-500">
                Projeto em Destaque
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Participação da NTC Geo no projeto da Associação Pró Construção
                Empresarial Omega em Sorocaba, fornecendo soluções completas em
                geotêxteis para estabilização e drenagem da obra.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-accent rounded-full"></div>
                  <p className="text-gray-600">Aplicação em grande escala</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-accent rounded-full"></div>
                  <p className="text-gray-600">Resultados comprovados</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-accent rounded-full"></div>
                  <p className="text-gray-600">Projeto executado com sucesso</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754259306465_niwm52kae_ntcgeo-nt07-cliente-associacao-pro-construcao-empresarial-omega-sorocaba-2-1024x576.jpeg"
                alt="Projeto NTC Geo - Associação Pró Construção Empresarial Omega"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
