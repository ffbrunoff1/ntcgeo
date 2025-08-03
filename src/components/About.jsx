import React from 'react'
import { motion } from 'framer-motion'
import { Award, Target, Users, Truck } from 'lucide-react'

export default function About() {
  const stats = [
    {
      icon: Award,
      number: '15+',
      label: 'Anos de experiência',
      description: 'Tradição no mercado'
    },
    {
      icon: Target,
      number: '1000+',
      label: 'Projetos realizados',
      description: 'Obras de sucesso'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Clientes ativos',
      description: 'Confiança garantida'
    },
    {
      icon: Truck,
      number: '24h',
      label: 'Entrega rápida',
      description: 'Logística eficiente'
    }
  ]

  const benefits = [
    'Produtos de alta qualidade e durabilidade',
    'Distribuição em todo território nacional',
    'Suporte técnico especializado',
    'Preços competitivos e condições especiais',
    'Estoque permanente para pronta entrega',
    'Certificações técnicas e ambientais'
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.p 
                className="text-accent-500 font-semibold text-lg tracking-wide uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Sobre a NTC Geo
              </motion.p>
              
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Líder em soluções de{' '}
                <span className="text-gradient">manta geotêxtil</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                A NTC Geo é reconhecida como o maior distribuidor do Brasil de manta geotêxtil, 
                especializada em soluções avançadas para infraestrutura na construção civil. 
                Nossa expertise em drenagem, filtração, contenção, reforço e separação garante 
                resultados excepcionais em cada projeto.
              </motion.p>

              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Com uma equipe altamente qualificada e produtos de qualidade superior, 
                oferecemos soluções personalizadas que atendem às necessidades específicas 
                de cada cliente, desde pequenas obras até grandes projetos de infraestrutura.
              </motion.p>
            </div>

            {/* Benefits */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-4">
                Nossos Diferenciais
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-2 h-2 bg-gradient-accent rounded-full flex-shrink-0"></div>
                    <p className="text-gray-600">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Stats & Image */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Featured Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="absolute -inset-4 bg-gradient-accent rounded-2xl blur-xl opacity-20"></div>
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754259301265_8kqprggoyz6_manta-geotextil-7-1024x768.jpg"
                alt="Instalação de manta geotêxtil"
                className="relative w-full h-80 object-cover rounded-2xl shadow-custom"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <motion.h3 
                    className="text-2xl font-bold text-primary-500 mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="font-semibold text-gray-700 mb-1">{stat.label}</p>
                  <p className="text-sm text-gray-500">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}