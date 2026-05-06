import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

export function Caption({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`font-mono text-[10px] tracking-caption text-muted-stone ${className}`}
    >
      {children}
    </span>
  )
}

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-3 text-[11px] font-mono tracking-caption text-muted-stone">
      <span className="text-onyx-outline">{index}</span>
      <span>{children}</span>
    </div>
  )
}

type ButtonProps = {
  variant?: 'primary' | 'ghost'
  children: ReactNode
  className?: string
} & (
  | ({ as?: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ as: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>)
)

export function Button(props: ButtonProps) {
  const { variant = 'primary', children, className = '', as = 'a', ...rest } = props
  const base =
    'inline-flex items-center justify-center gap-2 px-4 py-[10px] text-[14px] leading-none rounded-[4px] transition-colors duration-200'
  const styles =
    variant === 'primary'
      ? 'border border-onyx-outline text-onyx-outline hover:bg-onyx-outline hover:text-canvas-parchment'
      : 'text-inkwell border border-transparent hover:border-inkwell/20'

  if (as === 'button') {
    return (
      <button className={`${base} ${styles} ${className}`} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
        <Arrow />
      </button>
    )
  }
  return (
    <a className={`${base} ${styles} ${className}`} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
      {children}
      <Arrow />
    </a>
  )
}

function Arrow() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="translate-y-[1px]"
    >
      <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  )
}

export function Hairline({ className = '' }: { className?: string }) {
  return <div className={`h-px w-full bg-inkwell/10 ${className}`} />
}

export function Stat({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="flex flex-col gap-2 border-t border-inkwell/15 pt-4">
      <span className="font-serif-display text-[44px] leading-[1] text-deep-shadow tracking-heading-lg">
        {value}
      </span>
      <span className="text-[13px] text-inkwell/80 leading-snug">{label}</span>
      {sub && <span className="font-mono text-[11px] text-muted-stone">{sub}</span>}
    </div>
  )
}
