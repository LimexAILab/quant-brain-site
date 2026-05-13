import { SectionLabel } from './ui'

const PILLARS = [
  {
    tag: '01',
    title: 'Foundation model for finance',
    body:
      'Pre-training and adaptation of a foundation model for the financial domain — fluent in market vocabulary, instruments, and the way professionals reason about them.',
  },
  {
    tag: '02',
    title: 'Specialization for trading time series',
    body:
      'Adapting models to specialized trading domains so they can work effectively with time series, microstructure data, and the statistical regimes markets actually live in.',
  },
  {
    tag: '03',
    title: 'Strategy generation with platform-native agents',
    body:
      'Models trained to generate executable algorithmic strategies, with seamless agent integration into trading platforms and execution venues.',
  },
  {
    tag: '04',
    title: 'Agentic systems for traders',
    body:
      'Agent architectures built on best practices in tool use, planning, and self-correction — wired to the instruments a real trader actually reaches for.',
  },
  {
    tag: '05',
    title: 'Evaluation that separates the field',
    body:
      'Benchmarks and scoring pipelines that robustly differentiate model quality where it matters: compilation, runtime correctness, trading behavior, and semantic alignment with intent.',
  },
]

export function WhatWeDo() {
  return (
    <section className="border-b border-inkwell/10">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 py-24 lg:py-28 grid grid-cols-12 gap-x-8 gap-y-12">
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <SectionLabel index="§ 01">What we work on</SectionLabel>
          <h2 className="text-[34px] lg:text-[40px] leading-[1.05] tracking-heading-lg text-deep-shadow">
            Five threads, one product loop.
          </h2>
          <p className="text-[15px] leading-[1.55] text-inkwell/75 max-w-[40ch]">
            Each direction feeds the next: a financial foundation model under
            domain-specialized agents, judged by an evaluation stack that won't
            let weak models hide.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-inkwell/10">
          {PILLARS.map((p) => (
            <article
              key={p.tag}
              className="group bg-canvas-parchment p-7 flex flex-col gap-3 transition-colors hover:bg-pebble-gray/60"
            >
              <span className="font-mono text-[11px] text-muted-stone tracking-caption">
                {p.tag}
              </span>
              <h3 className="text-[20px] tracking-heading-sm text-deep-shadow leading-snug">
                {p.title}
              </h3>
              <p className="text-[14px] leading-[1.55] text-inkwell/75">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
