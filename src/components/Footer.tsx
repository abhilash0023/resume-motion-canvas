
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Made with React & Tailwind CSS | © 2025 Abhilash K. All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
