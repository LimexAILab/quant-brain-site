import { SectionLabel } from './ui'

type Pub = {
  title: string
  authors: string
  venue: string
  year: string
  tldr: string
  href?: string
  codeHref?: string
}

const PUBS: Pub[] = [
  {
    title:
      'QuantCode-Bench: A Benchmark for Evaluating the Ability of Large Language Models to Generate Executable Algorithmic Trading Strategies',
    authors:
      'Khoroshilov A., Chernysh A., Ekhtibarov O., Kamkia N., Zmitrovich D.',
    venue: 'arXiv:2604.15151 · cs.CL',
    year: '2026',
    tldr:
      '400 strategy-generation tasks over 17 frontier LLMs, judged through a four-stage pipeline (Compilation → Backtest → Trade → Judge) in single-turn and agentic multi-turn settings. Result: agentic loops lift the top model from 75.8% to 97.5% Judge pass rate, and the dominant failure mode is no longer syntax — it is operationalization of trading logic and adherence to task semantics.',
    href: 'https://arxiv.org/abs/2604.15151',
    codeHref: 'https://github.com/LimexAILab/QuantCode-Bench',
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
              We publish to arXiv, ship code on GitHub, and keep leaderboards
              live. Findings are only useful if other groups can replicate,
              contest, or extend them.
            </p>
            <p className="text-[13px] leading-[1.6] text-muted-stone max-w-[40ch] mt-2">
              Additional papers are in preparation — we will list them here as
              they go public.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8 mt-12 lg:mt-0 flex flex-col">
            {PUBS.map((p, i) => (
              <article
                key={p.title}
                className={`group grid grid-cols-12 gap-x-6 gap-y-3 py-7 border-t border-inkwell/15 ${
                  i === PUBS.length - 1 ? 'border-b' : ''
                }`}
              >
                <div className="col-span-12 sm:col-span-2 flex items-baseline gap-3">
                  <span className="font-mono text-[11px] tracking-caption text-muted-stone">
                    {p.year}
                  </span>
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
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mt-1">
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-onyx-outline border-b border-onyx-outline/40 hover:border-onyx-outline pb-[1px]"
                      >
                        Read on arXiv ↗
                      </a>
                    )}
                    {p.codeHref && (
                      <a
                        href={p.codeHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-inkwell/80 border-b border-inkwell/25 hover:border-inkwell pb-[1px]"
                      >
                        Code on GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
