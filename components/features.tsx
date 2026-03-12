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
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Self-Learning",
    description: "The agent learns your preferences, patterns, and mistakes across sessions.",
  },
  {
    icon: Send,
    title: "Telegram Bot",
    description: "Chat with the Build agent from your phone. All tools work, streaming via message edits.",
  },
  {
    icon: Server,
    title: "Multi-Server",
    description: "Connect to multiple local endpoints. Models auto-aggregate from different sources.",
  },
  {
    icon: Zap,
    title: "Streaming",
    description: "Token-by-token responses with live TK/S counter.",
  },
  {
    icon: Shield,
    title: "Zero Telemetry",
    description: "No analytics, no tracking, no cloud dependency. Your data stays local.",
  },
  {
    icon: Lock,
    title: "PIN + Encryption",
    description: "PBKDF2 key derivation with AES-256-GCM encryption at rest.",
  },
  {
    icon: Cpu,
    title: "8 Providers",
    description: "Ollama, llama.cpp, LM Studio, vLLM, Claude, Gemini, OpenAI, and more.",
  },
  {
    icon: GitBranch,
    title: "Git Aware",
    description: "Native git operations with safety checks. The Build agent understands your repo.",
  },
  {
    icon: Terminal,
    title: "14 Built-in Tools",
    description: "File I/O, bash, search, install, web fetch, package management, and more.",
  },
];

export function Features() {
  return (
    <section className="py-20 px-6 border-t border-[var(--border)]" id="features">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Features</h2>
        <p className="text-[var(--text-muted)] text-sm mb-10">
          Built for privacy and power. Your AI, your data, your control.
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
