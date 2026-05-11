import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ContractHive Portal | AI-Powered IFRS & Treasury Platform',
  description:
    'Your central gateway to ContractHive IFRS 16 lease accounting, Estimator 9 IFRS 9 credit loss automation, and NextHive cash forecasting — all in one place.',
  keywords: ['IFRS 16', 'lease accounting', 'IFRS 9', 'ECL', 'cash forecasting', 'treasury', 'AI finance', 'ContractHive'],
  authors: [{ name: 'ContractHive' }],
  openGraph: {
    title: 'ContractHive Portal',
    description: 'AI-powered IFRS compliance and treasury management platform',
    type: 'website',
    siteName: 'ContractHive Portal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ContractHive Portal',
    description: 'AI-powered IFRS compliance and treasury management platform',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
