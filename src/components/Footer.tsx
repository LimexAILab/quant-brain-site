export function Footer() {
  return (
    <footer className="border-t border-inkwell/10">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[12px] text-muted-stone">
        <div className="flex items-center gap-2 font-mono text-inkwell/80">
          <span className="inline-block h-2 w-2 rounded-full bg-onyx-outline" aria-hidden />
          <span>QuantBrain Labs</span>
          <span className="text-muted-stone">· research group</span>
        </div>
        <div className="flex flex-wrap items-center gap-6 font-mono">
          <a
            href="mailto:contact@quantbrainlabs.ai"
            className="hover:text-inkwell transition-colors"
          >
            contact@quantbrainlabs.ai
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
          <a
            href="https://scholar.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-inkwell transition-colors"
          >
            Scholar ↗
          </a>
        </div>
        <span className="font-mono">© {new Date().getFullYear()} QuantBrain Labs</span>
      </div>
    </footer>
  )
}
