export function initEasterEgg(): void {
  const avatar = document.querySelector<HTMLElement>(".avatar-wrap");
  if (!avatar) return;

  let clicks = 0;
  let timer: ReturnType<typeof setTimeout> | null = null;

  avatar.addEventListener("click", () => {
    clicks++;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      clicks = 0;
    }, 800);

    // Pulse glow on each click to entice more clicks
    avatar.classList.remove("avatar-glow");
    void avatar.offsetWidth; // force reflow to restart animation
    avatar.classList.add("avatar-glow");

    if (clicks >= 5) {
      clicks = 0;
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }
  });
}
