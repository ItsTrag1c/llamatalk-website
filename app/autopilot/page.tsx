import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { APP_DATA, VERSIONS } from "@/lib/versions";
import {
  Download,
  ExternalLink,
  Server,
  HardDrive,
  Container,
  Home,
  MessageSquare,
  BarChart3,
  Shield,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Home Lab Autopilot — Clank Suite",
  description:
    "AI-powered natural language interface for managing your homelab infrastructure. Control Proxmox, TrueNAS, Docker, and Home Assistant with plain English.",
};

const integrations = [
  {
    icon: Server,
    name: "Proxmox VE",
    desc: "VM/container status, start/stop, snapshots, resource usage",
  },
  {
    icon: HardDrive,
    name: "TrueNAS Scale",
    desc: "Storage pools, datasets, SMART health, replication status",
  },
  {
    icon: Container,
    name: "Docker",
    desc: "Container list, logs, stats, images, networks",
  },
  {
    icon: Home,
    name: "Home Assistant",
    desc: "Entity states, automations, lights, switches, sensors",
  },
];

const features = [
  {
    icon: MessageSquare,
    title: "Natural Language",
    desc: 'Issue commands in plain English. "Show me all running VMs" just works.',
  },
  {
    icon: BarChart3,
    title: "Live Dashboard",
    desc: "Real-time overview of all connected systems with resource metrics at a glance.",
  },
  {
    icon: Shield,
    title: "100% Local",
    desc: "No cloud services, no telemetry. Credentials and data stay on your machine.",
  },
  {
    icon: Cpu,
    title: "Cross-Platform",
    desc: "Desktop app for Windows and macOS. Electron-based with auto-updates.",
  },
];

const examples = [
  "Show me all running VMs",
  "What's the storage usage on TrueNAS?",
  "Start my Plex container",
  "Show CPU usage across all hosts",
  "Turn on the living room lights",
  "List all Docker images",
];

export default function AutopilotPage() {
  const app = APP_DATA.autopilot;

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[rgba(88,166,255,0.1)] border border-[rgba(88,166,255,0.2)] flex items-center justify-center">
              <Server className="w-6 h-6 text-[#58a6ff]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[var(--text)]">
                {app.name}
              </h1>
              <span className="text-xs font-mono text-[var(--text-dim)]">
                v{VERSIONS.autopilot}
              </span>
            </div>
          </div>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl leading-relaxed mb-6">
            {app.description}
          </p>
          <div className="flex gap-3">
            <a
              href={`https://github.com/${app.github}/releases/latest`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
            <a
              href={`https://github.com/${app.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface)] text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>

        {/* System Integrations */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-2">System Integrations</h2>
          <p className="text-sm text-[var(--text-muted)] mb-6">
            Connect to the systems that power your homelab.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {integrations.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.name}
                  className="flex items-start gap-3 p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
                >
                  <Icon className="w-5 h-5 text-[#58a6ff] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-[var(--text)]">
                      {s.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-2">Features</h2>
          <p className="text-sm text-[var(--text-muted)] mb-6">
            Built for homelabbers who want to manage, not memorize.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
                >
                  <Icon className="w-4 h-4 text-[var(--accent)] mb-3" />
                  <h3 className="text-sm font-medium text-[var(--text)] mb-1">
                    {f.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Example Commands */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-2">Just Ask</h2>
          <p className="text-sm text-[var(--text-muted)] mb-6">
            No more memorizing CLI commands. Talk to your infrastructure.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {examples.map((cmd) => (
              <div
                key={cmd}
                className="px-4 py-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] font-mono text-xs text-[var(--text-muted)]"
              >
                <span className="text-[#58a6ff] mr-2">&gt;</span>
                {cmd}
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-xl font-bold mb-2">Tech Stack</h2>
          <p className="text-sm text-[var(--text-muted)] mb-6">
            Modern, open-source, and built for privacy.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js 15",
              "React 18",
              "Electron",
              "Express.js",
              "TypeScript",
              "MIT License",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-mono rounded-md border border-[var(--border)] text-[var(--text-dim)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
