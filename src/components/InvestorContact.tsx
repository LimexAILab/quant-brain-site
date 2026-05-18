import { useState } from 'react'

const TYPES = ['Investment', 'Partnership', 'Press', 'Other'] as const
type InquiryType = (typeof TYPES)[number]

const PROVE_IT = [
  {
    tag: '01',
    title: 'What we have',
    body:
      'Two open benchmarks on arXiv and GitHub (QuantCode-Bench, FINESSE-Bench). A team that previously shipped GigaCode and GigaChat at Sber. Six corporate awards. A decade of pretraining behind us.',
  },
  {
    tag: '02',
    title: 'What we are raising for',
    body:
      'Scaling the financial foundation model, building the agentic strategy pipeline, and standing up an early customer surface with trading desks and prop firms.',
  },
  {
    tag: '03',
    title: 'What comes back',
    body:
      'Equity in the category-defining measurement and modeling stack for AI × markets, published in the open, reproducible by anyone who cares to look.',
  },
]

export function InvestorContact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    organization: '',
    type: 'Investment' as InquiryType,
    message: '',
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const subject = encodeURIComponent(`[${form.type}] ${form.name} · ${form.organization}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}, ${form.organization}`)
    window.location.href = `mailto:khoroshilovalexis@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section
      id="investor"
      className="relative bg-highlight-beige text-inkwell border-t border-inkwell/15"
    >
      <div className="h-[3px] w-full bg-onyx-outline" aria-hidden />

      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 py-24 lg:py-32">
        {/* Pitch */}
        <div className="max-w-[72ch] flex flex-col gap-6">
          <span className="font-mono text-[11px] tracking-caption text-muted-stone">
            <span className="text-onyx-outline">§ 02</span> · For investors
          </span>

          <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.02] tracking-display text-deep-shadow">
            We are raising for the{' '}
            <span className="font-serif-display italic text-onyx-outline">next chapter.</span>
          </h2>

          <p className="text-[17px] leading-[1.6] text-inkwell/85 max-w-[62ch]">
            QuantBrain Labs is a small, named-risk team with two open benchmarks, a
            financial foundation model in flight, and a single thesis: be the
            measurement and modeling layer for AI in capital markets.
          </p>

          <p className="text-[15px] leading-[1.65] text-inkwell/80 max-w-[62ch]">
            If our thesis — that the next decade of trading will be human plus
            agent, and that whoever builds the measurement stack for it will define
            the category — resonates with your fund or research group, we are open to
            both investment and collaboration.
          </p>
        </div>

        {/* Prove-it tiles */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-inkwell/10">
          {PROVE_IT.map((tile) => (
            <article
              key={tile.tag}
              className="bg-canvas-parchment p-7 flex flex-col gap-3"
            >
              <span className="font-mono text-[11px] text-onyx-outline tracking-caption">
                {tile.tag}
              </span>
              <h3 className="text-[18px] tracking-heading-sm text-deep-shadow leading-snug">
                {tile.title}
              </h3>
              <p className="text-[13px] leading-[1.65] text-inkwell/75">{tile.body}</p>
            </article>
          ))}
        </div>

        {/* Email CTA */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-y border-inkwell/15 py-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] tracking-caption text-muted-stone">
              Investor inquiries
            </span>
            <a
              href="mailto:khoroshilovalexis@gmail.com"
              className="text-[22px] sm:text-[26px] text-onyx-outline hover:underline underline-offset-4 font-medium"
            >
              khoroshilovalexis@gmail.com
            </a>
          </div>
          <span className="font-mono text-[12px] text-muted-stone">
            Reply within 48h · NDA on request
          </span>
        </div>

        {/* Form */}
        <div className="mt-14">
          <span className="font-mono text-[11px] tracking-caption text-muted-stone block mb-6">
            Or send a structured inquiry
          </span>
          <form
            onSubmit={onSubmit}
            className="bg-canvas-parchment rounded-[8px] p-7 lg:p-9 flex flex-col gap-6 shadow-[var(--shadow-xl)] max-w-[720px]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                label="Organization"
                value={form.organization}
                onChange={(v) => setForm({ ...form, organization: v })}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[11px] tracking-caption text-muted-stone">
                Type of inquiry
              </label>
              <div className="flex flex-wrap gap-2">
                {TYPES.map((t) => {
                  const active = form.type === t
                  return (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setForm({ ...form, type: t })}
                      className={`text-[13px] px-3 py-2 rounded-[4px] border transition-colors ${
                        active
                          ? 'border-onyx-outline text-onyx-outline bg-onyx-outline/10'
                          : 'border-inkwell/25 text-inkwell/85 hover:border-inkwell'
                      }`}
                    >
                      {t}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[11px] tracking-caption text-muted-stone">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Briefly: who you are, fund/firm thesis, what you'd like to discuss."
                className="bg-canvas-parchment border border-inkwell/20 rounded-[4px] px-3 py-3 text-[13px] leading-[1.55] placeholder:text-muted-stone text-inkwell focus:outline-none focus:border-onyx-outline resize-y"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <span className="font-mono text-[11px] tracking-caption text-muted-stone">
                Opens your mail client · we never share contact data
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 text-[13px] border border-onyx-outline text-onyx-outline px-5 py-[10px] rounded-[4px] hover:bg-onyx-outline hover:text-canvas-parchment transition-colors"
              >
                {submitted ? 'Opening mail client…' : 'Send inquiry'}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  value,
  onChange,
  required,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-[11px] tracking-caption text-muted-stone">
        {label}
      </label>
      <input
        type="text"
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-canvas-parchment border border-inkwell/20 rounded-[4px] px-3 py-3 text-[13px] text-inkwell placeholder:text-muted-stone focus:outline-none focus:border-onyx-outline"
      />
    </div>
  )
}
