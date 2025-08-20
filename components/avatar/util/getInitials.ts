export function getInitials(name?: string, explicit?: string) {
  if (explicit) return explicit;
  if (!name) return "";
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase());
  return parts.join("");
}