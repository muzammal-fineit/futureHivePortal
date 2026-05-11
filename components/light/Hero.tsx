'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const stats = [
  { value: '10+', label: 'Active Clients' },
  { value: '3', label: 'Products' },
  { value: 'AI', label: 'Powered' },
  { value: '100%', label: 'Audit-Ready' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="orb-1 absolute w-[700px] h-[700px] rounded-full bg-blue-500/[0.08] blur-[120px] -top-32 -left-32" />
        <div className="orb-2 absolute w-[600px] h-[600px] rounded-full bg-emerald-400/[0.07] blur-[100px] -top-16 -right-32" />
        <div className="orb-3 absolute w-[500px] h-[500px] rounded-full bg-blue-400/[0.05] blur-[100px] -bottom-32 left-1/2 -translate-x-1/2" />
      </div>

      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(47,95,224,0.06) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(60% 50% at 50% 0%, rgba(47,95,224,0.08), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" aria-hidden="true" />
            Powered by ContractHive AI Platform
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight"
        >
          <span className="bg-gradient-to-r from-[#2f5fe0] to-[#00bb7f] bg-clip-text text-transparent">
            ContractHive
          </span>
          <br />
          <span className="text-slate-900">Portal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-500 mb-4 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Your gateway to AI-powered IFRS compliance and treasury management
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Access ContractHive, Estimator&nbsp;9, and NextHive Cash Forecasting —
          one unified platform for IFRS&nbsp;16, IFRS&nbsp;9, and treasury operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <a
            href="#clients"
            className="group px-8 py-4 bg-[#2f5fe0] hover:bg-[#1f49c4] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 flex items-center gap-2 text-base"
          >
            View Client Portals
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
          <a
            href="https://contracthive.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-medium rounded-xl transition-all duration-200 hover:bg-slate-50 flex items-center gap-2 text-base"
          >
            Explore Platform
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-[#2f5fe0] mb-0.5">{stat.value}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40" aria-hidden="true">
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  )
}
