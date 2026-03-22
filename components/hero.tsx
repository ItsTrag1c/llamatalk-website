"use client";

import Image from "next/image";
import { Download, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/llama.png"
            alt="Clank"
            width={80}
            height={80}
            className="rounded-2xl"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)]">
          Your AI.{" "}
          <span className="text-[var(--accent)]">Your Machine.</span>
        </h1>

        <p className="mt-4 text-lg text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
          A local-first AI agent gateway. One daemon, many frontends —
          CLI, browser, Telegram, Discord. Multi-agent, self-configuring,
          optimized for local models. Zero telemetry.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://github.com/ItsTrag1c/Clank"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            Get Started
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface)] text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            See Features
          </a>
        </div>

        <div className="mt-6">
          <code className="text-xs text-[var(--text-dim)] bg-[var(--surface)] px-4 py-2 rounded-lg border border-[var(--border)]">
            npm install -g @tractorscorch/clank && clank setup
          </code>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-xs text-[var(--text-dim)]">
          <span>Local-first</span>
          <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
          <span>Zero telemetry</span>
          <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
          <span>18 tools</span>
          <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
          <span>MIT licensed</span>
        </div>
      </div>
    </section>
  );
}
