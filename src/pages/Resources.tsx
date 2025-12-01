import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen, HelpCircle, Calendar } from 'lucide-react';
import { Card } from '../components/common/Card';

export const Resources: React.FC = () => {

  const blogPosts = [
    {
      title: '5G Revolution: What It Means for Your Business',
      date: '2024-11-15',
      category: 'Technology',
      excerpt: 'Explore how 5G technology is transforming business operations...',
    },
    {
      title: 'Cybersecurity Best Practices for 2024',
      date: '2024-11-10',
      category: 'Security',
      excerpt: 'Essential security measures every organization should implement...',
    },
    {
      title: 'FTTH vs Traditional Broadband: A Comparison',
      date: '2024-11-05',
      category: 'Infrastructure',
      excerpt: 'Understanding the benefits of fiber optic connectivity...',
    },
  ];

  const caseStudies = [
    {
      title: 'Enterprise Network Transformation',
      client: 'Major Bank',
      industry: 'Finance',
      result: '40% improvement in network performance',
    },
    {
      title: 'Healthcare Facility Connectivity',
      client: 'Regional Hospital',
      industry: 'Healthcare',
      result: 'Seamless telemedicine implementation',
    },
    {
      title: 'Educational Campus WiFi Deployment',
      client: 'University',
      industry: 'Education',
      result: '1000+ concurrent users supported',
    },
  ];

  const faqs = [
    {
      question: 'What services does Coretech provide?',
      answer: 'We offer comprehensive telecommunications and ICT services including network infrastructure, cybersecurity, 4G/5G implementation, FTTH, and more.',
    },
    {
      question: 'Do you provide 24/7 support?',
      answer: 'Yes, we offer round-the-clock support to ensure your systems remain operational at all times.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We primarily serve clients in Palestine, with our headquarters in Nablus, West Bank.',
    },
    {
      question: 'How can I request a quote?',
      answer: 'You can request a quote through our contact form or by calling us directly at 0097-9236-8180.',
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
              Resources
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Insights, guides, and knowledge to help you make informed decisions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog/News */}
      <section className="section-container bg-white dark:bg-dark-charcoal">
        <div className="flex items-center mb-8">
          <FileText className="w-8 h-8 text-electric-cyan mr-3" />
          <h2 className="text-4xl font-heading font-bold">Latest News & Insights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group cursor-pointer hover:shadow-colored-cyan">
                <div className="h-48 bg-gradient-to-br from-deep-blue to-electric-cyan rounded-lg mb-4" />
                <span className="text-sm text-electric-cyan font-medium">
                  {post.category}
                </span>
                <h3 className="text-xl font-heading font-semibold mb-2 mt-2 text-gray-900 dark:text-white group-hover:text-electric-cyan transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
                <button className="text-electric-cyan font-medium mt-4 hover:underline">
                  Read More →
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-container bg-soft-gray dark:bg-gray-900">
        <div className="flex items-center mb-8">
          <BookOpen className="w-8 h-8 text-electric-cyan mr-3" />
          <h2 className="text-4xl font-heading font-bold">Case Studies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card featured className="h-full hover:shadow-colored-cyan">
                <span className="text-sm text-electric-cyan font-medium">
                  {study.industry}
                </span>
                <h3 className="text-2xl font-heading font-semibold my-3 text-gray-900 dark:text-white">
                  {study.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Client: {study.client}
                </p>
                <div className="bg-gradient-primary text-white p-4 rounded-lg">
                  <p className="font-semibold">Result:</p>
                  <p>{study.result}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="section-container bg-white dark:bg-dark-charcoal">
        <div className="flex items-center mb-8">
          <HelpCircle className="w-8 h-8 text-electric-cyan mr-3" />
          <h2 className="text-4xl font-heading font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-colored-cyan transition-shadow">
                <h3 className="text-xl font-heading font-semibold mb-3 text-electric-cyan">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
