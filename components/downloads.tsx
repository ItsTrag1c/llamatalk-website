"use client";

import { Download } from "lucide-react";
import { APP_DATA, VERSIONS, getDownloadUrl, type AppKey } from "@/lib/versions";

export function Downloads() {
  return (
    <section className="py-20 px-6 border-t border-[var(--border)]" id="download">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Download</h2>
        <p className="text-[var(--text-muted)] text-sm mb-10">
          Windows only. All downloads include SHA-256 checksums.
        </p>

        <div className="space-y-3">
          {(["build", "chat", "cli"] as AppKey[]).map((key) => (
            <DownloadRow key={key} appKey={key} />
          ))}
        </div>

        <p className="mt-6 text-xs text-[var(--text-dim)]">
          macOS and Linux support is planned. For now, you can build from source on GitHub.
        </p>
      </div>
    </section>
  );
}

function DownloadRow({ appKey }: { appKey: AppKey }) {
  const app = APP_DATA[appKey];
  const version = VERSIONS[appKey];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <h3 className="font-medium text-sm text-[var(--text)]">{app.name}</h3>
          <span className="text-xs font-mono text-[var(--text-dim)]">v{version}</span>
        </div>
        <p className="text-xs text-[var(--text-muted)]">{app.tagline}</p>
      </div>

      <div className="flex gap-2 shrink-0">
        <a
          href={getDownloadUrl(appKey, "installer")}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-md bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          Installer
        </a>
        <a
          href={getDownloadUrl(appKey, "standalone")}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-md border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
        >
          Standalone
        </a>
      </div>
    </div>
  );
}
