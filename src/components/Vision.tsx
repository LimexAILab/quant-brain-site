import { SectionLabel } from './ui'

export function Vision() {
  return (
    <section id="vision" className="border-b border-inkwell/10">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 py-28 lg:py-36 grid grid-cols-12 gap-x-8">
        <div className="col-span-12 lg:col-span-3">
          <SectionLabel index="§ 04">Vision</SectionLabel>
        </div>

        <div className="col-span-12 lg:col-span-9 mt-8 lg:mt-0">
          <p className="font-serif-display text-[32px] sm:text-[40px] lg:text-[52px] leading-[1.1] tracking-heading-lg text-deep-shadow max-w-[26ch]">
            AI is about to allocate{' '}
            <span className="italic text-onyx-outline">capital</span> at scale.
            We think the question of <em className="italic">which</em> AI deserves
            that responsibility is the most important benchmark of the decade.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-[15px] leading-[1.6] text-inkwell/80 max-w-[78ch]">
            <p>
              Frontier models can already write code that compiles. Soon they will
              propose, test, and refine entire strategies on their own. Before that
              happens at scale, the industry needs measurement infrastructure that's
              honest, executable, and adversarial.
            </p>
            <p>
              QuantBrain Labs exists to build that infrastructure — and the agents
              that pass it. We work in the open: papers, code, leaderboards. The
              long-term focus is closing the loop from natural-language ideas to
              risk-aware, production-ready trading systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
