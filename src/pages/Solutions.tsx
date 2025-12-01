import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Building2, Store, Home, Hospital, GraduationCap, Landmark } from 'lucide-react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Link } from 'react-router-dom';

export const Solutions: React.FC = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      icon: Building2,
      title: 'Enterprise Solutions',
      description: 'Comprehensive telecommunications and ICT infrastructure for large organizations',
      features: [
        'Scalable network infrastructure',
        'Cloud-based communications',
        'Enterprise security solutions',
        'Data center services',
        'Business continuity planning',
      ],
    },
    {
      icon: Store,
      title: 'SMB Solutions',
      description: 'Affordable and effective solutions designed for small and medium businesses',
      features: [
        'Cost-effective packages',
        'Managed IT services',
        'Cloud solutions',
        'Business phone systems',
        'Network security',
      ],
    },
    {
      icon: Home,
      title: 'Residential Solutions',
      description: 'High-speed internet and connectivity for homes',
      features: [
        'FTTH installations',
        'High-speed internet',
        'Home networking',
        'Smart home integration',
        '24/7 support',
      ],
    },
    {
      icon: Hospital,
      title: 'Healthcare',
      description: 'Specialized solutions for healthcare facilities',
      features: [
        'HIPAA-compliant systems',
        'Telemedicine infrastructure',
        'Medical-grade networks',
        'Patient data security',
        'Reliable connectivity',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Connectivity solutions for educational institutions',
      features: [
        'Campus-wide WiFi',
        'E-learning platforms',
        'Secure student networks',
        'Video conferencing',
        'Content filtering',
      ],
    },
    {
      icon: Landmark,
      title: 'Government',
      description: 'Secure and reliable solutions for government entities',
      features: [
        'Government-grade security',
        'Secure communications',
        'Network redundancy',
        'Compliance solutions',
        'Emergency services',
      ],
    },
  ];

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
              Tailored Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Industry-specific telecommunications and ICT solutions designed to meet your
              unique needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-container bg-white dark:bg-dark-charcoal">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card featured className="h-full">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 hover:shadow-glow-cyan transition-shadow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact">
            <Button variant="primary">{t('common.requestQuote')}</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
