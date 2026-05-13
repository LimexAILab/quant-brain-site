import { SectionLabel } from './ui'

const PIPELINE = [
  {
    tag: '01',
    title: 'Compilation',
    body: 'Generated strategy is syntactically valid Python with no interpretation errors.',
  },
  {
    tag: '02',
    title: 'Backtest',
    body: 'Strategy runs on historical data inside Backtrader without runtime failure.',
  },
  {
    tag: '03',
    title: 'Trade',
    body: 'The strategy actually places at least one trade on historical data.',
  },
  {
    tag: '04',
    title: 'Judge',
    body: 'An LLM judge confirms the executed behavior is semantically aligned with the task description.',
  },
]

const SOURCES = [
  { name: 'Reddit', count: 183 },
  { name: 'TradingView', count: 100 },
  { name: 'StackExchange', count: 90 },
  { name: 'GitHub', count: 19 },
  { name: 'Synthetic', count: 8 },
]

const DIFFICULTY = [
  { name: 'Easy', count: 197 },
  { name: 'Medium', count: 116 },
  { name: 'Hard', count: 87 },
]

const SINGLE_TURN = [
  { rank: '01', model: 'claude-opus-4.6', score: 75.8 },
  { rank: '02', model: 'gpt-5.4', score: 70.2 },
  { rank: '03', model: 'claude-sonnet-4.5', score: 69.8 },
  { rank: '04', model: 'gpt-5.2-codex', score: 67.5 },
  { rank: '05', model: 'glm-5', score: 65.4 },
]

const MULTI_TURN = [
  { rank: '01', model: 'claude-opus-4.6', score: 97.5 },
  { rank: '02', model: 'claude-sonnet-4.6', score: 96.0 },
  { rank: '03', model: 'gpt-5.4', score: 95.0 },
  { rank: '04', model: 'kimi-k2.5', score: 93.5 },
  { rank: '05', model: 'claude-sonnet-4.5', score: 93.0 },
]

const TOTAL_TASKS = 400

export function QuantCodeBench() {
  return (
    <section id="quantcode-bench" className="border-b border-inkwell/10 bg-pebble-gray/40">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 py-24 lg:py-28">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="flex flex-col gap-6 max-w-[60ch]">
            <SectionLabel index="§ 02">Featured research</SectionLabel>
            <h2 className="text-[34px] lg:text-[44px] leading-[1.05] tracking-heading-lg text-deep-shadow">
              <span className="font-mono text-[20px] lg:text-[24px] tracking-tight text-onyx-outline align-[3px]">
                QuantCode-Bench /
              </span>{' '}
              the first benchmark for{' '}
              <em className="font-serif-display not-italic italic">executable</em>{' '}
              trading strategies.
            </h2>
            <p className="text-[16px] leading-[1.55] text-inkwell/80">
              400 tasks. 17 frontier models. A four-stage pipeline that grades
              not what an LLM <em className="font-serif-display not-italic">claims</em>{' '}
              about a strategy, but what the strategy actually does when executed
              on historical data.
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

        {/* Pipeline */}
        <div className="mt-16">
          <span className="font-mono text-[11px] tracking-caption text-muted-stone">
            Evaluation pipeline · sequential, all-or-nothing
          </span>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-inkwell/10">
            {PIPELINE.map((step) => (
              <div
                key={step.tag}
                className="bg-canvas-parchment p-6 flex flex-col gap-3"
              >
                <span className="font-mono text-[11px] text-onyx-outline tracking-caption">
                  Stage {step.tag}
                </span>
                <h3 className="text-[19px] tracking-heading-sm text-deep-shadow leading-snug">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-[1.55] text-inkwell/75">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dataset composition */}
        <div className="mt-16 grid grid-cols-12 gap-x-8 gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            <span className="font-mono text-[11px] tracking-caption text-muted-stone">
              Dataset · sources
            </span>
            <h3 className="mt-3 text-[22px] tracking-heading text-deep-shadow leading-tight">
              400 trading-strategy tasks, drawn from where traders actually write.
            </h3>
            <div className="mt-6 flex flex-col gap-3">
              {SOURCES.map((s) => (
                <BarRow
                  key={s.name}
                  label={s.name}
                  count={s.count}
                  total={TOTAL_TASKS}
                />
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <span className="font-mono text-[11px] tracking-caption text-muted-stone">
              Dataset · difficulty
            </span>
            <h3 className="mt-3 text-[22px] tracking-heading text-deep-shadow leading-tight">
              Curated across difficulty so floor and ceiling both move.
            </h3>
            <div className="mt-6 flex flex-col gap-3">
              {DIFFICULTY.map((d) => (
                <BarRow
                  key={d.name}
                  label={d.name}
                  count={d.count}
                  total={TOTAL_TASKS}
                  accent
                />
              ))}
            </div>
          </div>
        </div>

        {/* Dual leaderboard */}
        <div className="mt-16 grid grid-cols-12 gap-x-8 gap-y-10">
          <Leaderboard
            title="Single-turn · Judge pass"
            sub="One shot. The model must be right on the first attempt."
            rows={SINGLE_TURN}
          />
          <Leaderboard
            title="Agentic multi-turn · Judge pass"
            sub="Up to 10 corrective turns with structured feedback. This is what closes the loop."
            rows={MULTI_TURN}
            accent
          />
        </div>

        <p className="mt-14 text-[14px] text-inkwell/70 max-w-[78ch] border-l-2 border-onyx-outline pl-4 leading-[1.6]">
          Why it matters — most LLM benchmarks score reasoning in isolation. In
          markets, the gap between “correct-looking code” and “code that holds
          capital” is where money is made or lost. QuantCode-Bench measures that
          gap, in the open, on a leaderboard anyone can reproduce.
        </p>
      </div>
    </section>
  )
}

function BarRow({
  label,
  count,
  total,
  accent,
}: {
  label: string
  count: number
  total: number
  accent?: boolean
}) {
  const pct = (count / total) * 100
  return (
    <div className="grid grid-cols-12 gap-3 items-center">
      <span className="col-span-3 sm:col-span-2 text-[13px] text-inkwell/85">
        {label}
      </span>
      <div className="col-span-7 sm:col-span-8 h-[10px] bg-inkwell/10 rounded-[2px] overflow-hidden">
        <div
          className={`h-full ${accent ? 'bg-onyx-outline' : 'bg-deep-shadow'}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="col-span-2 sm:col-span-2 text-right font-mono text-[12px] text-muted-stone">
        {count}
      </span>
    </div>
  )
}

function Leaderboard({
  title,
  sub,
  rows,
  accent,
}: {
  title: string
  sub: string
  rows: { rank: string; model: string; score: number }[]
  accent?: boolean
}) {
  return (
    <div className="col-span-12 lg:col-span-6">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[11px] tracking-caption text-muted-stone">
          {title}
        </span>
        {accent && (
          <span className="font-mono text-[10px] tracking-caption text-onyx-outline border border-onyx-outline/40 px-1.5 py-[1px] rounded-sm">
            agentic
          </span>
        )}
      </div>
      <p className="mt-3 text-[13px] leading-[1.55] text-inkwell/70 max-w-[44ch]">
        {sub}
      </p>
      <div className="mt-5 border border-inkwell/15 rounded-[4px] overflow-hidden bg-canvas-parchment shadow-[var(--shadow-subtle)]">
        <div className="grid grid-cols-12 gap-4 px-5 py-3 border-b border-inkwell/10 font-mono text-[11px] tracking-caption text-muted-stone">
          <span className="col-span-1">#</span>
          <span className="col-span-8">Model</span>
          <span className="col-span-3 text-right">Judge %</span>
        </div>
        {rows.map((row) => (
          <div
            key={row.rank}
            className="grid grid-cols-12 gap-4 px-5 py-4 border-b border-inkwell/10 last:border-b-0 items-baseline hover:bg-pebble-gray/50 transition-colors"
          >
            <span className="col-span-1 font-mono text-[12px] text-onyx-outline">
              {row.rank}
            </span>
            <span className="col-span-8 font-mono text-[13px] text-deep-shadow">
              {row.model}
            </span>
            <span
              className={`col-span-3 text-right font-serif-display text-[24px] leading-none ${
                accent ? 'text-onyx-outline' : 'text-deep-shadow'
              }`}
            >
              {row.score.toFixed(1)}
            </span>
          </div>
        ))}
        <div className="px-5 py-3 bg-pebble-gray/40 text-[12px] text-muted-stone flex justify-between items-center">
          <span>12 more models</span>
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
  )
}
