import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Download,
  ExternalLink,
  Cpu,
  Zap,
  Shield,
  BarChart3,
  Terminal,
  Bot,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Wrench — Clank Labs",
  description:
    "Purpose-built agentic AI model. Fine-tuned for tool calling, error recovery, and system prompt following. Scores 72/75 on agentic benchmarks — matching Claude Sonnet. Free to run on your own hardware.",
};

const benchmarks = [
  { category: "Basic Tool Use", score: 15, max: 15 },
  { category: "Multi-Step Tasks", score: 14, max: 15 },
  { category: "Error Recovery", score: 14, max: 15 },
  { category: "Response Quality", score: 15, max: 15 },
  { category: "System Prompt Following", score: 14, max: 15 },
];

const comparisons = [
  { model: "Claude Sonnet 4.5", score: "~73/75", tier: "Frontier" },
  { model: "Wrench v4", score: "72/75", tier: "Clank Labs" },
  { model: "GPT-4o", score: "~70/75", tier: "Frontier" },
  { model: "Base Qwen 3.5 35B", score: "~40/75", tier: "Base" },
];

const features = [
  {
    icon: Zap,
    title: "Purpose-Built for Agents",
    desc: "Fine-tuned specifically for tool calling, multi-step task chains, and error recovery. Not a general chatbot — a coding agent.",
  },
  {
    icon: Cpu,
    title: "3B Active Parameters",
    desc: "Mixture-of-Experts architecture. Only 3B parameters active per inference — runs fast on a single 16GB GPU.",
  },
  {
    icon: Shield,
    title: "Safe by Design",
    desc: "Trained to warn before destructive actions, ask for confirmation, and never hallucinate tool calls that don't exist.",
  },
  {
    icon: BarChart3,
    title: "Sonnet-Tier Performance",
    desc: "72/75 on our agentic benchmark — matching Claude Sonnet 4.5. On hardware you own, for free.",
  },
  {
    icon: Terminal,
    title: "Ollama + llama.cpp",
    desc: "Standard GGUF format. Works with Ollama, llama.cpp, vLLM, LM Studio, or any OpenAI-compatible server.",
  },
  {
    icon: Bot,
    title: "Built for Clank",
    desc: "Drop-in model for the Clank Gateway. Set it as your primary model and go — multi-channel, multi-agent, full tool suite.",
  },
];

export default function WrenchPage() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        {/* Hero */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-[var(--accent)] mb-4">
              Clank Labs Model
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
              Wrench
            </h1>
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-8">
              A purpose-built agentic AI model. Fine-tuned on Qwen3.5-35B-A3B for tool calling,
              error recovery, and system prompt following. Scores{" "}
              <span className="text-[var(--accent)] font-semibold">72/75</span> on
              agentic benchmarks — matching Claude Sonnet.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="https://huggingface.co/ClankLabs/Wrench-35B-A3B-Q4_K_M-GGUF"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-black font-medium hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" />
                Download from HuggingFace
              </a>
              <a
                href="https://github.com/ItsTrag1c/Clank"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text)] hover:border-[var(--border-hover)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Use with Clank
              </a>
            </div>
          </div>
        </section>

        {/* Benchmark Results */}
        <section className="py-16 px-6 border-t border-[var(--border)]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2 text-center">
              Benchmark Results
            </h2>
            <p className="text-sm text-[var(--text-muted)] mb-8 text-center">
              25-prompt agentic evaluation across 5 categories. Scored 0-3 per prompt.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Category scores */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-[var(--text-muted)] mb-3">
                  Wrench v4 — Category Breakdown
                </h3>
                {benchmarks.map((b) => (
                  <div key={b.category}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[var(--text)]">{b.category}</span>
                      <span className="text-[var(--text-muted)]">
                        {b.score}/{b.max}
                      </span>
                    </div>
                    <div className="h-2 bg-[var(--surface)] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--accent)] rounded-full transition-all"
                        style={{ width: `${(b.score / b.max) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
                <div className="pt-2 border-t border-[var(--border)] flex justify-between text-sm font-semibold">
                  <span className="text-[var(--text)]">Total</span>
                  <span className="text-[var(--accent)]">72/75 (96%)</span>
                </div>
              </div>

              {/* Comparison table */}
              <div>
                <h3 className="text-sm font-medium text-[var(--text-muted)] mb-3">
                  vs. Frontier Models
                </h3>
                <div className="border border-[var(--border)] rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[var(--surface)]">
                        <th className="text-left px-4 py-2.5 text-[var(--text-muted)] font-medium">
                          Model
                        </th>
                        <th className="text-right px-4 py-2.5 text-[var(--text-muted)] font-medium">
                          Score
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisons.map((c) => (
                        <tr
                          key={c.model}
                          className={`border-t border-[var(--border)] ${
                            c.model === "Wrench v4" ? "bg-[var(--accent)]/5" : ""
                          }`}
                        >
                          <td className="px-4 py-2.5">
                            <span
                              className={
                                c.model === "Wrench v4"
                                  ? "text-[var(--accent)] font-semibold"
                                  : "text-[var(--text)]"
                              }
                            >
                              {c.model}
                            </span>
                            <span className="text-[var(--text-dim)] ml-2 text-xs">
                              {c.tier}
                            </span>
                          </td>
                          <td
                            className={`text-right px-4 py-2.5 font-mono ${
                              c.model === "Wrench v4"
                                ? "text-[var(--accent)] font-semibold"
                                : "text-[var(--text-muted)]"
                            }`}
                          >
                            {c.score}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-6 border-t border-[var(--border)]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-8 text-center">
              Built Different
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="p-5 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
                >
                  <f.icon className="w-5 h-5 text-[var(--accent)] mb-3" />
                  <h3 className="text-sm font-semibold text-[var(--text)] mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16 px-6 border-t border-[var(--border)]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-8 text-center">
              Quick Start
            </h2>

            <div className="space-y-8">
              {/* Ollama */}
              <div>
                <h3 className="text-sm font-semibold text-[var(--accent)] mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  Option A: Ollama (recommended)
                </h3>
                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 font-mono text-sm text-[var(--text-muted)] space-y-1">
                  <p className="text-[var(--text-dim)]"># Download the GGUF + Modelfile from HuggingFace, then:</p>
                  <p>ollama create wrench -f Modelfile</p>
                  <p>ollama run wrench</p>
                  <p></p>
                  <p className="text-[var(--text-dim)]"># Or use with Clank:</p>
                  <p>npm install -g @tractorscorch/clank</p>
                  <p>clank setup</p>
                  <p className="text-[var(--text-dim)]"># Set primary model to &quot;ollama/wrench&quot; in config</p>
                </div>
              </div>

              {/* llama.cpp */}
              <div>
                <h3 className="text-sm font-semibold text-[var(--accent)] mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  Option B: llama.cpp
                </h3>
                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 font-mono text-sm text-[var(--text-muted)] space-y-1">
                  <p>./llama-server -m wrench-Q4_K_M.gguf -c 8192 -ngl 99</p>
                  <p></p>
                  <p className="text-[var(--text-dim)]"># Serves an OpenAI-compatible API on port 8080</p>
                  <p className="text-[var(--text-dim)]"># Point any app at http://localhost:8080/v1</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Model Card */}
        <section className="py-16 px-6 border-t border-[var(--border)]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-6 text-center">
              Model Details
            </h2>
            <div className="border border-[var(--border)] rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["Base Model", "Qwen3.5-35B-A3B (Alibaba Cloud)"],
                    ["Architecture", "Mixture-of-Experts — 35B total, 3B active per inference"],
                    ["Fine-Tune Method", "LoRA (rank 64, alpha 128) via HuggingFace PEFT"],
                    ["Training Data", "1,113 examples across 15 categories"],
                    ["Quantization", "Q4_K_M GGUF (~20GB)"],
                    ["Context Window", "8,192 tokens"],
                    ["Min GPU", "16GB VRAM (RTX 4060 Ti, RX 7800 XT, etc.)"],
                    ["License", "Apache 2.0"],
                    ["Benchmark", "72/75 (96%) on 25-prompt agentic evaluation"],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-t border-[var(--border)] first:border-t-0">
                      <td className="px-4 py-2.5 text-[var(--text-muted)] font-medium w-1/3">
                        {label}
                      </td>
                      <td className="px-4 py-2.5 text-[var(--text)]">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
