import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import fillForm from "@sparticuz/pdffiller";

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
        <span className="opacity-50 pt-8">Any problems lmk <a href="mailto:cadetplus@candra.dev">darrenihaveaproblemwithcadetplus@candra.dev</a></span>
      </div>
    </div>
  )
}
