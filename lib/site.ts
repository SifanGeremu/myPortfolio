/** Vercel fills these in at deploy time. Until then, links stay on localhost. */
export function siteOrigin(): string {
  const host = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (host) return `https://${host}`;
  return "http://localhost:3000";
}

export function allowIndexing(): boolean {
  return process.env.VERCEL_ENV !== "preview";
}
