'use client'

import { motion } from 'framer-motion'
import { ScrollText, BarChart3, Banknote, ExternalLink, CheckCircle2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Product {
  icon: LucideIcon
  name: string
  tag: string
  description: string
  features: string[]
  gradient: string
  border: string
  iconBg: string
  iconColor: string
  tagBg: string
  tagText: string
  href: string
}

const products: Product[] = [
  {
    icon: ScrollText,
    name: 'ContractHive',
    tag: 'IFRS 16',
    description:
      'AI contract abstraction and ROU schedule generation. Multi-entity lease lifecycle management with full audit trail and traceable lineage.',
    features: [
      'AI contract abstraction',
      'ROU schedule generation',
      'Multi-entity, multi-currency',
      'Audit-grade confidence',
    ],
    gradient: 'from-teal-500/[0.12] to-transparent',
    border: 'border-teal-500/25',
    iconBg: 'bg-teal-500/15',
    iconColor: 'text-teal-400',
    tagBg: 'bg-teal-500/15',
    tagText: 'text-teal-400',
    href: 'https://contracthive.ai/products/contracthive',
  },
  {
    icon: BarChart3,
    name: 'Estimator 9',
    tag: 'IFRS 9',
    description:
      'Expected credit loss automation. Eliminate manual ECL calculations with AI-powered risk modeling, stress testing, and regulatory reporting.',
    features: [
      'ECL automation',
      'Risk model calibration',
      'Stress testing & scenarios',
      'Regulatory reporting',
    ],
    gradient: 'from-indigo-500/[0.12] to-transparent',
    border: 'border-indigo-500/25',
    iconBg: 'bg-indigo-500/15',
    iconColor: 'text-indigo-400',
    tagBg: 'bg-indigo-500/15',
    tagText: 'text-indigo-400',
    href: 'https://contracthive.ai/products/estimator9',
  },
  {
    icon: Banknote,
    name: 'NextHive Cash Forecasting',
    tag: 'Treasury',
    description:
      'AI-powered treasury platform with 13-week rolling forecasts, multi-entity FX consolidation, scenario modeling, and board-ready reports.',
    features: [
      '13-week rolling forecasts',
      'Multi-entity FX consolidation',
      'What-if scenario modeling',
      'Board-ready reports',
    ],
    gradient: 'from-amber-500/[0.10] to-transparent',
    border: 'border-amber-500/25',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
    tagBg: 'bg-amber-500/15',
    tagText: 'text-amber-400',
    href: 'https://contracthive.ai/products/nexthive-cash-forecasting',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Products() {
  return (
    <section id="products" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-slate-400 text-sm mb-5">
            Our Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Three products,{' '}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              one data layer
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            IFRS&nbsp;16 lease accounting, IFRS&nbsp;9 credit loss automation, and treasury cash forecasting —
            integrated, audit-ready, and powered by AI.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={cardVariant}
              className={`group relative bg-gradient-to-b ${product.gradient} bg-white/[0.03] border ${product.border} rounded-2xl p-8 backdrop-blur-sm hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-black/30 flex flex-col`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${product.iconBg} flex items-center justify-center mb-5`}>
                <product.icon className={`w-6 h-6 ${product.iconColor}`} aria-hidden="true" />
              </div>

              {/* Tag */}
              <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3 ${product.tagBg} ${product.tagText} uppercase tracking-wide w-fit`}>
                {product.tag}
              </span>

              {/* Name */}
              <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{product.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-8 flex-1">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <CheckCircle2 className={`w-4 h-4 ${product.iconColor} mt-0.5 flex-shrink-0`} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm font-semibold ${product.iconColor} hover:opacity-80 transition-opacity mt-auto`}
              >
                Learn more
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
