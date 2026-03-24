export const VERSIONS = {
  clank: "1.7.1",
  autopilot: "0.3.0",
  // Legacy (archived)
  cli: "2.7.0",
  desktop: "2.6.1",
} as const;

export type AppKey = keyof typeof VERSIONS;

export const APP_DATA = {
  clank: {
    name: "Clank",
    tagline: "Local-first AI agent gateway",
    description: "A personal AI gateway — one daemon, many frontends. Multi-agent, multi-channel (CLI, Web, Telegram, Discord), optimized for local models. Open-source alternative to OpenClaw.",
    color: "build",
    github: "ItsTrag1c/Clank",
    features: ["Multi-Agent", "Multi-Channel", "Local-First", "Gateway", "Plugins"],
  },
  autopilot: {
    name: "Home Lab Autopilot",
    tagline: "Natural language interface for your homelab",
    description: "AI-powered homelab management. Control Proxmox, TrueNAS, Docker, and Home Assistant with plain English. No more memorizing CLI commands — just ask.",
    color: "build",
    github: "ItsTrag1c/homelab-autopilot",
    features: ["Proxmox VE", "TrueNAS", "Docker", "Home Assistant", "Natural Language"],
  },
  // Legacy (archived — kept for backward compat with existing download links)
  cli: {
    name: "Clank CLI (Legacy)",
    tagline: "Archived — replaced by Clank Gateway",
    description: "The original Clank CLI agent. Archived March 2026. Use the new Clank gateway instead.",
    color: "build",
    github: "ItsTrag1c/Clank-Legacy",
    features: ["Archived"],
  },
  desktop: {
    name: "Clank Desktop (Legacy)",
    tagline: "Archived — replaced by Clank Gateway",
    description: "The original Clank Desktop app. Archived March 2026. Use the new Clank gateway instead.",
    color: "build",
    github: "ItsTrag1c/Clank-Legacy",
    features: ["Archived"],
  },
} as const;

export function getDownloadUrl(app: AppKey, type: "installer" | "standalone" = "installer", platform: "windows" | "mac" = "windows"): string {
  const version = VERSIONS[app];
  const repo = APP_DATA[app].github;

  // Clank Gateway — npm install for now, binary releases later
  if (app === "clank") {
    return `https://github.com/${repo}`;
  }

  // Legacy entries point to Clank-Legacy releases
  const releaseTag = `v${app === "desktop" ? VERSIONS.cli : version}`;
  const base = `https://github.com/ItsTrag1c/Clank-Legacy/releases/download/${releaseTag}`;

  if (app === "desktop") {
    if (platform === "mac") {
      return `${base}/Clank.Desktop_${version}_aarch64.dmg`;
    }
    return `${base}/Clank.Desktop_${version}_x64-setup.exe`;
  }

  if (app === "autopilot") {
    const autopilotBase = `https://github.com/${repo}/releases/download/v${version}`;
    return `${autopilotBase}/Home_Lab_Autopilot_${version}_setup.exe`;
  }

  if (platform === "mac") {
    return `${base}/Clank`;
  }

  return type === "installer"
    ? `${base}/Clank_${version}_setup.exe`
    : `${base}/Clank_${version}.exe`;
}

export async function fetchLatestVersion(repo: string): Promise<string | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.tag_name?.replace("v", "");
  } catch {
    return null;
  }
}
