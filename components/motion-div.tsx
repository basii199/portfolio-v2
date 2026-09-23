// components/motion-div.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function MotionDiv({
  children,
  className = '',
  ...props
}: {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}