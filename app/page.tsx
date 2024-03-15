export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <div className="flex flex-col gap-2 pt-6">
        <a href="/leave">
          <div className="flex flex-col">
            <span className="text-4xl font-bold">Leave Application</span>
            <span className="text-lg">Generate perfect, lightning-fast leave forms, every time.</span>
          </div>
        </a>
        <div className="flex flex-col pt-8 gap-0.5">
          <span>Cadetplus is designed for however is not affiliated or endorsed by BHHSACU.</span>
          <div className="flex flex-col opacity-50">
            <span>All forms are public and freely available at <a href="https://bhhsacu.org">bhhsacu.org</a></span>
            <span className="-translate-y-1">Any problems lmk <a href="mailto:cadetplus@candra.dev">cadetplus@candra.dev</a></span>
          </div>
        </div>
      </div>
    </div>
  )
}
