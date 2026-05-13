import { useState } from 'react'

const TYPES = ['Investment', 'Partnership', 'Press', 'Other'] as const
type InquiryType = (typeof TYPES)[number]

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
      {/* Top accent rule */}
      <div className="h-[3px] w-full bg-onyx-outline" aria-hidden />

      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 py-24 lg:py-32 grid grid-cols-12 gap-x-8 gap-y-12">
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-7">
          <span className="font-mono text-[11px] tracking-caption text-muted-stone">
            <span className="text-onyx-outline">§ 06</span> · Investor contact
          </span>

          <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] leading-[0.98] tracking-display text-deep-shadow">
            Talk to us before{' '}
            <span className="font-serif-display italic text-onyx-outline">
              the round closes.
            </span>
          </h2>

          <p className="text-[16px] leading-[1.6] text-inkwell/80 max-w-[44ch]">
            We're a thesis-driven group with a working benchmark, a clear roadmap,
            and a small team that ships. If your fund is positioned around
            AI × markets, this is the right table.
          </p>

          <div className="mt-2 flex flex-col gap-2 font-mono text-[13px]">
            <a
              href="mailto:khoroshilovalexis@gmail.com"
              className="text-onyx-outline hover:underline underline-offset-4 self-start"
            >
              khoroshilovalexis@gmail.com
            </a>
            <span className="text-muted-stone">
              Reply within 48h · NDAs available on request
            </span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="bg-canvas-parchment rounded-[8px] p-7 lg:p-9 flex flex-col gap-6 shadow-[var(--shadow-xl)]"
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
                className="bg-canvas-parchment border border-inkwell/20 rounded-[4px] px-3 py-3 text-[14px] leading-[1.5] placeholder:text-muted-stone text-inkwell focus:outline-none focus:border-onyx-outline resize-y"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <span className="font-mono text-[11px] text-muted-stone">
                Sent securely · we never share contact data
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 text-[14px] border border-onyx-outline text-onyx-outline px-5 py-[10px] rounded-[4px] hover:bg-onyx-outline hover:text-canvas-parchment transition-colors"
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
        className="bg-canvas-parchment border border-inkwell/20 rounded-[4px] px-3 py-3 text-[14px] text-inkwell placeholder:text-muted-stone focus:outline-none focus:border-onyx-outline"
      />
    </div>
  )
}
