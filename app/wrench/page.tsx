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
    "Purpose-built agentic AI models. Wrench 35B scores 113/120 (Sonnet-tier) on 16GB VRAM. Wrench 8B scores 92/120 on 8GB VRAM. Fine-tuned for tool calling, error recovery, and system prompt following.",
};

const benchmarks35B = [
  { category: "Basic Tool Use", score: 15, max: 15 },
  { category: "Multi-Step Tasks", score: 14, max: 15 },
  { category: "Error Recovery", score: 13, max: 15 },
  { category: "Response Quality", score: 15, max: 15 },
  { category: "System Prompt Following", score: 14, max: 15 },
  { category: "Planning & Reasoning", score: 14, max: 15 },
  { category: "Tool Format Correctness", score: 13, max: 15 },
  { category: "Safety & Restraint", score: 15, max: 15 },
];

const benchmarks8B = [
  { category: "Basic Tool Use", score: 13, max: 15 },
  { category: "Multi-Step Tasks", score: 13, max: 15 },
  { category: "Error Recovery", score: 11, max: 15 },
  { category: "Response Quality", score: 10, max: 15 },
  { category: "System Prompt Following", score: 9, max: 15 },
  { category: "Planning & Reasoning", score: 7, max: 15 },
  { category: "Tool Format Correctness", score: 14, max: 15 },
  { category: "Safety & Restraint", score: 15, max: 15 },
];

const comparisons = [
  { model: "Claude Sonnet", score: "~114/120", tier: "Frontier" },
  { model: "Wrench 35B", score: "113/120", tier: "Clank Labs" },
  { model: "GPT-4o", score: "~110/120", tier: "Frontier" },
  { model: "Wrench 8B", score: "92/120", tier: "Clank Labs" },
  { model: "Base Qwen 3.5 35B", score: "~60/120", tier: "Base" },
];

const features = [
  {
    icon: Zap,
    title: "Purpose-Built for Agents",
    desc: "Fine-tuned specifically for tool calling, multi-step task chains, and error recovery. Not a general chatbot — a coding agent.",
  },
  {
    icon: Cpu,
    title: "Two Sizes",
    desc: "35B MoE (3B active, 16GB VRAM) for maximum capability. 8B dense (~5GB GGUF, 8GB VRAM) for lighter hardware.",
  },
  {
    icon: Shield,
    title: "Safe by Design",
    desc: "Trained to warn before destructive actions, ask for confirmation, and never hallucinate tool calls that don't exist.",
  },
  {
    icon: BarChart3,
    title: "Proven Performance",
    desc: "35B scores 113/120 (Sonnet-tier). 8B scores 92/120 with perfect safety. On hardware you own, for free.",
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
              Purpose-built agentic AI models. Fine-tuned for tool calling,
              error recovery, and system prompt following. The{" "}
              <span className="text-[var(--accent)] font-semibold">35B</span> scores
              113/120 (Sonnet-tier) on 16GB VRAM. The{" "}
              <span className="text-[var(--accent)] font-semibold">8B</span> scores
              92/120 on 8GB VRAM.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="https://huggingface.co/ClankLabs/Wrench-35B-A3B-Q4_K_M-GGUF"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-black font-medium hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" />
                35B on HuggingFace
              </a>
              <a
                href="https://huggingface.co/ClankLabs/Wrench-8B-Q4_K_M-GGUF"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-black font-medium hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" />
                8B on HuggingFace
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
              <a
                href="https://github.com/ItsTrag1c/wrench-training-data"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text)] hover:border-[var(--border-hover)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Training Data
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
              40-prompt agentic evaluation across 8 categories. Scored 0-3 per prompt.
            </p>

            {/* Category scores — both models */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* 35B scores */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-[var(--text-muted)] mb-3">
                  Wrench 35B — Category Breakdown
                </h3>
                {benchmarks35B.map((b) => (
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
                  <span className="text-[var(--accent)]">113/120 (94%)</span>
                </div>
              </div>

              {/* 8B scores */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-[var(--text-muted)] mb-3">
                  Wrench 8B — Category Breakdown
                </h3>
                {benchmarks8B.map((b) => (
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
                  <span className="text-[var(--accent)]">92/120 (76.7%)</span>
                </div>
              </div>
            </div>

            {/* Comparison table */}
            <div className="max-w-md mx-auto">
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
                          c.model.startsWith("Wrench") ? "bg-[var(--accent)]/5" : ""
                        }`}
                      >
                        <td className="px-4 py-2.5">
                          <span
                            className={
                              c.model.startsWith("Wrench")
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
                            c.model.startsWith("Wrench")
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
                  <p className="text-[var(--text-dim)]"># For the 8B model:</p>
                  <p>ollama create wrench-8b -f Modelfile</p>
                  <p>ollama run wrench-8b</p>
                  <p></p>
                  <p className="text-[var(--text-dim)]"># Or use with Clank:</p>
                  <p>npm install -g @tractorscorch/clank</p>
                  <p>clank setup</p>
                  <p className="text-[var(--text-dim)]"># Set primary model to &quot;ollama/wrench&quot; or &quot;ollama/wrench-8b&quot; in config</p>
                </div>
              </div>

              {/* llama.cpp */}
              <div>
                <h3 className="text-sm font-semibold text-[var(--accent)] mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  Option B: llama.cpp
                </h3>
                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 font-mono text-sm text-[var(--text-muted)] space-y-1">
                  <p className="text-[var(--text-dim)]"># 35B model:</p>
                  <p>./llama-server -m Wrench-35B-A3B-Q4_K_M-GGUF.gguf -c 8192 -ngl 99</p>
                  <p></p>
                  <p className="text-[var(--text-dim)]"># 8B model:</p>
                  <p>./llama-server -m Wrench-8B-Q4_K_M-GGUF.gguf -c 8192 -ngl 99</p>
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
            <div className="grid md:grid-cols-2 gap-6">
              {/* 35B card */}
              <div>
                <h3 className="text-sm font-medium text-[var(--accent)] mb-3">Wrench 35B</h3>
                <div className="border border-[var(--border)] rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {[
                        ["Base Model", "Qwen3.5-35B-A3B"],
                        ["Architecture", "MoE — 35B total, 3B active"],
                        ["Fine-Tune", "LoRA (rank 64, alpha 128)"],
                        ["Training Data", "1,147 examples, 15 categories"],
                        ["Quantization", "Q4_K_M GGUF (~20GB)"],
                        ["Context Window", "8,192 tokens"],
                        ["Min GPU", "16GB VRAM"],
                        ["Benchmark", "113/120 (94%)"],
                        ["License", "Apache 2.0"],
                      ].map(([label, value]) => (
                        <tr key={label} className="border-t border-[var(--border)] first:border-t-0">
                          <td className="px-4 py-2.5 text-[var(--text-muted)] font-medium w-2/5">
                            {label}
                          </td>
                          <td className="px-4 py-2.5 text-[var(--text)]">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 8B card */}
              <div>
                <h3 className="text-sm font-medium text-[var(--accent)] mb-3">Wrench 8B</h3>
                <div className="border border-[var(--border)] rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {[
                        ["Base Model", "Qwen3-8B"],
                        ["Architecture", "Dense — 8B parameters"],
                        ["Fine-Tune", "LoRA (rank 64, alpha 128)"],
                        ["Training Data", "1,147 examples, 15 categories"],
                        ["Quantization", "Q4_K_M GGUF (~5GB)"],
                        ["Context Window", "8,192 tokens"],
                        ["Min GPU", "8GB VRAM"],
                        ["Benchmark", "92/120 (76.7%)"],
                        ["License", "Apache 2.0"],
                      ].map(([label, value]) => (
                        <tr key={label} className="border-t border-[var(--border)] first:border-t-0">
                          <td className="px-4 py-2.5 text-[var(--text-muted)] font-medium w-2/5">
                            {label}
                          </td>
                          <td className="px-4 py-2.5 text-[var(--text)]">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
