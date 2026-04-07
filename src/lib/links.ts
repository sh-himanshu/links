import type { LinkDef, SocialDef } from "./types";

export const socialIcons: SocialDef[] = [
  { key: "github", icon: "github", label: "GitHub" },
  { key: "linkedin", icon: "linkedin", label: "LinkedIn" },
  { key: "whatsapp", icon: "whatsapp", label: "WhatsApp" },
];

export const links: LinkDef[] = [
  { key: "portfolio", icon: "portfolio", label: "Portfolio" },
  { key: "resume", icon: "resume", label: "Resume" },
  { key: "email", icon: "email", label: "Email", isEmail: true, copyable: true },
  { key: "phone", icon: "phone", label: "Phone", copyable: true },
];
