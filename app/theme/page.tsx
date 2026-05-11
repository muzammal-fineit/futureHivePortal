import Navbar from '@/components/light/Navbar'
import Hero from '@/components/light/Hero'
import Products from '@/components/light/Products'
import Clients from '@/components/light/Clients'
import Footer from '@/components/light/Footer'

export default function ThemePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Clients />
      <Footer />
    </main>
  )
}
