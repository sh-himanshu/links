import { svgIcon } from "./icons";

type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function getSavedTheme(): Theme | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "dark" || v === "light") return v;
  } catch {
    // localStorage unavailable
  }
  return null;
}

function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme);

  // Update meta tags
  const colorScheme = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');
  const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (colorScheme) colorScheme.content = theme;
  if (themeColor) themeColor.content = theme === "light" ? "#f0f2fa" : "#080a14";

  // Dispatch event for other modules (e.g. background canvas)
  window.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
}

export function initThemeToggle(): void {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  let current: Theme = getSavedTheme() ?? getSystemTheme();
  applyTheme(current);
  updateIcon(btn, current);

  btn.addEventListener("click", () => {
    current = current === "dark" ? "light" : "dark";
    applyTheme(current);
    updateIcon(btn, current);
    try {
      localStorage.setItem(STORAGE_KEY, current);
    } catch {
      // localStorage unavailable
    }
  });

  // React to system theme changes (only when no saved preference)
  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
    if (getSavedTheme()) return;
    current = e.matches ? "light" : "dark";
    applyTheme(current);
    updateIcon(btn, current);
  });
}

function updateIcon(btn: HTMLElement, theme: Theme): void {
  // Show sun in dark mode (click to go light), moon in light mode (click to go dark)
  btn.innerHTML = svgIcon(theme === "dark" ? "sun" : "moon");
  btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
}
