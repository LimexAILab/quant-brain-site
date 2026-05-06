import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { WhatWeDo } from './components/WhatWeDo'
import { QuantCodeBench } from './components/QuantCodeBench'
import { Publications } from './components/Publications'
import { Vision } from './components/Vision'
import { Collaborate } from './components/Collaborate'
import { InvestorContact } from './components/InvestorContact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-canvas-parchment text-inkwell">
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <QuantCodeBench />
        <Publications />
        <Vision />
        <Collaborate />
        <InvestorContact />
      </main>
      <Footer />
    </div>
  )
}
