'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, BarChart3, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Code2,
      title: 'Modern Development',
      description: 'Built with Go and JavaScript for high-performance, scalable systems.',
    },
    {
      icon: Zap,
      title: 'Real-Time Monitoring',
      description: 'Monitor sensor data and system metrics with sub-second latency.',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Transform raw data into actionable insights with powerful analytics.',
    },
    {
      icon: Shield,
      title: 'Enterprise Ready',
      description: 'Built for reliability, security, and compliance at scale.',
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for next-generation monitoring and data systems.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl border border-gray-200 hover:border-brand-purple/30 hover:shadow-stripe transition-all group"
                >
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-purple/10 transition">
                    <Icon className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h3 className="font-semibold text-brand-navy mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
