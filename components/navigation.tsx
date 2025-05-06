// components/navigation.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
//import { ThemeToggle } from './theme-toggle';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 ${scrolled
          ? 'bg-white/80 border-b border-black/10 dark:bg-black/80 dark:border-white/10'
          : 'bg-white/0 border-b border-black/0 dark:bg-black/0 dark:border-white/0'
          }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 transition-all duration-500 hover:scale-105 dark:from-blue-300 dark:to-blue-500 dark:hover:from-blue-400 dark:hover:to-blue-600"
          >
            {'Basii'}
          </Link>
          {/* <RobotBuddy /> */}

          <div className="flex items-center gap-8">
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium dark:text-gray-300 text-gray-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md p-4 md:hidden transition-colors duration-300 ${scrolled
          ? 'bg-white/80 border-b border-black/10 dark:bg-black/80 dark:border-white/10'
          : 'bg-white/0 border-b border-black/0 dark:bg-black/0 dark:border-white/0'
          }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold dark:text-white text-black">
            Ubok-Abasi
          </Link>

          <div className="flex items-center gap-4">
            {/* <ThemeToggle /> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="py-4 space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-lg font-medium dark:text-gray-300 text-gray-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}