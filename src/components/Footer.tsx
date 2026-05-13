export function Footer() {
  return (
    <footer className="border-t border-inkwell/10">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 font-mono text-[11px] tracking-caption text-muted-stone">
        <div className="flex items-center gap-2 text-inkwell/80">
          <span className="inline-block h-2 w-2 rounded-full bg-onyx-outline" aria-hidden />
          <span>QuantBrain Labs</span>
          <span className="text-muted-stone">· research group</span>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="mailto:khoroshilovalexis@gmail.com"
            className="hover:text-inkwell transition-colors"
          >
            khoroshilovalexis@gmail.com
          </a>
          <a
            href="https://github.com/LimexAILab/QuantCode-Bench"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-inkwell transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://arxiv.org/abs/2604.15151"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-inkwell transition-colors"
          >
            arXiv ↗
          </a>
        </div>
        <span>© {new Date().getFullYear()} QuantBrain Labs</span>
      </div>
    </footer>
  )
}
