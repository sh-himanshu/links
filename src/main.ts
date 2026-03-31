import "./style.css";
import { renderSocialIcons, renderLinks, renderLocation, renderFooter } from "./lib/render";
import { initBackground } from "./lib/background";
import { initEasterEgg } from "./lib/easter-egg";
import { initThemeToggle } from "./lib/theme-toggle";

initThemeToggle();
renderSocialIcons();
renderLinks();
renderLocation();
renderFooter();
initEasterEgg();
initBackground();
