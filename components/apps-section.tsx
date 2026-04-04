"use client";

import { Globe, Terminal, Send, MessageSquare, Layout, ExternalLink, Bot, Brain, ShieldCheck, Sparkles, Plug } from "lucide-react";
import { VERSIONS } from "@/lib/versions";

export function AppsSection() {
  const highlights = [
    { icon: Bot, label: "Multi-Agent", desc: "Named agents with separate models, workspaces, and routing" },
    { icon: Sparkles, label: "Self-Configuring", desc: "Tell your agent to add Telegram, switch models, create cron jobs" },
    { icon: Send, label: "Multi-Channel", desc: "CLI, TUI, Web UI, Telegram, Discord — all equal interfaces" },
    { icon: Layout, label: "Web Dashboard", desc: "8-panel control UI — Chat, Agents, Sessions, Config, Cron, Logs" },
    { icon: Brain, label: "Memory + Context", desc: "TF-IDF memory with decay, aggressive compaction for local models" },
    { icon: Plug, label: "Plugin System", desc: "Extend with custom tools, channels, and providers — 25+ hook types" },
  ];

  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">One Harness, Many Frontends</h2>
        <p className="text-[var(--text-muted)] text-sm mb-8 max-w-2xl">
          Clank is a single daemon that connects all your interfaces to AI agents.
          Start the harness once — Telegram stays alive in the background while you
          use CLI, browser, or TUI on demand. Everything shares sessions and memory.
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

        {/* The Lab */}
        <h3 className="text-lg font-semibold mb-2">The Lab</h3>
        <p className="text-[var(--text-muted)] text-sm mb-6">
          AI tools and models for developers. Local-first, open source, Apache 2.0.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Clank Gateway */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--text)]">Clank</h4>
                <span className="text-xs font-mono text-[var(--text-dim)]">v{VERSIONS.clank}</span>
              </div>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
              AI agent harness — one daemon powering CLI, TUI, Web UI, Telegram, and Discord.
              Multi-agent, 25 tools, self-configuring through conversation. Optimized for
              local models on consumer hardware.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {["Harness", "Multi-Agent", "Telegram", "Web UI", "25 Tools", "Plugins"].map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.15)] text-[var(--accent)]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <a
                href="https://github.com/ClankLabs/Clank"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-colors"
              >
                Get Started
              </a>
              <a
                href="https://github.com/ClankLabs/Clank"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm rounded-lg border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Wrench Model */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)] flex items-center justify-center">
                <Brain className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--text)]">Wrench</h4>
                <span className="text-xs font-mono text-[var(--text-dim)]">35B &amp; 9B</span>
              </div>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
              Purpose-built agentic models. 35B scores 118/120 on our benchmark + 82% on BFCL (16GB VRAM).
              9B scores 114/120 (8GB VRAM). Fine-tuned for tool calling, error recovery,
              and system prompt following.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {["35B MoE", "9B Dense", "8–16GB VRAM", "GGUF", "Apache 2.0"].map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.15)] text-[var(--accent)]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <a
                href="/wrench"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-colors"
              >
                Learn More
              </a>
              <a
                href="https://huggingface.co/ClankLabs/Wrench-35B-A3B-Q4_K_M-GGUF"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm rounded-lg border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                HuggingFace
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
