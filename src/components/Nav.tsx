export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-canvas-parchment/75 border-b border-inkwell/10">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-mono text-[12px] tracking-tight text-inkwell">
          <span className="inline-block h-2 w-2 rounded-full bg-onyx-outline" aria-hidden />
          QuantBrain Labs
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-[12px] text-inkwell/70">
          <a href="#research" className="hover:text-inkwell transition-colors">Research</a>
          <a href="#quantcode-bench" className="hover:text-inkwell transition-colors">QuantCode-Bench</a>
          <a href="#vision" className="hover:text-inkwell transition-colors">Vision</a>
        </nav>
        <a
          href="#investor"
          className="text-[13px] text-onyx-outline border border-onyx-outline rounded-[4px] px-3 py-[6px] hover:bg-onyx-outline hover:text-canvas-parchment transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}
