'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-gray-50 dark:from-gray-900 to-gray-100 dark:to-gray-950 flex items-center justify-center overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-10 w-96 h-96 bg-gray-200 dark:bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-8 left-20 w-96 h-96 bg-gray-300 dark:bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">
            Capturing Authentic Moments
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Photography That Tells Your Story
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Professional lifestyle and studio photography for those who want authentic, beautifully crafted images.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="https://instagram.com/your_handle"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors group"
          >
            Book Now on Instagram
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </motion.a>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors"
            >
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
