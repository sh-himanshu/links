import { svgIcon } from "./icons";
import { brandColors } from "./brand-colors";
import { links, socialIcons } from "./links";
import data from "./constants";
import type { Data } from "./constants";

function decode(encoded: string): string {
  return atob(encoded);
}

export function renderSocialIcons(): void {
  const container = document.getElementById("socials");
  if (!container) return;

  const frag = document.createDocumentFragment();

  for (const s of socialIcons) {
    const url = data[s.key as keyof Data];
    const a = document.createElement("a");
    a.className = "social-icon";
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.ariaLabel = s.label;
    a.dataset.brand = s.key;
    a.innerHTML = svgIcon(s.icon);

    const bc = brandColors[s.key as keyof typeof brandColors];

    // Apply brand colors by default
    a.style.background = bc.bg;
    a.style.borderColor = bc.bg;
    const svgEl = a.querySelector<SVGElement>("svg");
    if (svgEl) svgEl.style.fill = bc.fg;

    a.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.06)";
    });

    a.addEventListener("mouseleave", function () {
      this.style.transform = "";
    });

    frag.appendChild(a);
  }

  container.appendChild(frag);
}

function showCopied(btn: HTMLElement): void {
  btn.classList.add("copied");
  setTimeout(() => btn.classList.remove("copied"), 1500);
}

export function renderLinks(): void {
  const nav = document.getElementById("links");
  if (!nav) return;

  const frag = document.createDocumentFragment();

  for (const l of links) {
    const raw = data[l.key as keyof Data];

    const a = document.createElement("a");
    a.className = "link-btn";
    a.rel = "noopener noreferrer";

    // For encoded values (email, phone, whatsapp), decode only on click
    if (l.isEmail) {
      a.href = "#";
      a.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "mailto:" + decode(raw);
      });
    } else if (l.key === "phone") {
      a.href = "#";
      a.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "tel:" + decode(raw).replace(/\s/g, "");
      });
    } else {
      a.href = raw;
      a.target = "_blank";
    }

    // Build inner HTML — copy button replaces arrow for copyable items
    const iconHtml = `<span class="link-icon">${svgIcon(l.icon)}</span>`;
    const labelHtml = `<span class="link-label">${l.label}</span>`;

    if (l.copyable) {
      a.innerHTML = iconHtml + labelHtml +
        `<button class="copy-btn" aria-label="Copy ${l.label}">${svgIcon("copy")}</button>`;

      const copyBtn = a.querySelector<HTMLButtonElement>(".copy-btn")!;
      copyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const value = decode(raw);
        navigator.clipboard.writeText(value).then(() => showCopied(copyBtn));
      });
    } else {
      a.innerHTML = iconHtml + labelHtml + svgIcon("arrow", "link-arrow");
    }

    const bc = brandColors[l.key as keyof typeof brandColors];

    a.addEventListener("mouseenter", function () {
      const iconEl = this.querySelector<HTMLElement>(".link-icon");
      const svgEl = iconEl?.querySelector<SVGElement>("svg");
      if (iconEl) iconEl.style.background = bc.bg;
      if (svgEl) svgEl.style.fill = bc.fg;
    });

    a.addEventListener("mouseleave", function () {
      const iconEl = this.querySelector<HTMLElement>(".link-icon");
      const svgEl = iconEl?.querySelector<SVGElement>("svg");
      if (iconEl) iconEl.style.background = "";
      if (svgEl) svgEl.style.fill = "";
    });

    frag.appendChild(a);
  }

  nav.appendChild(frag);
}

export function renderLocation(): void {
  const locEl = document.getElementById("loc") as HTMLAnchorElement | null;
  if (!locEl) return;

  const location = data.location;
  locEl.href = `https://www.google.com/maps/place/${encodeURIComponent(location)}`;
  locEl.innerHTML = svgIcon("location") + `<span>${location}</span>`;
}

export function renderFooter(): void {
  const footerEl = document.getElementById("footer");
  if (!footerEl) return;

  const year = new Date().getFullYear();
  footerEl.innerHTML = `&copy; ${year} Himanshu Sharma`;
}
