export default function ThemeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white text-slate-900 antialiased font-sans">
      {children}
    </div>
  )
}
