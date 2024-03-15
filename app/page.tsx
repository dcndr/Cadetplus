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
        <span className="pt-8">Cadetplus is designed for however is not affiliated or endorsed by BHHSACU.</span>
        <span className="opacity-50">All forms are public and freely available at <a href="https://bhhsacu.org">bhhsacu.org</a></span>
        <span className="opacity-50">Any problems lmk <a href="mailto:cadetplus@candra.dev">cadetplus@candra.dev</a></span>
      </div>
    </div>
  )
}
