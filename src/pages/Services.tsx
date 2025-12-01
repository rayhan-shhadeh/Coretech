import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { Wifi, Shield, Cpu, Radio, Cable, Network, ArrowRight, CheckCircle } from 'lucide-react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';

const servicesData = {
  telecommunications: {
    icon: Wifi,
    title: 'Telecommunications Solutions',
    description: 'Comprehensive telecommunications infrastructure and network solutions',
    features: [
      'Network Design & Implementation',
      'Voice & Data Services',
      'VoIP Solutions',
      'Unified Communications',
      'Network Optimization',
      'Infrastructure Management',
    ],
    benefits: [
      'Reliable connectivity',
      'Scalable solutions',
      'Cost-effective implementation',
      '24/7 support',
    ],
  },
  ict: {
    icon: Cpu,
    title: 'ICT Services',
    description: 'Cutting-edge information and communication technology services',
    features: [
      'IT Infrastructure Setup',
      'Cloud Solutions',
      'Data Center Services',
      'Digital Transformation',
      'System Integration',
      'Managed IT Services',
    ],
    benefits: [
      'Enhanced productivity',
      'Reduced IT costs',
      'Improved security',
      'Business continuity',
    ],
  },
  cybersecurity: {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your digital assets',
    features: [
      'Security Assessments',
      'Firewall & Network Security',
      'Endpoint Protection',
      'Security Monitoring',
      'Incident Response',
      'Compliance Solutions',
    ],
    benefits: [
      'Data protection',
      'Threat prevention',
      'Regulatory compliance',
      'Peace of mind',
    ],
  },
  '4g5g': {
    icon: Radio,
    title: '4G/5G Implementation',
    description: 'Next-generation mobile network deployment and optimization',
    features: [
      '4G/5G Network Deployment',
      'Network Planning',
      'Site Acquisition',
      'Radio Access Network',
      'Core Network Setup',
      'Performance Optimization',
    ],
    benefits: [
      'Ultra-fast connectivity',
      'Low latency',
      'High capacity',
      'Future-ready infrastructure',
    ],
  },
  ftth: {
    icon: Cable,
    title: 'Fiber to the Home (FTTH)',
    description: 'High-speed fiber optic connectivity directly to your premises',
    features: [
      'Fiber Network Design',
      'Installation Services',
      'ONT Configuration',
      'Splicing & Testing',
      'Maintenance & Support',
      'Upgrade Services',
    ],
    benefits: [
      'Lightning-fast speeds',
      'Reliable connection',
      'Future-proof technology',
      'Enhanced bandwidth',
    ],
  },
  distribution: {
    icon: Network,
    title: 'Distribution Services',
    description: 'Authorized distributor and reseller of leading technology brands',
    features: [
      'Product Sourcing',
      'Inventory Management',
      'Logistics & Delivery',
      'Technical Support',
      'Warranty Services',
      'Training & Certification',
    ],
    benefits: [
      'Genuine products',
      'Competitive pricing',
      'Expert guidance',
      'Comprehensive support',
    ],
  },
};

export const Services: React.FC = () => {
  const { t } = useTranslation();
  const { serviceId } = useParams();

  // If serviceId exists, show individual service page
  if (serviceId && servicesData[serviceId as keyof typeof servicesData]) {
    const service = servicesData[serviceId as keyof typeof servicesData];
    const Icon = service.icon;

    return (
      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-deep-blue to-dark-charcoal text-white py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="w-10 h-10" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                {service.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="section-container bg-white dark:bg-dark-charcoal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Key Features</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-electric-cyan flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Benefits</h2>
              <Card featured className="h-full">
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button variant="primary">{t('common.requestQuote')}</Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // Services overview page
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-deep-blue to-dark-charcoal text-white py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-container bg-white dark:bg-dark-charcoal">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(servicesData).map(([key, service], index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/services/${key}`}>
                  <Card featured className="h-full group cursor-pointer hover:shadow-colored-cyan">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-glow-cyan transition-all">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-electric-cyan group-hover:translate-x-2 transition-transform">
                      <span className="font-medium">{t('common.learnMore')}</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
