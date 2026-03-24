import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clank — Documentation",
  description: "Installation guide, user guide, and reference documentation for Clank.",
};

export default function DocsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-3xl font-bold text-[var(--text)] mb-2">Documentation</h1>
        <p className="text-[var(--text-muted)] mb-10">Everything you need to install, configure, and use Clank.</p>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <DocCard
            title="Install Guide"
            description="Install Clank, set up local models, configure cloud providers, connect Telegram and Discord."
            href="https://github.com/ItsTrag1c/Clank/blob/main/docs/INSTALL.md"
            icon="📦"
          />
          <DocCard
            title="User Guide"
            description="Day-to-day usage — agents, sub-agents, background tasks, Telegram commands, configuration reference."
            href="https://github.com/ItsTrag1c/Clank/blob/main/docs/USER_GUIDE.md"
            icon="📖"
          />
          <DocCard
            title="Changelog"
            description="Complete release history with every feature, fix, and improvement."
            href="https://github.com/ItsTrag1c/Clank/blob/main/CHANGELOG.md"
            icon="📋"
          />
          <DocCard
            title="Security Policy"
            description="Security model, reporting vulnerabilities, and what to expect from Clank's access model."
            href="https://github.com/ItsTrag1c/Clank/blob/main/SECURITY.md"
            icon="🔒"
          />
        </div>

        <Section title="Quick Start">
          <CodeBlock>{`npm install -g @tractorscorch/clank
clank setup
clank`}</CodeBlock>
          <p className="text-[var(--text-muted)] mt-3 text-sm">
            Setup auto-detects your local models, configures the gateway, and gets you chatting in under 2 minutes.
          </p>
        </Section>

        <Section title="Providers">
          <p className="text-[var(--text-muted)] mb-4 text-sm">Clank supports 8 providers. Mix and match for different agents.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left py-2 text-[var(--text-muted)] font-medium">Provider</th>
                  <th className="text-left py-2 text-[var(--text-muted)] font-medium">Example Model</th>
                  <th className="text-left py-2 text-[var(--text-muted)] font-medium">Auth</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text)]">
                <ProviderRow provider="Ollama" model="ollama/qwen3.5" auth="Local" />
                <ProviderRow provider="Anthropic" model="anthropic/claude-sonnet-4-6" auth="API Key" />
                <ProviderRow provider="OpenAI" model="openai/gpt-4o" auth="API Key" />
                <ProviderRow provider="Google" model="google/gemini-2.0-flash" auth="API Key" />
                <ProviderRow provider="OpenRouter" model="openrouter/meta-llama/llama-3.1-70b" auth="API Key" />
                <ProviderRow provider="OpenCode" model="opencode/claude-sonnet-4-6" auth="API Key" />
                <ProviderRow provider="Codex" model="codex/codex-mini-latest" auth="OAuth" />
                <ProviderRow provider="llama.cpp" model="llamacpp/model-name" auth="Local" />
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Telegram Commands">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left py-2 text-[var(--text-muted)] font-medium">Command</th>
                  <th className="text-left py-2 text-[var(--text-muted)] font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text)]">
                <CmdRow cmd="/new" desc="Start a fresh session" />
                <CmdRow cmd="/reset" desc="Clear session history" />
                <CmdRow cmd="/status" desc="Agent, model, tasks, uptime" />
                <CmdRow cmd="/agents" desc="List agents with models" />
                <CmdRow cmd="/agent <name>" desc="Switch agent" />
                <CmdRow cmd="/tasks" desc="Show background tasks" />
                <CmdRow cmd="/kill <id>" desc="Kill a task" />
                <CmdRow cmd="/killall" desc="Kill all tasks" />
                <CmdRow cmd="/think" desc="Toggle thinking display" />
                <CmdRow cmd="/model" desc="Show model + fallbacks" />
                <CmdRow cmd="/version" desc="Show version" />
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="CLI Reference">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left py-2 text-[var(--text-muted)] font-medium">Command</th>
                  <th className="text-left py-2 text-[var(--text-muted)] font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text)]">
                <CmdRow cmd="clank" desc="Start gateway + TUI" />
                <CmdRow cmd="clank chat" desc="Direct CLI chat" />
                <CmdRow cmd="clank dashboard" desc="Open Web UI" />
                <CmdRow cmd="clank setup" desc="Run setup wizard" />
                <CmdRow cmd="clank gateway start|stop|restart" desc="Manage gateway" />
                <CmdRow cmd="clank auth login|status|logout" desc="OAuth credentials" />
                <CmdRow cmd="clank models list" desc="List models" />
                <CmdRow cmd="clank agents list" desc="List agents" />
                <CmdRow cmd="clank daemon install|uninstall" desc="System service" />
                <CmdRow cmd="clank fix" desc="Run diagnostics" />
                <CmdRow cmd="clank update" desc="Update Clank" />
              </tbody>
            </table>
          </div>
        </Section>

      </div>
      <Footer />
    </main>
  );
}

function DocCard({ title, description, href, icon }: { title: string; description: string; href: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--text-muted)] transition-colors"
    >
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="font-semibold text-[var(--text)] mb-1">{title}</h3>
      <p className="text-sm text-[var(--text-muted)]">{description}</p>
    </a>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-[var(--text)] mb-4">{title}</h2>
      {children}
    </section>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 overflow-x-auto text-sm text-[var(--text)]">
      <code>{children}</code>
    </pre>
  );
}

function ProviderRow({ provider, model, auth }: { provider: string; model: string; auth: string }) {
  return (
    <tr className="border-b border-[var(--border)]">
      <td className="py-2 font-medium">{provider}</td>
      <td className="py-2"><code className="text-xs bg-[var(--surface)] px-1.5 py-0.5 rounded">{model}</code></td>
      <td className="py-2 text-[var(--text-muted)]">{auth}</td>
    </tr>
  );
}

function CmdRow({ cmd, desc }: { cmd: string; desc: string }) {
  return (
    <tr className="border-b border-[var(--border)]">
      <td className="py-2"><code className="text-xs bg-[var(--surface)] px-1.5 py-0.5 rounded">{cmd}</code></td>
      <td className="py-2 text-[var(--text-muted)]">{desc}</td>
    </tr>
  );
}
