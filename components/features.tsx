import {
  Server,
  Zap,
  Shield,
  Lock,
  Cpu,
  GitBranch,
  Terminal,
  Send,
  Sparkles,
  Layout,
} from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Harness Architecture",
    description: "Single daemon, multiple frontends. Telegram stays alive while you use CLI or browser.",
  },
  {
    icon: Sparkles,
    title: "Self-Configuring",
    description: "After setup, configure everything through conversation. The agent modifies its own config.",
  },
  {
    icon: Send,
    title: "Multi-Channel",
    description: "CLI, TUI, Web UI, Telegram, Discord — all equal interfaces sharing sessions.",
  },
  {
    icon: Layout,
    title: "Web Dashboard",
    description: "8-panel control UI: Chat, Agents, Sessions, Config, Pipelines, Cron, Logs, Channels.",
  },
  {
    icon: Shield,
    title: "Zero Telemetry",
    description: "No analytics, no tracking. API keys redacted from LLM context. SSRF protection.",
  },
  {
    icon: Lock,
    title: "AES-256-GCM",
    description: "Encrypted API keys at rest. PBKDF2 key derivation. Path traversal protection.",
  },
  {
    icon: Cpu,
    title: "Local-First",
    description: "Auto-detects Ollama, LM Studio, llama.cpp, vLLM. Cloud providers optional.",
  },
  {
    icon: GitBranch,
    title: "18 Tools",
    description: "File I/O, bash, git, web search, plus 8 self-config tools for agents to manage themselves.",
  },
  {
    icon: Terminal,
    title: "Optimized for Local",
    description: "Tool tiering, aggressive context compaction, prompt fallback for models without tool calling.",
  },
  {
    icon: Zap,
    title: "Plugins + Hooks",
    description: "Extend with custom tools, channels, and providers. 25+ lifecycle hook points.",
  },
];

export function Features() {
  return (
    <section className="py-20 px-6 border-t border-[var(--border)]" id="features">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Features</h2>
        <p className="text-[var(--text-muted)] text-sm mb-10">
          Built for privacy and power. Your AI, your machine, your rules.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] transition-colors"
              >
                <Icon className="w-4 h-4 text-[var(--accent)] mb-3" />
                <h3 className="text-sm font-medium text-[var(--text)] mb-1">{feature.title}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
