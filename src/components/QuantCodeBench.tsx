import { SectionLabel } from './ui'

const STATS = [
  { value: '400', label: 'benchmark tasks', sub: 'Reddit · TradingView · StackExchange · GitHub · synthetic' },
  { value: '16+', label: 'frontier models evaluated', sub: 'Claude, GPT, Gemini, Qwen, DeepSeek' },
  { value: '4', label: 'stage execution pipeline', sub: 'Compilation → Backtest → Trade → Judge' },
  { value: '2', label: 'evaluation modes', sub: 'single-turn · agentic multi-turn (≤10 corrections)' },
]

const LEADERBOARD = [
  { rank: '01', model: 'claude-opus-4.6', score: '75.8%', mode: 'single-turn · Judge' },
  { rank: '02', model: 'gpt-5.4', score: '70.2%', mode: 'single-turn · Judge' },
  { rank: '03', model: 'claude-sonnet-4.5', score: '69.8%', mode: 'single-turn · Judge' },
]

export function QuantCodeBench() {
  return (
    <section id="quantcode-bench" className="border-b border-inkwell/10 bg-pebble-gray/40">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 py-24 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="flex flex-col gap-6 max-w-[60ch]">
            <SectionLabel index="§ 02">Featured research</SectionLabel>
            <h2 className="text-[34px] lg:text-[44px] leading-[1.05] tracking-heading-lg text-deep-shadow">
              <span className="font-mono text-[20px] lg:text-[24px] tracking-tight text-onyx-outline align-[3px]">
                QuantCode-Bench /
              </span>{' '}
              one of our recent works.
            </h2>
            <p className="text-[16px] leading-[1.55] text-inkwell/80">
              The first benchmark to evaluate whether LLMs can write{' '}
              <em className="font-serif-display not-italic text-deep-shadow">
                executable
              </em>{' '}
              algorithmic trading strategies — graded end-to-end through compilation,
              backtest, live-style trading, and an LLM-as-judge alignment stage.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="https://arxiv.org/abs/2604.15151"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] border border-onyx-outline text-onyx-outline px-4 py-[10px] rounded-[4px] hover:bg-onyx-outline hover:text-canvas-parchment transition-colors"
            >
              Read paper ↗
            </a>
            <a
              href="https://github.com/LimexAILab/QuantCode-Bench"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] border border-inkwell/25 text-inkwell px-4 py-[10px] rounded-[4px] hover:border-inkwell transition-colors"
            >
              Code ↗
            </a>
            <a
              href="https://limexailab.github.io/QuantCode-Bench/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] border border-inkwell/25 text-inkwell px-4 py-[10px] rounded-[4px] hover:border-inkwell transition-colors"
            >
              Leaderboard ↗
            </a>
          </div>
        </div>

        {/* Stat tiles */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-inkwell/10 border-t border-b border-inkwell/10">
          {STATS.map((s) => (
            <div key={s.label} className="bg-canvas-parchment p-7 flex flex-col gap-3">
              <span className="font-serif-display text-[56px] leading-[0.95] text-deep-shadow tracking-heading-lg">
                {s.value}
              </span>
              <span className="text-[14px] text-inkwell/85 leading-snug">{s.label}</span>
              <span className="font-mono text-[11px] text-muted-stone leading-relaxed">
                {s.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Leaderboard preview */}
        <div className="mt-16 grid grid-cols-12 gap-x-8 gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="font-mono text-[11px] text-muted-stone tracking-caption">
              Leaderboard preview · single-turn
            </span>
            <h3 className="mt-3 text-[24px] tracking-heading text-deep-shadow leading-tight">
              Frontier models, scored on whether their generated code{' '}
              <em className="font-serif-display not-italic">actually trades.</em>
            </h3>
            <p className="mt-4 text-[14px] leading-[1.55] text-inkwell/75 max-w-[40ch]">
              Multi-turn agentic mode lifts the top model from 75.8% to 97.5% Judge
              pass rate — a measurable picture of where corrective loops help and
              where they don't.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="border border-inkwell/15 rounded-[4px] overflow-hidden bg-canvas-parchment shadow-[var(--shadow-subtle)]">
              <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-inkwell/10 font-mono text-[11px] tracking-caption text-muted-stone">
                <span className="col-span-1">#</span>
                <span className="col-span-6">Model</span>
                <span className="col-span-3">Mode</span>
                <span className="col-span-2 text-right">Judge</span>
              </div>
              {LEADERBOARD.map((row) => (
                <div
                  key={row.rank}
                  className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-inkwell/10 last:border-b-0 items-baseline group hover:bg-pebble-gray/50 transition-colors"
                >
                  <span className="col-span-1 font-mono text-[12px] text-onyx-outline">
                    {row.rank}
                  </span>
                  <span className="col-span-6 font-mono text-[14px] text-deep-shadow">
                    {row.model}
                  </span>
                  <span className="col-span-3 text-[12px] text-muted-stone">{row.mode}</span>
                  <span className="col-span-2 text-right font-serif-display text-[28px] leading-none text-deep-shadow">
                    {row.score}
                  </span>
                </div>
              ))}
              <div className="px-6 py-3 bg-pebble-gray/40 text-[12px] text-muted-stone flex justify-between items-center">
                <span>13 more models · multi-turn results</span>
                <a
                  href="https://limexailab.github.io/QuantCode-Bench/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-onyx-outline hover:underline underline-offset-4"
                >
                  Full leaderboard ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-14 text-[14px] text-inkwell/70 max-w-[78ch] border-l-2 border-onyx-outline pl-4 leading-[1.6]">
          Why it matters — most LLM benchmarks score reasoning in isolation. In
          markets, the gap between “correct-looking code” and “code that holds
          capital” is where money is made or lost. QuantCode-Bench measures that gap.
        </p>
      </div>
    </section>
  )
}
