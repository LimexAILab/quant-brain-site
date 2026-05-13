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
            The next decade of trading will be{' '}
            <span className="italic text-onyx-outline">human + agent</span>.
            Our job is to make sure the agent half is{' '}
            <em className="italic">measurably worth</em> sitting next to.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-[15px] leading-[1.6] text-inkwell/80 max-w-[78ch]">
            <p>
              Frontier models can already write code that compiles. Soon they
              will propose, test, and refine entire trading workflows alongside
              the desk. Before that happens at scale, the industry needs
              measurement infrastructure that's honest, executable, and
              adversarial — and tools traders actually want to use.
            </p>
            <p>
              QuantBrain Labs exists to build both — the measurement stack and
              the assistants that pass it. We work in the open: papers, code,
              live leaderboards. The long-term focus is closing the loop from a
              trader's intent in plain language to a risk-aware, production-ready
              strategy on a real venue.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
