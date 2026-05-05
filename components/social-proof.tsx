'use client';

import { motion } from 'framer-motion';

export default function SocialProof() {
  const companies = [
    { name: 'Company 1', placeholder: true },
    { name: 'Company 2', placeholder: true },
    { name: 'Company 3', placeholder: true },
    { name: 'Company 4', placeholder: true },
    { name: 'Company 5', placeholder: true },
    { name: 'Company 6', placeholder: true },
  ];

  return (
    <section className="w-full py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Title */}
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wide">
            Trusted by industry leaders
          </p>

          {/* Companies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center h-12 bg-gray-50 rounded-lg border border-gray-200"
              >
                <span className="text-xs text-gray-400">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
