'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-brand-purple to-blue-600 rounded-3xl p-12 md:p-16 text-center space-y-6 overflow-hidden shadow-stripe hover:shadow-stripe-hover transition-all"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to transform your data?
            </h2>

            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Join organizations leveraging real-time monitoring and advanced analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button className="px-8 py-3 bg-white text-brand-purple font-medium rounded-lg hover:bg-gray-100 transition shadow-lg">
                Schedule a Demo
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
