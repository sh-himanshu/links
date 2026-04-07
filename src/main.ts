import "./style.css";
import { renderSocialIcons, renderLinks, renderLocation } from "./lib/render";
import { initBackground } from "./lib/background";
import { initEasterEgg } from "./lib/easter-egg";
import { initThemeToggle } from "./lib/theme-toggle";

initThemeToggle();
renderSocialIcons();
renderLinks();
renderLocation();
initEasterEgg();
initBackground();
