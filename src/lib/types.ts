export type IconName =
  | "portfolio"
  | "github"
  | "linkedin"
  | "x"
  | "instagram"
  | "whatsapp"
  | "spotify"
  | "email"
  | "phone"
  | "resume"
  | "location"
  | "arrow"
  | "copy"
  | "sun"
  | "moon";

export interface BrandColor {
  bg: string;
  fg: string;
}

export type BrandKey = Exclude<IconName, "location" | "arrow" | "copy" | "sun" | "moon">;

export interface LinkDef {
  key: string;
  icon: IconName;
  label: string;
  isEmail?: boolean;
  copyable?: boolean;
}

export interface SocialDef {
  key: string;
  icon: IconName;
  label: string;
}
