'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ExternalLink, Building2 } from 'lucide-react'
import { clients } from '@/data/clients'
import type { ProductTag } from '@/data/clients'

const avatarGradients = [
  'from-teal-500 to-cyan-600',
  'from-blue-500 to-indigo-600',
  'from-amber-500 to-orange-500',
  'from-rose-500 to-pink-600',
  'from-emerald-500 to-green-600',
  'from-blue-500 to-cyan-500',
  'from-violet-500 to-purple-600',
  'from-fuchsia-500 to-pink-500',
  'from-sky-500 to-blue-500',
  'from-lime-500 to-emerald-500',
  'from-orange-500 to-amber-600',
  'from-cyan-500 to-teal-600',
  'from-purple-500 to-violet-600',
]

const tagStyles: Record<ProductTag, { bg: string; text: string }> = {
  'IFRS 16':    { bg: 'bg-teal-100',    text: 'text-teal-700' },
  'IFRS 9':     { bg: 'bg-blue-100',    text: 'text-blue-700' },
  'Treasury':   { bg: 'bg-amber-100',   text: 'text-amber-700' },
  'Onboarding': { bg: 'bg-emerald-100', text: 'text-emerald-700' },
  'Portal':     { bg: 'bg-sky-100',     text: 'text-sky-700' },
}

export default function Clients() {
  const [search, setSearch] = useState('')

  const filtered = clients.filter((c) => {
    const q = search.toLowerCase()
    return (
      c.name.toLowerCase().includes(q) ||
      c.href.toLowerCase().includes(q) ||
      c.productTag.toLowerCase().includes(q)
    )
  })

  return (
    <section id="clients" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-500 text-sm mb-5">
            Client Portals
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Access your{' '}
            <span className="bg-gradient-to-r from-[#2f5fe0] to-[#00bb7f] bg-clip-text text-transparent">
              organization
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Select your organization below to open your dedicated FutureHive instance.
          </p>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search organizations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
              aria-label="Search organizations"
            />
          </div>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-slate-400"
          >
            <Building2 className="w-12 h-12 mx-auto mb-4 opacity-25" aria-hidden="true" />
            <p className="text-sm">No organizations found matching &ldquo;{search}&rdquo;</p>
          </motion.div>
        )}

        {filtered.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filtered.map((client, i) => {
              const tag = tagStyles[client.productTag]
              return (
                <motion.a
                  key={client.id}
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
                  className="group bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:border-blue-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer"
                  aria-label={`Open ${client.name} portal`}
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0 shadow-md`}
                    aria-hidden="true"
                  >
                    {client.name.slice(0, 2).toUpperCase()}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 text-xs sm:text-sm mb-1 truncate">{client.name}</h3>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tag.bg} ${tag.text}`}>
                        {client.productTag}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#2f5fe0] text-xs font-semibold group-hover:gap-2.5 transition-all duration-200">
                      Open App
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
