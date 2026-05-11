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
  cardBg: string
  border: string
  iconBg: string
  iconColor: string
  tagBg: string
  tagText: string
  linkColor: string
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
    cardBg: 'bg-teal-50/60',
    border: 'border-teal-200',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    tagBg: 'bg-teal-100',
    tagText: 'text-teal-700',
    linkColor: 'text-teal-600',
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
    cardBg: 'bg-blue-50/60',
    border: 'border-blue-200',
    iconBg: 'bg-blue-100',
    iconColor: 'text-[#2f5fe0]',
    tagBg: 'bg-blue-100',
    tagText: 'text-blue-700',
    linkColor: 'text-[#2f5fe0]',
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
    cardBg: 'bg-amber-50/60',
    border: 'border-amber-200',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    tagBg: 'bg-amber-100',
    tagText: 'text-amber-700',
    linkColor: 'text-amber-600',
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
    <section id="products" className="py-28 px-6 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-500 text-sm mb-5">
            Our Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Three products,{' '}
            <span className="bg-gradient-to-r from-[#2f5fe0] to-[#00bb7f] bg-clip-text text-transparent">
              one data layer
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            IFRS&nbsp;16 lease accounting, IFRS&nbsp;9 credit loss automation, and treasury cash forecasting —
            integrated, audit-ready, and powered by AI.
          </p>
        </motion.div>

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
              className={`group relative ${product.cardBg} bg-white border ${product.border} rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg flex flex-col`}
            >
              <div className={`w-12 h-12 rounded-xl ${product.iconBg} flex items-center justify-center mb-5`}>
                <product.icon className={`w-6 h-6 ${product.iconColor}`} aria-hidden="true" />
              </div>

              <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3 ${product.tagBg} ${product.tagText} uppercase tracking-wide w-fit`}>
                {product.tag}
              </span>

              <h3 className="text-xl font-bold text-slate-900 mb-3">{product.name}</h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-6">{product.description}</p>

              <ul className="space-y-2 mb-8 flex-1">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className={`w-4 h-4 ${product.iconColor} mt-0.5 flex-shrink-0`} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm font-semibold ${product.linkColor} hover:opacity-70 transition-opacity mt-auto`}
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
