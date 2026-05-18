import type { ReactNode } from 'react'
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
    name: 'Alexey Khoroshilov',
    role: 'SFT & RL · algorithmic trading',
    photo: 'team/khoroshilov.jpg',
    initials: 'AK',
  },
  {
    name: 'Denis Kokosinsky',
    role: 'Core R&D, pretraining · finance foundation model',
    photo: 'team/kokosinsky.jpg',
    initials: 'DK',
  },
  {
    name: 'Dmitry Stanishevsky',
    role: 'Financial-domain benchmarks · broadest specialization coverage',
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

type TrackRecordItem = {
  year: string
  title: ReactNode
  body: ReactNode
}

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-onyx-outline border-b border-onyx-outline/40 hover:border-onyx-outline pb-[1px]"
    >
      {children}
    </a>
  )
}

const TRACK_RECORD: TrackRecordItem[] = [
  {
    year: '2019',
    title: (
      <>
        ruBERT base / large ·{' '}
        <ExtLink href="https://huggingface.co/ai-forever/ruBert-base">Hugging Face ↗</ExtLink>
      </>
    ),
    body: 'Our first open-source models, co-developed with the DeepPavlov team.',
  },
  {
    year: '2020',
    title: (
      <>
        ruGPT2 S / M / L ·{' '}
        <ExtLink href="https://huggingface.co/ai-forever/rugpt2large">Hugging Face ↗</ExtLink>
      </>
    ),
    body:
      "Used as the conversational backbone of Sber's Salute assistants, later succeeded by ruGPT3.",
  },
  {
    year: '2020',
    title: (
      <>
        ruGPT3 S / M / L / XL ·{' '}
        <ExtLink href="https://huggingface.co/ai-forever/rugpt3large_based_on_gpt2">
          Hugging Face ↗
        </ExtLink>
      </>
    ),
    body:
      'SOTA open-source generative models for Russian at release; broad public adoption.',
  },
  {
    year: '2021',
    title: (
      <>
        ruT5 base / large ·{' '}
        <ExtLink href="https://huggingface.co/ai-forever/ruT5-large">Hugging Face ↗</ExtLink>
      </>
    ),
    body: 'The large variant held SOTA on the Russian SuperGLUE benchmark.',
  },
  {
    year: '2021',
    title: (
      <>
        ruRoberta 350M ·{' '}
        <ExtLink href="https://huggingface.co/ai-forever/ruRoberta-large">Hugging Face ↗</ExtLink>
      </>
    ),
    body: 'SOTA encoder for Russian at the time.',
  },
  {
    year: '2022',
    title: 'GigaCode (Jarvis) launched inside Sber',
    body:
      'Started as our internal initiative in early 2021 — before the Codex paper and Copilot — and shipped as a product in 2022. CodeCompletion was the first feature.',
  },
  {
    year: '2023',
    title: (
      <>
        FRED-T5 800M / 1.7B ·{' '}
        <ExtLink href="https://huggingface.co/ai-forever/FRED-T5-1.7B">Hugging Face ↗</ExtLink>
      </>
    ),
    body:
      'SOTA for Russian at release; the 1.7B model approached Mistral 7B + LoRA on RSG at roughly a quarter of the capacity.',
  },
  {
    year: '2023',
    title: (
      <>
        ruGPT3.5 13B ·{' '}
        <ExtLink href="https://huggingface.co/ai-forever/ruGPT-3.5-13B">Hugging Face ↗</ExtLink>
      </>
    ),
    body: 'Co-developed with SberDevices. GigaChat at Sber started from our team.',
  },
  {
    year: '2023',
    title: 'Sber "Breakthrough of the Year" for GigaCode',
    body:
      "One of only three projects company-wide that year, chosen by a vote of Sber's executive leadership.",
  },
  {
    year: '2024',
    title: 'GigaCode plugins released externally',
    body:
      'JetBrains IDEs, VS Code, Jupyter, Android Studio, Eclipse, VSCodium. CodeGeneration and CodeChat added alongside CodeCompletion.',
  },
  {
    year: '2026',
    title: 'QuantBrain Labs · two public benchmarks in the first quarter',
    body: (
      <>
        QuantCode-Bench (
        <ExtLink href="https://arxiv.org/abs/2604.15151">arXiv:2604.15151 ↗</ExtLink>
        ) for executable trading strategies, and FINESSE-Bench (
        <ExtLink href="https://arxiv.org/abs/2605.15482">arXiv:2605.15482 ↗</ExtLink>
        ) for hierarchical financial competence. Both open source on GitHub.
      </>
    ),
  },
]

const BUILDING = [
  {
    title: 'Financial foundation model',
    body:
      'Pre-training on markets, filings, and time-series — fluent in the way professionals reason about instruments.',
  },
  {
    title: 'Specialization for trading time series',
    body:
      'Models adapted to microstructure data, regimes, and the statistical world markets actually live in.',
  },
  {
    title: 'Strategy generation with platform-native agents',
    body:
      'Executable algorithmic strategies, natively integrated into trading platforms and execution venues.',
  },
  {
    title: 'Agentic systems for traders',
    body:
      'Agents critiqued by our own benchmarks and retrained on their own failure modes — a closed loop.',
  },
  {
    title: 'Evaluation that separates the field',
    body:
      'Cost-aware and risk-aware metrics for live-style trading, on top of the benchmarks already public.',
  },
]

export function Team() {
  return (
    <section id="team" className="border-b border-inkwell/10">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 py-24 lg:py-28">
        <div className="grid grid-cols-12 gap-x-8">
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <SectionLabel index="§ 01">Team</SectionLabel>
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
                key={`${item.year}-${i}`}
                className={`grid grid-cols-12 gap-x-6 gap-y-2 py-5 border-t border-inkwell/10 ${
                  i === TRACK_RECORD.length - 1 ? 'border-b' : ''
                }`}
              >
                <span className="col-span-12 sm:col-span-3 font-mono text-[11px] tracking-caption text-muted-stone pt-1">
                  {item.year}
                </span>
                <div className="col-span-12 sm:col-span-9 flex flex-col gap-1">
                  <h4 className="text-[15px] text-deep-shadow leading-snug">{item.title}</h4>
                  <p className="text-[13px] leading-[1.65] text-inkwell/70">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* What we are building */}
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
            {BUILDING.map((item, i) => (
              <article
                key={item.title}
                className="bg-canvas-parchment p-5 flex flex-col gap-2"
              >
                <span className="font-mono text-[11px] text-onyx-outline tracking-caption">
                  0{i + 1}
                </span>
                <h4 className="text-[15px] text-deep-shadow leading-snug">{item.title}</h4>
                <p className="text-[13px] leading-[1.6] text-inkwell/70">{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Channel */}
        <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-inkwell/15 pt-8">
          <p className="text-[13px] text-inkwell/70 max-w-[60ch]">
            We publish ongoing research notes on our Telegram channel.{' '}
            <ExtLink href="https://t.me/nlpcoreteam">NLP Core Team ↗</ExtLink>
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
      <h3 className="mt-3 text-[14px] text-deep-shadow leading-snug">{member.name}</h3>
      <p className="mt-1 text-[12px] leading-[1.5] text-inkwell/65">{member.role}</p>
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
