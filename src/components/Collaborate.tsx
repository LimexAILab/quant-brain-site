import { SectionLabel } from './ui'

const PROFILE = [
  {
    title: 'Researchers in LLMs and reasoning',
    body:
      'You\'ve published at NeurIPS / ICML / ICLR or shipped frontier evals. You care about benchmarks that actually predict deployment performance.',
  },
  {
    title: 'ML engineers with quant chops',
    body:
      'You\'ve built backtesters, written trading code in production, or shipped infra for evaluation pipelines at scale.',
  },
  {
    title: 'Quants curious about AI',
    body:
      'You know what alpha decay looks like, what a realistic backtest must rule out, and where LLM-generated strategies will quietly fail.',
  },
  {
    title: 'Builders, not spectators',
    body:
      'You ship. You measure. You change your mind in public when the data says so. You think research without code is folklore.',
  },
]

export function Collaborate() {
  return (
    <section id="collaborate" className="border-b border-inkwell/10">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 py-24 lg:py-28 grid grid-cols-12 gap-x-8 gap-y-12">
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <SectionLabel index="§ 05">Collaborate</SectionLabel>
          <h2 className="text-[34px] lg:text-[40px] leading-[1.05] tracking-heading-lg text-deep-shadow">
            What we look for.
          </h2>
          <p className="text-[15px] leading-[1.55] text-inkwell/75 max-w-[40ch]">
            We don't publish a job ladder. We work with people whose past output
            answers the question for us. If you recognize yourself below, write us
            directly.
          </p>
          <a
            href="mailto:research@quantbrainlabs.ai"
            className="self-start mt-2 inline-flex items-center gap-2 font-mono text-[14px] text-onyx-outline border-b border-onyx-outline/40 hover:border-onyx-outline pb-[2px]"
          >
            research@quantbrainlabs.ai ↗
          </a>
        </div>

        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {PROFILE.map((p, i) => (
            <article
              key={p.title}
              className="flex flex-col gap-2 py-6 border-t border-inkwell/15"
            >
              <span className="font-mono text-[11px] tracking-caption text-muted-stone">
                0{i + 1}
              </span>
              <h3 className="text-[18px] tracking-heading-sm text-deep-shadow leading-snug">
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
