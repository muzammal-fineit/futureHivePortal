import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

const productLinks = [
  { label: 'ContractHive', href: 'https://contracthive.ai/products/contracthive' },
  { label: 'Estimator 9', href: 'https://contracthive.ai/products/estimator9' },
  { label: 'NextHive Cash Forecasting', href: 'https://contracthive.ai/products/nexthive-cash-forecasting' },
]

const companyLinks = [
  { label: 'About', href: 'https://contracthive.ai/about' },
  { label: 'Contact', href: 'https://contracthive.ai/contact' },
  { label: 'Request Demo', href: 'https://contracthive.ai' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-16 px-6 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/contracthive-logo.png"
                alt="ContractHive"
                width={160}
                height={48}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              AI for IFRS&nbsp;16, IFRS&nbsp;9 and cash forecasting — without the spreadsheet sprawl.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 text-sm font-semibold mb-4 uppercase tracking-wider">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-900 text-sm transition-colors flex items-center gap-1.5"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-50" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 text-sm font-semibold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-900 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} ContractHive. All rights reserved.
          </p>
          <p className="text-slate-300 text-xs">
            Built with Next.js · Deployed on VPS
          </p>
        </div>
      </div>
    </footer>
  )
}
