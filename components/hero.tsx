// components/hero.tsx
"use client";

import { Github, Linkedin, Mail, MessageSquare, Send } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  const socialLinks = [
    {
      href: "https://github.com/basii199",
      label: "GitHub",
      icon: Github,
    },
    {
      href: "https://www.linkedin.com/in/ubokabasi-udoh/",
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: "mailto:ubokabasi.o.udoh@gmail.com",
      label: "Email",
      icon: Mail,
    },
    {
      href: "https://wa.link/janzun",
      label: "WhatsApp",
      icon: MessageSquare,
    },
    {
      href: "https://t.me/basiudoh",
      label: "Telegram",
      icon: Send,
    },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left z-10"
        >
          {/* Title (all caps) */}
          <motion.p
            className="text-sm md:text-base font-semibold font-mono text-blue-500 mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            FRONTEND WEB DEVELOPER
          </motion.p>

          {/* Name with typewriter effect */}
          <TypeAnimation
            sequence={["Hi, I'm Ubokabasi Udoh", 2000]}
            wrapper="h1"
            speed={50}
            className="text-3xl md:text-4xl font-bold mb-6 dark:text-white text-black text-center"
            cursor={false}
          />

          {/* Description */}
          <motion.p
            className="md:text-lg dark:text-gray-400 text-gray-600 mb-8 max-w-2xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* I'm a frontend developer passionate about creating seamless, interactive web experiences. I bring together clean code and thoughtful design to build applications that are fast, responsive, and a pleasure to use. */}
            Frontend engineer with 3+ years building production React/Next.js
            applications in FinTech, TravelTech, EdTech and e-commerce. Shipped
            merchant-facing dashboards and payment flows now used by 20,000+
            businesses across Nigeria.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors text-center"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
