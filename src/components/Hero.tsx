import { Button, Caption } from './ui'

export function Hero() {
  return (
    <section id="top" className="relative grain border-b border-inkwell/10">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 pt-24 pb-28 lg:pt-32 lg:pb-36 grid grid-cols-12 gap-x-8">
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-3">
          <Caption>Research group · est. 2025</Caption>
          <span className="font-mono text-[11px] tracking-caption text-muted-stone leading-relaxed max-w-[14ch]">
            LLMs · Quantitative finance · Agentic systems
          </span>
        </div>

        <div className="col-span-12 lg:col-span-9 mt-8 lg:mt-0">
          <h1 className="text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.0] tracking-display text-deep-shadow font-medium">
            We build an IDE AI assistant
            <br />
            <span className="font-serif-display italic font-normal text-onyx-outline">
              for algorithmic trading.
            </span>
          </h1>

          <p className="mt-8 max-w-[58ch] text-[17px] leading-[1.55] text-inkwell/85">
            QuantBrain Labs is a research group at the intersection of large
            language models and quantitative finance. We design agentic tools
            that compress the trader's loop from idea to a workable strategy or
            task.
          </p>

          <p className="mt-5 max-w-[68ch] text-[13px] leading-[1.65] text-inkwell/65">
            Building world-class user experience in finance and trading takes
            several disciplines working in partnership: training models for a
            specialized domain, designing rigorous evaluation and validation
            methods, refining and stress-testing rough versions with early users
            to surface what actually works, and scaling those findings into
            tools traders can rely on in their day-to-day work.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button as="a" href="#investor" variant="primary">
              Get in touch
            </Button>
            <Button as="a" href="#research" variant="ghost">
              Read research
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
