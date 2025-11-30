import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Filter, Search } from 'lucide-react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';

const categories = ['All', 'Networking', 'Security', 'Wireless', 'Fiber Optic', 'Servers'];

const products = [
  { id: 1, name: 'Enterprise Router Pro', category: 'Networking', price: 'Contact for pricing', image: '' },
  { id: 2, name: 'Firewall Security Appliance', category: 'Security', price: 'Contact for pricing', image: '' },
  { id: 3, name: '5G Wireless Access Point', category: 'Wireless', price: 'Contact for pricing', image: '' },
  { id: 4, name: 'Fiber Optic Cable Kit', category: 'Fiber Optic', price: 'Contact for pricing', image: '' },
  { id: 5, name: 'Network Switch 48-Port', category: 'Networking', price: 'Contact for pricing', image: '' },
  { id: 6, name: 'Enterprise Server Rack', category: 'Servers', price: 'Contact for pricing', image: '' },
  { id: 7, name: 'VPN Gateway', category: 'Security', price: 'Contact for pricing', image: '' },
  { id: 8, name: 'Mesh WiFi System', category: 'Wireless', price: 'Contact for pricing', image: '' },
  { id: 9, name: 'Optical Network Terminal', category: 'Fiber Optic', price: 'Contact for pricing', image: '' },
];

export const Products: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              High-quality telecommunications and networking equipment from leading brands
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="section-container bg-white dark:bg-dark-charcoal">
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-charcoal focus:border-electric-cyan outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-charcoal focus:border-electric-cyan outline-none"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-gradient-primary text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-soft-gray to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Product Image</span>
                </div>
                <div className="space-y-2">
                  <span className="text-sm text-electric-cyan font-medium">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-heading font-semibold group-hover:text-electric-cyan transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-gray-700 dark:text-gray-300">
                    {product.price}
                  </p>
                  <Button variant="secondary" className="w-full mt-4">
                    {t('common.requestQuote')}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No products found matching your criteria
            </p>
          </div>
        )}
      </section>
    </div>
  );
};
