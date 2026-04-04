"use client";

import { Terminal, Globe, ExternalLink } from "lucide-react";
import { VERSIONS } from "@/lib/versions";

export function Downloads() {
  return (
    <section className="py-20 px-6 border-t border-[var(--border)]" id="download">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Get Started</h2>
        <p className="text-[var(--text-muted)] text-sm mb-10">
          Install Clank and start chatting in under 2 minutes.
        </p>

        {/* npm install */}
        <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] mb-4">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-5 h-5 text-[var(--accent)]" />
            <div>
              <h3 className="font-medium text-sm text-[var(--text)]">Install via npm</h3>
              <span className="text-xs font-mono text-[var(--text-dim)]">v{VERSIONS.clank} · Node.js 20+</span>
            </div>
          </div>
          <div className="bg-[var(--bg)] rounded-lg p-4 font-mono text-sm text-[var(--text-muted)] border border-[var(--border)]">
            <div className="mb-1"><span className="text-[var(--text-dim)]">$</span> npm install -g @clanklabs/clank</div>
            <div className="mb-1"><span className="text-[var(--text-dim)]">$</span> clank setup</div>
            <div><span className="text-[var(--text-dim)]">$</span> clank</div>
          </div>
          <p className="mt-3 text-xs text-[var(--text-dim)]">
            Setup auto-detects local models (Ollama, LM Studio, llama.cpp), configures the harness,
            and connects your preferred interfaces (Telegram, Discord, Web UI).
          </p>
        </div>

        {/* Links */}
        <div className="grid sm:grid-cols-3 gap-3">
          <a
            href="https://github.com/ClankLabs/Clank"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-[var(--accent)]" />
            <div>
              <p className="text-sm font-medium text-[var(--text)]">GitHub</p>
              <p className="text-xs text-[var(--text-muted)]">Source code & releases</p>
            </div>
          </a>
          <a
            href="https://github.com/ClankLabs/Clank/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] transition-colors"
          >
            <Globe className="w-4 h-4 text-[var(--accent)]" />
            <div>
              <p className="text-sm font-medium text-[var(--text)]">Changelog</p>
              <p className="text-xs text-[var(--text-muted)]">What&apos;s new in v{VERSIONS.clank}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
