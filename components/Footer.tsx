import { ExternalLink } from 'lucide-react'

const productLinks = [
  { label: 'ContractHive', href: 'https://contracthive.ai' },
  { label: 'Estimator 9', href: 'https://contracthive.ai' },
  { label: 'NextHive Cash Forecasting', href: 'https://contracthive.ai/products/nexthive-cash-forecasting' },
]

const companyLinks = [
  { label: 'About', href: 'https://contracthive.ai/about' },
  { label: 'Contact', href: 'https://contracthive.ai/contact' },
  { label: 'Request Demo', href: 'https://contracthive.ai' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                </svg>
              </div>
              <span className="font-bold text-white text-lg">FutureHive Portal</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              AI for IFRS&nbsp;16, IFRS&nbsp;9 and cash forecasting — without the spreadsheet sprawl.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white text-sm transition-colors flex items-center gap-1.5"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-50" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} FutureHives. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Built with Next.js · Deployed on VPS
          </p>
        </div>
      </div>
    </footer>
  )
}
