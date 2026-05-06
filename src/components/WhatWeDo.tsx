import { SectionLabel } from './ui'

const PILLARS = [
  {
    tag: '01',
    title: 'LLM evaluation for finance',
    body:
      'Benchmarks that grade models on what matters in markets: code that compiles, runs, trades, and aligns with intent — not on multiple-choice trivia.',
  },
  {
    tag: '02',
    title: 'Agentic trading systems',
    body:
      'Multi-turn agents that compile, debug, backtest, and refine strategies in a closed loop. We study where they break and where they cross human-quant baselines.',
  },
  {
    tag: '03',
    title: 'Strategy generation',
    body:
      'From a one-line idea to an executable Backtrader strategy. We measure the full path: semantic alignment, runtime correctness, and out-of-sample behavior.',
  },
  {
    tag: '04',
    title: 'Benchmarking infrastructure',
    body:
      'Open-source pipelines for compilation, sandboxed execution, walk-forward backtesting, and LLM-as-judge alignment scoring. Reproducible by design.',
  },
]

export function WhatWeDo() {
  return (
    <section className="border-b border-inkwell/10">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 py-24 lg:py-28 grid grid-cols-12 gap-x-8 gap-y-12">
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <SectionLabel index="§ 01">What we do</SectionLabel>
          <h2 className="text-[34px] lg:text-[40px] leading-[1.05] tracking-heading-lg text-deep-shadow">
            Building the measurement stack for AI in markets.
          </h2>
          <p className="text-[15px] leading-[1.55] text-inkwell/75 max-w-[40ch]">
            Capital allocation can't run on vibes. We turn “does this LLM know how
            to trade?” into something you can score, replicate, and improve against.
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
