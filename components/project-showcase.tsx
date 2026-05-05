'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProjectShowcase() {
  return (
    <section className="w-full py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-medium text-brand-purple mb-2">Flagship Project</p>
              <h2 className="text-4xl font-bold text-brand-navy">Piezometrics</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our flagship monitoring platform for real-time groundwater and environmental data collection.
              Process thousands of sensor readings per second with millisecond-level latency.
            </p>

            <ul className="space-y-3">
              {[
                'Real-time data ingestion from multiple sensor networks',
                'Advanced visualization and analytics dashboards',
                'Enterprise-grade API for third-party integrations',
                'Automatic anomaly detection and alerts',
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <span className="text-brand-purple">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="inline-flex items-center gap-2 px-6 py-3 bg-brand-purple text-white font-medium rounded-lg hover:bg-brand-dark transition shadow-stripe hover:shadow-stripe-hover">
              Explore Piezometrics
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 bg-white rounded-2xl border border-gray-200 shadow-stripe flex items-center justify-center"
          >
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-brand-light rounded-xl mx-auto flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <p className="text-gray-500">Piezometrics Dashboard Preview</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
