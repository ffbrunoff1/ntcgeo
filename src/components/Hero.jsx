import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Layers, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const features = [
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Produtos de alta resistência e durabilidade',
    },
    {
      icon: Layers,
      title: 'Múltiplas Aplicações',
      description: 'Drenagem, filtração, contenção e reforço',
    },
    {
      icon: Zap,
      title: 'Instalação Rápida',
      description: 'Processo simples e eficiente',
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative container-custom pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.p
                className="text-accent-400 font-semibold text-lg tracking-wide uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Líder em Geotêxteis
              </motion.p>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Transforme a maneira como você{' '}
                <span className="text-gradient">constrói</span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Somos o maior distribuidor do Brasil de manta geotêxtil,
                oferecendo soluções completas em drenagem, filtração, contenção,
                reforço e separação para seus projetos de construção civil.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="btn-primary flex items-center justify-center space-x-2 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Fale Conosco Agora!</span>
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                onClick={scrollToServices}
                className="btn-secondary flex items-center justify-center space-x-2 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Nossos Produtos</span>
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid sm:grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center space-y-2"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-accent rounded-2xl blur-2xl opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754259300652_09ygmvgttxxn_geotextil-front-506x372.jpg"
                alt="Geotêxtil NTC Geo"
                className="relative w-full h-96 object-cover rounded-2xl shadow-custom"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Floating Cards */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md rounded-lg p-4 text-white"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-sm font-semibold">Maior Distribuidor</p>
              <p className="text-accent-400">do Brasil</p>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-lg p-4 text-white"
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            >
              <p className="text-sm font-semibold">Qualidade</p>
              <p className="text-accent-400">Garantida</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
