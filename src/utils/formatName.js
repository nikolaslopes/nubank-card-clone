export function formatName(name) {
  return name
    .replace(/[^a-zA-Z ]/, '')
    .replaceAll(/\s{2}/g, '');
}
