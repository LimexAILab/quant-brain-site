import { SectionLabel } from './ui'

const BASE = import.meta.env.BASE_URL

type Member = {
  name: string
  role: string
  photo?: string
  href?: string
  initials: string
}

const MEMBERS: Member[] = [
  {
    name: 'Dmitry Zmitrovich',
    role: 'Team lead · Core R&D, pretraining',
    photo: 'team/zmitrovich.jpg',
    initials: 'DZ',
  },
  {
    name: 'Denis Kokosinsky',
    role: 'Core R&D, pretraining · finance foundation model',
    photo: 'team/kokosinsky.jpg',
    initials: 'DK',
  },
  {
    name: 'Dmitry Stanishevsky',
    role: 'Lead, financial-domain benchmarks',
    photo: 'team/stanishevsky.jpg',
    initials: 'DS',
  },
  {
    name: 'Alexey Chernysh',
    role: 'Models & benchmarks · algorithmic trading',
    photo: 'team/chernysh.jpg',
    href: 'https://www.linkedin.com/in/alexey-chernysh-4a413289/',
    initials: 'AC',
  },
  {
    name: 'Nina Kamkia',
    role: 'Time-series agents · technical analysis',
    photo: 'team/kamkia.jpg',
    href: 'https://www.linkedin.com/in/nina-kamkia-826b02234',
    initials: 'NK',
  },
  {
    name: 'Zhirayr Hayrapetyan',
    role: 'SFT & RL · financial domain',
    photo: 'team/hayrapetyan.jpg',
    initials: 'ZH',
  },
  {
    name: 'Alexey Khoroshilov',
    role: 'SFT & RL · algorithmic trading',
    photo: 'team/khoroshilov.jpg',
    initials: 'AK',
  },
  {
    name: 'Andrey Kalmykov',
    role: 'Datasets & pretraining for finance',
    photo: 'team/kalmykov.jpg',
    initials: 'AK',
  },
  {
    name: 'Dmitry Popov',
    role: 'News data · infrastructure',
    photo: 'team/popov.jpg',
    initials: 'DP',
  },
]

const TRACK_RECORD = [
  {
    year: '2019 – 2023',
    title: 'A generation of open-source Russian-language models',
    body:
      'ruBERT (co-developed with DeepPavlov), ruGPT2, ruGPT3, ruT5, ruRoberta, FRED-T5, and ruGPT3.5. SOTA at release on Russian SuperGLUE and adopted across the Russian NLP community.',
  },
  {
    year: '2022',
    title: 'GigaCode (Jarvis) launched inside Sber',
    body:
      'Started as our internal initiative in early 2021 — before the Codex paper and Copilot — and shipped as a product inside Sber, beginning with CodeCompletion.',
  },
  {
    year: '2023',
    title: 'Sber "Breakthrough of the Year" for GigaCode',
    body:
      'One of only three projects company-wide that year, selected by a vote of Sber\u2019s executive leadership. GigaChat at Sber also started from our team.',
  },
  {
    year: '2024',
    title: 'GigaCode plugins released externally',
    body:
      'JetBrains IDEs, VS Code, Jupyter, Android Studio, Eclipse, VSCodium. CodeGeneration and CodeChat modes added alongside CodeCompletion.',
  },
  {
    year: '2025',
    title: 'Koda IDE assistant',
    body:
      'kodacode.ru — end-to-end agent mode, multi-model BYOK, CLI, JetBrains and VS Code plugins. Built on top of everything above.',
  },
  {
    year: '2026',
    title: 'QuantBrain Labs · two public benchmarks in the first quarter',
    body:
      'QuantCode-Bench (arXiv:2604.15151) for executable trading strategies, and FINESSE-Bench (arXiv:2605.15482) for hierarchical financial competence. Both open source on GitHub.',
  },
]

const ROADMAP = [
  'Financial foundation model trained on a curated corpus of markets, filings, and time-series data.',
  'Trading-strategy generation agents with native integration into execution venues.',
  'Closed-loop training: agents critiqued by our own benchmarks, retrained on their own failure modes.',
  'Expanded evaluation stack with cost-aware and risk-aware metrics for live-style trading.',
]

export function Team() {
  return (
    <section id="team" className="border-b border-inkwell/10">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 py-24 lg:py-28">
        {/* Header */}
        <div className="grid grid-cols-12 gap-x-8">
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <SectionLabel index="§ 05">Team</SectionLabel>
            <h2 className="text-[32px] lg:text-[40px] leading-[1.1] tracking-heading-lg text-deep-shadow">
              The people behind the work.
            </h2>
            <p className="text-[15px] leading-[1.6] text-inkwell/80 max-w-[40ch]">
              Nine engineers and researchers who previously shipped GigaCode and
              GigaChat inside Sber and released a generation of Russian-language
              open-source models, now focused entirely on AI for quantitative
              finance and algorithmic trading.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8 mt-12 lg:mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
              {MEMBERS.map((m) => (
                <MemberCard key={m.name} member={m} />
              ))}
            </div>
          </div>
        </div>

        {/* Track record */}
        <div className="mt-20 grid grid-cols-12 gap-x-8 gap-y-6 border-t border-inkwell/15 pt-12">
          <div className="col-span-12 lg:col-span-4">
            <span className="font-mono text-[11px] tracking-caption text-muted-stone">
              Track record
            </span>
            <h3 className="mt-3 text-[22px] tracking-heading text-deep-shadow leading-tight">
              What this team has already shipped at scale.
            </h3>
          </div>
          <div className="col-span-12 lg:col-span-8 flex flex-col">
            {TRACK_RECORD.map((item, i) => (
              <article
                key={item.year + item.title}
                className={`grid grid-cols-12 gap-x-6 gap-y-2 py-5 border-t border-inkwell/10 ${
                  i === TRACK_RECORD.length - 1 ? 'border-b' : ''
                }`}
              >
                <span className="col-span-12 sm:col-span-3 font-mono text-[11px] tracking-caption text-muted-stone pt-1">
                  {item.year}
                </span>
                <div className="col-span-12 sm:col-span-9 flex flex-col gap-1">
                  <h4 className="text-[15px] text-deep-shadow leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[13px] leading-[1.65] text-inkwell/70">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* What's next */}
        <div className="mt-16 grid grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-12 lg:col-span-4">
            <span className="font-mono text-[11px] tracking-caption text-muted-stone">
              What we are building next
            </span>
            <h3 className="mt-3 text-[22px] tracking-heading text-deep-shadow leading-tight">
              Same team, same playbook, applied to capital markets.
            </h3>
          </div>
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-inkwell/10 self-start">
            {ROADMAP.map((line, i) => (
              <div
                key={i}
                className="bg-canvas-parchment p-5 flex gap-4 items-start"
              >
                <span className="font-mono text-[11px] text-onyx-outline tracking-caption pt-[3px]">
                  0{i + 1}
                </span>
                <p className="text-[13px] leading-[1.6] text-inkwell/85">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Channel + CTA */}
        <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-inkwell/15 pt-8">
          <p className="text-[13px] text-inkwell/70 max-w-[60ch]">
            We publish ongoing research notes on our Telegram channel.{' '}
            <a
              href="https://t.me/nlpcoreteam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-onyx-outline border-b border-onyx-outline/40 hover:border-onyx-outline pb-[1px]"
            >
              NLP Core Team ↗
            </a>
          </p>
          <a
            href="#investor"
            className="self-start md:self-auto text-[13px] border border-onyx-outline text-onyx-outline px-4 py-[10px] rounded-[4px] hover:bg-onyx-outline hover:text-canvas-parchment transition-colors"
          >
            Talk to the team ↓
          </a>
        </div>
      </div>
    </section>
  )
}

function MemberCard({ member }: { member: Member }) {
  const body = (
    <>
      <div className="aspect-square w-full overflow-hidden rounded-[4px] bg-pebble-gray/70 border border-inkwell/10">
        {member.photo ? (
          <img
            src={`${BASE}${member.photo}`}
            alt={member.name}
            loading="lazy"
            className="h-full w-full object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-300"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center font-serif-display text-[44px] leading-none text-muted-stone">
            {member.initials}
          </div>
        )}
      </div>
      <h3 className="mt-3 text-[14px] text-deep-shadow leading-snug">
        {member.name}
      </h3>
      <p className="mt-1 text-[12px] leading-[1.5] text-inkwell/65">
        {member.role}
      </p>
    </>
  )

  if (member.href) {
    return (
      <a
        href={member.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col"
      >
        {body}
        <span className="mt-1 font-mono text-[10px] tracking-caption text-onyx-outline">
          LinkedIn ↗
        </span>
      </a>
    )
  }

  return <div className="group flex flex-col">{body}</div>
}
