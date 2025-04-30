// components/footer.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail, MessageSquare, Send } from 'lucide-react';

export function Footer() {

  return (
    <footer
      className='container flex backdrop-blur-md transition-colors duration-300 bg-white/0 border-b border-black/0 dark:bg-black/0 dark:border-white/0'
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-12 gap-x-0 gap-y-6 sm:gap-12">
          {/* Call to Action */}
          <motion.div
            className="col-span-12 lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white text-black">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg dark:text-gray-300 text-gray-600 mb-8">
              Have a project in mind or want to discuss potential opportunities? I'm always open to interesting conversations and collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="w-full px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors text-center"
              >
                Get In Touch
              </Link>
              <Link 
                href="/projects" 
                className="w-full px-6 py-3 border border-gray-300 dark:border-gray-600 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center"
              >
                View My Work
              </Link>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="col-span-12 min-[550px]:col-span-7 lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 dark:text-white text-black">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 text-blue-500" />
                <div>
                  <p className="text-sm dark:text-gray-400 text-gray-500">Email</p>
                  <a href="mailto:ubokabasi.o.udoh@gmail.com" className="text-blue-500 hover:underline">ubokabasi.o.udoh@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MessageSquare className="w-5 h-5 mt-1 text-blue-500" />
                <div>
                  <p className="text-sm dark:text-gray-400 text-gray-500">Phone/WhatsApp</p>
                  <a href="https://wa.link/janzun" className="text-blue-500 hover:underline">+234 812 570 2091</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Send className="w-5 h-5 mt-1 text-blue-500" />
                <div>
                  <p className="text-sm dark:text-gray-400 text-gray-500">Telegram</p>
                  <a href="https://t.me/basiudoh" className="text-blue-500 hover:underline">@basiudoh</a>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="col-span-12 min-[550px]:col-span-5 lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 dark:text-white text-black">Connect With Me</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/basii199" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ubokabasi-udoh/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:ubokabasi.o.udoh@gmail.com" 
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-200 dark:border-gray-800 mt-16 pt-8 text-center dark:text-gray-400 text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>© {new Date().getFullYear()} Ubok-Abasi Udoh. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with Next.js, Tailwind CSS, and Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  );
}