import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Award,
  Users,
  TrendingUp,
} from 'lucide-react';
import { Card } from '../components/common/Card';

export const About: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting-edge technology',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering superior quality in every project',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building trust through transparency and honesty',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your success is our priority',
    },
    {
      icon: TrendingUp,
      title: 'Reliability',
      description: 'Dependable solutions you can count on',
    },
    {
      icon: Target,
      title: 'Efficiency',
      description: 'Optimized processes for maximum impact',
    },
  ];

  const milestones = [
    { year: '2023', title: 'Company Founded', description: 'Coretech established in Nablus, Palestine' },
    { year: '2023', title: 'First Major Contract', description: 'Secured enterprise telecommunications project' },
    { year: '2024', title: '5G Implementation', description: 'Launched first 5G network deployment' },
    { year: '2024', title: 'Expansion', description: 'Grew team to 50+ professionals' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-deep-blue to-dark-charcoal text-white py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Revolutionizing telecommunications and IT through innovative solutions that
              connect the world and empower human potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-container bg-white dark:bg-dark-charcoal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card featured>
              <Target className="w-12 h-12 text-electric-cyan mb-4" />
              <h2 className="text-3xl font-heading font-bold mb-4">
                {t('about.mission')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                To enhance customer experience through the latest technology and provide
                end-to-end telecommunications and ICT solutions that empower businesses
                and individuals to thrive in the digital age.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card featured>
              <Eye className="w-12 h-12 text-electric-cyan mb-4" />
              <h2 className="text-3xl font-heading font-bold mb-4">
                {t('about.vision')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                To be the leading telecommunications and ICT service provider in
                Palestine, recognized for innovation, reliability, and customer
                satisfaction, while contributing to the digital transformation of our
                region.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-container bg-soft-gray dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {t('about.values')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-container bg-white dark:bg-dark-charcoal">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Key milestones in our growth story
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-12 border-l-2 border-electric-cyan last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-electric-cyan animate-pulse" />
              <div className="bg-gradient-primary text-white inline-block px-4 py-1 rounded-full text-sm font-bold mb-2">
                {milestone.year}
              </div>
              <h3 className="text-2xl font-heading font-bold mb-2">
                {milestone.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="section-container bg-soft-gray dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {t('about.team')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Our team of 50+ dedicated professionals brings together decades of
            experience in telecommunications, ICT, and cybersecurity to deliver
            exceptional solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">50+</div>
              <p className="text-gray-600 dark:text-gray-400">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">20+</div>
              <p className="text-gray-600 dark:text-gray-400">Engineers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">15+</div>
              <p className="text-gray-600 dark:text-gray-400">Certifications</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">24/7</div>
              <p className="text-gray-600 dark:text-gray-400">Support</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
