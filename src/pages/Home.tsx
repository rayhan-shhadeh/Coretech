import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import {
  Wifi,
  Shield,
  Cpu,
  Radio,
  Cable,
  Network,
  TrendingUp,
  Users,
  Award,
  Activity,
  ArrowRight,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { NetworkBackground } from '../components/common/NetworkBackground';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const services = [
    {
      icon: Wifi,
      title: t('services.telecommunications'),
      description: 'Complete telecommunications infrastructure and solutions',
      path: '/services/telecommunications',
    },
    {
      icon: Cpu,
      title: t('services.ict'),
      description: 'Cutting-edge ICT services and digital transformation',
      path: '/services/ict',
    },
    {
      icon: Shield,
      title: t('services.cybersecurity'),
      description: 'Advanced security solutions to protect your digital assets',
      path: '/services/cybersecurity',
    },
    {
      icon: Radio,
      title: t('services.4g5g'),
      description: 'Next-generation 4G/5G network implementation',
      path: '/services/4g5g',
    },
    {
      icon: Cable,
      title: t('services.ftth'),
      description: 'High-speed fiber optic connectivity to your doorstep',
      path: '/services/ftth',
    },
    {
      icon: Network,
      title: t('services.distribution'),
      description: 'Authorized distributor and reseller services',
      path: '/services/distribution',
    },
  ];

  const stats = [
    { icon: TrendingUp, value: '2', label: t('stats.years'), suffix: '+' },
    { icon: Users, value: '500', label: t('stats.clients'), suffix: '+' },
    { icon: Award, value: '1000', label: t('stats.projects'), suffix: '+' },
    { icon: Activity, value: '99.9', label: t('stats.uptime'), suffix: '%' },
  ];

  const Counter: React.FC<{ end: number; suffix: string }> = ({ end, suffix }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      if (!statsInView) return;

      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [statsInView, end]);

    return (
      <span className="text-5xl font-bold gradient-text">
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-deep-blue via-dark-charcoal to-deep-blue">
        <NetworkBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-heading font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('hero.tagline')}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/contact">
                <Button variant="primary" className="group">
                  {t('hero.cta_primary')}
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button variant="secondary">{t('hero.cta_secondary')}</Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 border-2 border-electric-cyan rounded-lg opacity-20"
            animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-16 h-16 border-2 border-vibrant-orange rounded-full opacity-20"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container bg-white dark:bg-dark-charcoal">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={service.path}>
                  <Card featured className="h-full group cursor-pointer">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-electric-cyan group-hover:translate-x-2 transition-transform">
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

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="section-container bg-gradient-to-r from-deep-blue to-electric-cyan text-white"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <Counter end={parseFloat(stat.value)} suffix={stat.suffix} />
                <p className="text-lg mt-2 opacity-90">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-white dark:bg-dark-charcoal">
        <Card glass className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to Transform Your Connectivity?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let's discuss how Coretech can help you achieve your telecommunications
            and ICT goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="primary">{t('common.contactExperts')}</Button>
            </Link>
            <Link to="/resources">
              <Button variant="secondary">{t('common.downloadBrochure')}</Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
};
