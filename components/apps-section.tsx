"use client";

import { Monitor, Terminal, Download, ExternalLink, Bot, FileCode, Brain, ShieldCheck, Send, Sparkles, Server } from "lucide-react";
import { APP_DATA, VERSIONS, getDownloadUrl } from "@/lib/versions";

export function AppsSection() {
  const highlights = [
    { icon: Bot, label: "ReAct Agent", desc: "Iterative reason-and-act loop with streaming tool calls" },
    { icon: Sparkles, label: "Self-Learning", desc: "Learns your preferences and patterns across sessions" },
    { icon: Send, label: "Telegram Bot", desc: "Chat with Clank from your phone via Telegram" },
    { icon: FileCode, label: "14 Built-in Tools", desc: "File I/O, bash, git, search, web fetch, and more" },
    { icon: Brain, label: "Project Memory", desc: "Persistent memory across sessions, per-project context" },
    { icon: ShieldCheck, label: "3-Tier Safety", desc: "Tools classified Low, Medium, or High risk" },
  ];

  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-5xl mx-auto">
        {/* Unified intro */}
        <h2 className="text-2xl font-bold mb-2">Meet Clank</h2>
        <p className="text-[var(--text-muted)] text-sm mb-8 max-w-2xl">
          Clank is an agentic assistant powered by local models and cloud providers.
          It uses a ReAct loop with 14 built-in tools to read, write, and execute —
          learning your preferences and project context along the way.
        </p>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-14">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div key={h.label} className="flex items-start gap-3 p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
                <Icon className="w-4 h-4 text-[var(--accent)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-medium text-[var(--text)]">{h.label}</p>
                  <p className="text-xs text-[var(--text-muted)]">{h.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Two interfaces */}
        <h3 className="text-lg font-semibold mb-2">The Suite</h3>
        <p className="text-[var(--text-muted)] text-sm mb-6">
          Agentic tools for developers and homelabbers. Pick the experience that fits your workflow.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Terminal (CLI) */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--text)]">Terminal</h4>
                <span className="text-xs font-mono text-[var(--text-dim)]">v{VERSIONS.cli}</span>
              </div>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
              Lightweight and fast. Run Clank directly from your terminal with full access to all tools and modes.
            </p>
            <div className="flex gap-2">
              <a
                href={getDownloadUrl("cli")}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CLI
              </a>
              <a
                href={`https://github.com/${APP_DATA.cli.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm rounded-lg border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Desktop (GUI) */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)] flex items-center justify-center">
                <Monitor className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--text)]">Desktop</h4>
                <span className="text-xs font-mono text-[var(--text-dim)]">v{VERSIONS.desktop}</span>
              </div>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
              A visual interface with agent management, a home dashboard, and onboarding — same agent under the hood.
            </p>
            <div className="flex gap-2">
              <a
                href={getDownloadUrl("desktop")}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Desktop
              </a>
              <a
                href={`https://github.com/${APP_DATA.desktop.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm rounded-lg border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Home Lab Autopilot */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[rgba(88,166,255,0.1)] border border-[rgba(88,166,255,0.2)] flex items-center justify-center">
                <Server className="w-5 h-5 text-[#58a6ff]" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--text)]">Autopilot</h4>
                <span className="text-xs font-mono text-[var(--text-dim)]">v{VERSIONS.autopilot}</span>
              </div>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
              Manage your homelab with natural language. Proxmox, TrueNAS, Docker, and Home Assistant — just ask.
            </p>
            <div className="flex gap-2">
              <a
                href="/autopilot"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-colors"
              >
                Learn More
              </a>
              <a
                href={`https://github.com/${APP_DATA.autopilot.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm rounded-lg border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
