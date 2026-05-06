import { SectionLabel } from './ui'

type Pub = {
  status: 'published' | 'soon'
  title: string
  authors: string
  venue: string
  year: string
  tldr: string
  href?: string
}

const PUBS: Pub[] = [
  {
    status: 'published',
    title:
      'QuantCode-Bench: A Benchmark for Evaluating LLMs on Generating Executable Algorithmic Trading Strategies',
    authors: 'QuantBrain Labs',
    venue: 'arXiv preprint',
    year: '2025',
    tldr:
      '400 tasks across 16+ frontier LLMs. Four-stage pipeline (Compilation → Backtest → Trade → Judge) in single-turn and agentic multi-turn modes.',
    href: 'https://arxiv.org/abs/2604.15151',
  },
  {
    status: 'soon',
    title: 'Agentic baselines for portfolio-level strategy synthesis',
    authors: 'QuantBrain Labs',
    venue: 'In preparation',
    year: '2026',
    tldr:
      'Scaling beyond single instruments: how multi-asset, risk-aware agents perform when the search space includes allocation, sizing, and regime detection.',
  },
  {
    status: 'soon',
    title: 'Cost-aware evaluation of LLM trading agents',
    authors: 'QuantBrain Labs',
    venue: 'In preparation',
    year: '2026',
    tldr:
      'When you charge an LLM agent for every API call and every backtest, which models stay profitable per dollar of compute?',
  },
]

export function Publications() {
  return (
    <section id="research" className="border-b border-inkwell/10">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 py-24 lg:py-28">
        <div className="grid grid-cols-12 gap-x-8">
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <SectionLabel index="§ 03">Research · publications</SectionLabel>
            <h2 className="text-[34px] lg:text-[40px] leading-[1.05] tracking-heading-lg text-deep-shadow">
              Open work, on a public ledger.
            </h2>
            <p className="text-[15px] leading-[1.55] text-inkwell/75 max-w-[40ch]">
              We publish to arXiv, ship code on GitHub, and keep leaderboards live.
              Findings are only useful if other groups can replicate, contest, or
              extend them.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8 mt-12 lg:mt-0 flex flex-col">
            {PUBS.map((p, i) => (
              <article
                key={p.title}
                className={`group grid grid-cols-12 gap-x-6 gap-y-3 py-7 border-t border-inkwell/15 ${
                  i === PUBS.length - 1 ? 'border-b' : ''
                } ${p.status === 'soon' ? 'opacity-65' : ''} transition-opacity hover:opacity-100`}
              >
                <div className="col-span-12 sm:col-span-2 flex items-baseline gap-3">
                  <span className="font-mono text-[11px] tracking-caption text-muted-stone">
                    {p.year}
                  </span>
                  {p.status === 'soon' && (
                    <span className="font-mono text-[10px] tracking-caption text-onyx-outline border border-onyx-outline/40 px-1.5 py-[1px] rounded-sm">
                      soon
                    </span>
                  )}
                </div>
                <div className="col-span-12 sm:col-span-10 flex flex-col gap-2">
                  <h3 className="text-[19px] tracking-heading-sm text-deep-shadow leading-snug">
                    {p.title}
                  </h3>
                  <div className="font-mono text-[12px] text-muted-stone flex flex-wrap gap-x-4">
                    <span>{p.authors}</span>
                    <span>·</span>
                    <span>{p.venue}</span>
                  </div>
                  <p className="text-[14px] leading-[1.55] text-inkwell/75 max-w-[78ch]">
                    {p.tldr}
                  </p>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-start text-[13px] text-onyx-outline border-b border-onyx-outline/40 hover:border-onyx-outline pb-[1px] mt-1"
                    >
                      Read on arXiv ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
