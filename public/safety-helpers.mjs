const ESCAPES = {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};

export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ESCAPES[character]);
}

export function safeHttpUrl(input) {
  try {
    const url = new URL(input);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : '#';
  } catch {
    return '#';
  }
}
