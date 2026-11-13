import { site } from "./site";

// Email clients ignore external CSS and CSS variables, so the Paper and Ember
// tokens from DESIGN.md are repeated here as literal values. Light is inline;
// the <style> block swaps in the dark tokens for clients that honour
// prefers-color-scheme.
const c = {
  bg: "#FAF9F6",
  line: "#E4E1DA",
  lineStrong: "#B9B5AE",
  muted: "#6B6862",
  fg: "#1A1917",
  accent: "#C8431A",
};

const sans =
  "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";
const mono =
  "'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

export const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const label = (text) =>
  `<div class="muted" style="font-family:${mono};font-size:12px;line-height:1.4;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:${c.muted};">${escapeHtml(text)}</div>`;

// Shared frame: wordmark, strong top rule, content, hairline footer.
function layout({ preheader, title, body }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>${escapeHtml(title)}</title>
<style>
  @media (prefers-color-scheme: dark) {
    .bg { background-color: #0E0E0D !important; }
    .fg { color: #F2F0EB !important; }
    .muted { color: #8F8B84 !important; }
    .accent { color: #FF7A4D !important; }
    .rule-strong { border-top-color: #474641 !important; }
    .rule { border-top-color: #262623 !important; }
  }
  @media only screen and (max-width: 480px) {
    .pad { padding-left: 24px !important; padding-right: 24px !important; }
  }
</style>
</head>
<body class="bg" style="margin:0;padding:0;background-color:${c.bg};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="bg" style="background-color:${c.bg};">
<tr><td align="center" class="pad" style="padding:48px 24px;">
  <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:560px;">
    <tr><td class="fg" style="padding-bottom:24px;font-family:${sans};font-size:15px;font-weight:600;letter-spacing:-0.01em;color:${c.fg};">${escapeHtml(site.name)}</td></tr>
    <tr><td class="rule-strong" style="border-top:1px solid ${c.lineStrong};padding-top:32px;font-family:${sans};color:${c.fg};">
      ${body}
    </td></tr>
    <tr><td class="rule" style="border-top:1px solid ${c.line};padding-top:20px;font-family:${sans};font-size:14px;line-height:1.5;color:${c.muted};">
      <a href="${site.url}" class="accent" style="color:${c.accent};text-decoration:underline;text-underline-offset:4px;">${site.url.replace("https://", "")}</a>
    </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`;
}

const heading = (text) =>
  `<h1 class="fg" style="margin:0 0 20px;font-family:${sans};font-size:32px;line-height:1.1;font-weight:600;letter-spacing:-0.025em;color:${c.fg};">${text}</h1>`;

const paragraph = (text) =>
  `<p class="fg" style="margin:0 0 20px;font-family:${sans};font-size:16px;line-height:1.65;color:${c.fg};">${text}</p>`;

export function confirmationEmail({ firstname, service }) {
  const body = [
    heading(`Thanks, ${escapeHtml(firstname)}.`),
    paragraph(
      `I got your message about <strong style="font-weight:600;">${escapeHtml(service)}</strong>. I read everything that comes in and will reply personally, usually within a couple of days.`
    ),
    paragraph("Talk soon,<br>Niket Chawla"),
    `<div style="height:16px;line-height:16px;">&nbsp;</div>`,
  ].join("");

  return layout({
    preheader: "Your message arrived. I'll reply soon.",
    title: "Thanks for getting in touch",
    body,
  });
}

export function notificationEmail({ firstname, lastname, email, phone, service, message }) {
  const row = (name, value, href) => `
      <tr><td class="rule" style="border-top:1px solid ${c.line};padding:16px 0;">
        ${label(name)}
        <div class="fg" style="padding-top:6px;font-family:${sans};font-size:16px;line-height:1.5;color:${c.fg};">${
          href
            ? `<a href="${href}" class="accent" style="color:${c.accent};text-decoration:underline;text-underline-offset:4px;">${escapeHtml(value)}</a>`
            : escapeHtml(value)
        }</div>
      </td></tr>`;

  const safeEmail = escapeHtml(email);
  const rows = [
    row("Name", `${firstname} ${lastname}`.trim()),
    row("Email", email, `mailto:${safeEmail}`),
    phone ? row("Phone", phone, `tel:${escapeHtml(String(phone).replace(/[^\d+]/g, ""))}`) : "",
    row("Service", service),
  ].join("");

  const body = `
    ${heading("New message")}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${rows}
      <tr><td class="rule" style="border-top:1px solid ${c.line};padding:16px 0 0;">
        ${label("Message")}
        <div class="fg" style="padding-top:6px;font-family:${sans};font-size:16px;line-height:1.65;color:${c.fg};white-space:pre-wrap;">${escapeHtml(message)}</div>
      </td></tr>
    </table>
    <div style="height:32px;line-height:32px;">&nbsp;</div>`;

  return layout({
    preheader: `${firstname} ${lastname} wrote about ${service}`,
    title: "New contact form submission",
    body,
  });
}
