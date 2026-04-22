export const VERSIONS = {
  clank: "1.12.2",
} as const;

export type AppKey = keyof typeof VERSIONS;

export const APP_DATA = {
  clank: {
    name: "Clank",
    tagline: "Local-first AI agent harness",
    description: "A personal AI harness - one daemon, many frontends. Multi-agent, multi-channel, optimized for local models.",
    color: "build",
    github: "ClankLabs/Clank",
    features: ["Multi-Agent", "Multi-Channel", "Local-First", "Harness", "Plugins"],
  },
} as const;

export function getDownloadUrl(app: AppKey): string {
  const repo = APP_DATA[app].github;
  return `https://github.com/${repo}`;
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
