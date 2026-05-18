import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Team } from './components/Team'
import { InvestorContact } from './components/InvestorContact'
import { Publications } from './components/Publications'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-canvas-parchment text-inkwell">
      <Nav />
      <main>
        <Hero />
        <Team />
        <InvestorContact />
        <Publications />
      </main>
      <Footer />
    </div>
  )
}
