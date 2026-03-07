"use client";

import Image from "next/image";
import { Download, Github } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/llama.png"
            alt="LlamaTalk"
            width={80}
            height={80}
            className="rounded-2xl"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)]">
          AI Chat for{" "}
          <span className="text-[var(--accent)]">Power Users</span>
        </h1>

        <p className="mt-4 text-lg text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
          Three apps. One ecosystem. Local-first AI with zero telemetry,
          full encryption, and support for 8 providers.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            Download for Windows
          </a>
          <a
            href="https://github.com/ItsTrag1c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface)] text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-xs text-[var(--text-dim)]">
          <span>3 apps</span>
          <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
          <span>8 providers</span>
          <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
          <span>MIT licensed</span>
          <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
          <span>Zero telemetry</span>
        </div>
      </div>
    </section>
  );
}
