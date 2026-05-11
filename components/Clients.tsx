'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ExternalLink, Building2 } from 'lucide-react'
import { clients } from '@/data/clients'
import type { ProductTag } from '@/data/clients'

const avatarGradients = [
  'from-teal-500 to-cyan-600',
  'from-indigo-500 to-purple-600',
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
  'IFRS 16':    { bg: 'bg-teal-500/15',   text: 'text-teal-400' },
  'IFRS 9':     { bg: 'bg-indigo-500/15', text: 'text-indigo-400' },
  'Treasury':   { bg: 'bg-amber-500/15',  text: 'text-amber-400' },
  'Onboarding': { bg: 'bg-emerald-500/15',text: 'text-emerald-400' },
  'Portal':     { bg: 'bg-sky-500/15',    text: 'text-sky-400' },
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
    <section
      id="clients"
      className="py-28 px-6"
      style={{
        background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.01), transparent)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-slate-400 text-sm mb-5">
            Client Portals
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Access your{' '}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              organization
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Select your organization below to open your dedicated FutureHive instance.
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search organizations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 focus:bg-white/[0.06] transition-all text-sm"
              aria-label="Search organizations"
            />
          </div>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-slate-500"
          >
            <Building2 className="w-12 h-12 mx-auto mb-4 opacity-25" aria-hidden="true" />
            <p className="text-sm">No organizations found matching &ldquo;{search}&rdquo;</p>
          </motion.div>
        )}

        {/* Client grid */}
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
                  className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:bg-white/[0.07] hover:border-white/[0.14] hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/[0.07] transition-all duration-300 cursor-pointer"
                  aria-label={`Open ${client.name} portal`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0 shadow-lg`}
                    aria-hidden="true"
                  >
                    {client.name.slice(0, 2).toUpperCase()}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-xs sm:text-sm mb-1 truncate">{client.name}</h3>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tag.bg} ${tag.text}`}>
                        {client.productTag}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-teal-400 text-xs font-semibold group-hover:gap-2.5 transition-all duration-200">
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
