import { SectionLabel } from './ui'

const PROFILE = [
  {
    title: 'Investors with an AI × markets thesis',
    body:
      "Funds and angels positioned around the next wave of agentic AI in finance. We're raising to scale the model, the evaluation stack, and the early product surface — with a working benchmark and shipped code already on the table.",
  },
  {
    title: 'Research labs working on agents and evaluation',
    body:
      'Academic and industry groups building agentic systems, LLM evaluation, or quantitative reasoning. We co-author, share data, and contribute back to public benchmarks.',
  },
  {
    title: 'Trading firms, brokers, prop desks',
    body:
      'Partners who want their workflows reflected in the next generation of trader assistants. We trade depth-of-domain feedback for early access and joint pilots.',
  },
  {
    title: 'Data, compute, and infra partners',
    body:
      'Providers of market data, alternative data, execution venues, and large-scale compute. Privileged inputs make the difference between a clever demo and a deployable system.',
  },
]

export function Collaborate() {
  return (
    <section id="collaborate" className="border-b border-inkwell/10">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 py-24 lg:py-28 grid grid-cols-12 gap-x-8 gap-y-12">
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <SectionLabel index="§ 05">Capital & partnerships</SectionLabel>
          <h2 className="text-[34px] lg:text-[40px] leading-[1.05] tracking-heading-lg text-deep-shadow">
            Who we want at the table.
          </h2>
          <p className="text-[15px] leading-[1.55] text-inkwell/75 max-w-[40ch]">
            This is not a hiring page. It is an open invitation to investors and
            collaborators whose work compounds with ours. If any of the profiles
            below describe you, write directly.
          </p>
          <a
            href="mailto:khoroshilovalexis@gmail.com"
            className="self-start mt-2 inline-flex items-center gap-2 font-mono text-[14px] text-onyx-outline border-b border-onyx-outline/40 hover:border-onyx-outline pb-[2px]"
          >
            khoroshilovalexis@gmail.com ↗
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
