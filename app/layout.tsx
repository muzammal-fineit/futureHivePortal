import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FutureHive Portal | AI-Powered IFRS & Treasury Platform',
  description:
    'Your central gateway to ContractHive IFRS 16 lease accounting, Estimator 9 IFRS 9 credit loss automation, and NextHive cash forecasting — all in one place.',
  keywords: ['IFRS 16', 'lease accounting', 'IFRS 9', 'ECL', 'cash forecasting', 'treasury', 'AI finance', 'FutureHive', 'ContractHive'],
  authors: [{ name: 'FutureHives' }],
  openGraph: {
    title: 'FutureHive Portal',
    description: 'AI-powered IFRS compliance and treasury management platform',
    type: 'website',
    siteName: 'FutureHive Portal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FutureHive Portal',
    description: 'AI-powered IFRS compliance and treasury management platform',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#050d1a] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
