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
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="orb-1 absolute w-[700px] h-[700px] rounded-full bg-teal-500/[0.15] blur-[120px] -top-32 -left-32" />
        <div className="orb-2 absolute w-[600px] h-[600px] rounded-full bg-indigo-600/[0.15] blur-[100px] -top-16 -right-32" />
        <div className="orb-3 absolute w-[500px] h-[500px] rounded-full bg-amber-500/[0.08] blur-[100px] -bottom-32 left-1/2 -translate-x-1/2" />
      </div>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
        aria-hidden="true"
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a] via-transparent to-[#050d1a] pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" aria-hidden="true" />
            Powered by FutureHives AI Platform
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight"
        >
          <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
            FutureHive
          </span>
          <br />
          <span className="text-white">Portal</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 mb-4 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Your gateway to AI-powered IFRS compliance and treasury management
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Access ContractHive, Estimator&nbsp;9, and NextHive Cash Forecasting —
          one unified platform for IFRS&nbsp;16, IFRS&nbsp;9, and treasury operations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <a
            href="#clients"
            className="group px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-teal-500/30 flex items-center gap-2 text-base"
          >
            View Client Portals
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
          <a
            href="https://contracthive.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 border border-white/20 hover:border-white/40 text-white font-medium rounded-xl transition-all duration-200 hover:bg-white/[0.05] flex items-center gap-2 text-base"
          >
            Explore Platform
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-teal-400 mb-0.5">{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40" aria-hidden="true">
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  )
}
