import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        'https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            recipientEmail: 'contato@ntcbrasil.com.br',
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 5242-4280',
      action: 'tel:(11)5242-4280',
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@ntcbrasil.com.br',
      action: 'mailto:contato@ntcbrasil.com.br',
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'São Paulo, SP',
      action: null,
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      info: 'Seg - Sex: 8h às 18h',
      action: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
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
            Entre em Contato
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Vamos conversar sobre seu{' '}
            <span className="text-gradient">projeto</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Nossa equipe especializada está pronta para oferecer as melhores
            soluções em geotêxteis para seu projeto. Entre em contato e descubra
            como podemos ajudar.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
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
                Fale Conosco
              </motion.h3>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Conte com a experiência da NTC Geo para garantir o sucesso do
                seu projeto. Oferecemos suporte técnico especializado e soluções
                personalizadas.
              </motion.p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary-500 mb-1">
                        {item.title}
                      </h4>
                      {item.action ? (
                        <motion.a
                          href={item.action}
                          className="text-gray-600 hover:text-accent-500 transition-colors"
                          whileHover={{ scale: 1.02 }}
                        >
                          {item.info}
                        </motion.a>
                      ) : (
                        <p className="text-gray-600">{item.info}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="bg-gradient-accent rounded-2xl p-8 text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h4 className="text-xl font-bold mb-3">
                Precisa de uma cotação rápida?
              </h4>
              <p className="mb-4 opacity-90">
                Entre em contato por telefone para atendimento imediato
              </p>
              <motion.a
                href="tel:(11)5242-4280"
                className="inline-flex items-center space-x-2 bg-white text-primary-500 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                <span>Ligar Agora</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              className="text-2xl font-bold text-primary-500 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Envie sua Mensagem
            </motion.h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-primary-500 mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                  placeholder="Seu nome completo"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-primary-500 mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-primary-500 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors resize-none"
                  placeholder="Descreva seu projeto e como podemos ajudar..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </motion.button>
              </motion.div>

              {/* Status Messages */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center space-x-2 p-4 rounded-lg ${
                    submitStatus === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle size={20} />
                      <span>
                        Mensagem enviada com sucesso! Entraremos em contato em
                        breve.
                      </span>
                    </>
                  ) : (
                    <>
                      <AlertCircle size={20} />
                      <span>
                        Erro ao enviar mensagem. Tente novamente ou entre em
                        contato por telefone.
                      </span>
                    </>
                  )}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
