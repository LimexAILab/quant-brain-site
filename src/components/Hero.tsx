import { Button, Caption } from './ui'

export function Hero() {
  return (
    <section id="top" className="relative grain border-b border-inkwell/10">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 pt-24 pb-28 lg:pt-32 lg:pb-36 grid grid-cols-12 gap-x-8">
        {/* Left rail label */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-3">
          <Caption>Research group · est. 2025</Caption>
          <span className="font-mono text-[12px] text-muted-stone leading-relaxed max-w-[14ch]">
            LLMs · Quantitative finance · Agentic systems
          </span>
        </div>

        {/* Headline column */}
        <div className="col-span-12 lg:col-span-9 mt-8 lg:mt-0">
          <h1 className="text-[44px] sm:text-[56px] lg:text-[76px] leading-[0.98] tracking-display text-deep-shadow font-medium">
            We measure and build <br /> the AI systems that will
            <br />
            <span className="font-serif-display italic font-normal text-onyx-outline">
              trade real capital.
            </span>
          </h1>

          <p className="mt-8 max-w-[58ch] text-[18px] leading-[1.5] text-inkwell/80">
            QuantBrain Labs is an independent research group at the intersection of large
            language models and quantitative finance. We design rigorous benchmarks and
            agentic systems for one question: which models can actually generate
            executable trading strategies?
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button as="a" href="#investor" variant="primary">
              Get in touch
            </Button>
            <Button as="a" href="#quantcode-bench" variant="ghost">
              Read research
            </Button>
          </div>

          {/* Anchor metric strip */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 border-t border-inkwell/15 pt-6 max-w-[860px]">
            <Anchor n="400" label="benchmark tasks" />
            <Anchor n="16+" label="frontier models evaluated" />
            <Anchor n="4-stage" label="execution pipeline" />
            <Anchor n="97.5%" label="best multi-turn Judge pass" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Anchor({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-serif-display text-[34px] leading-none text-deep-shadow tracking-heading-lg">
        {n}
      </span>
      <span className="text-[12px] text-inkwell/70 leading-snug">{label}</span>
    </div>
  )
}
