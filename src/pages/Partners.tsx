import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Award, Globe, TrendingUp } from 'lucide-react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Link } from 'react-router-dom';

export const Partners: React.FC = () => {

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to international technology brands and solutions',
    },
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Authorized partnerships with industry leaders',
    },
    {
      icon: TrendingUp,
      title: 'Latest Technology',
      description: 'First access to cutting-edge products and innovations',
    },
    {
      icon: Handshake,
      title: 'Trusted Relationships',
      description: 'Long-term partnerships built on mutual success',
    },
  ];

  // Placeholder for partner logos
  const partners = Array(12).fill({ name: 'Partner Brand', logo: '' });

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
              Our Partners
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Collaborating with world-class technology brands to deliver exceptional solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section-container bg-white dark:bg-dark-charcoal">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold mb-4">
            Why Our Partnerships Matter
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Strategic alliances that bring you the best in technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 hover:shadow-glow-cyan transition-shadow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Partner Logos */}
      <section className="section-container bg-soft-gray dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold mb-4">
            Technology Partners
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Trusted brands we work with
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-32 flex items-center justify-center hover:shadow-xl transition-shadow">
                <div className="text-gray-400 text-center">
                  <p className="font-semibold">Partner Logo</p>
                  <p className="text-sm">{partner.name}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="section-container bg-white dark:bg-dark-charcoal">
        <Card glass className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Become a Partner
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Interested in partnering with Coretech? Let's explore opportunities for collaboration
            and mutual growth.
          </p>
          <Link to="/contact">
            <Button variant="primary">Contact Partnership Team</Button>
          </Link>
        </Card>
      </section>
    </div>
  );
};
