export function initBackground(): void {
  const wrap = document.getElementById("bgCanvas");
  if (!wrap) return;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  wrap.appendChild(canvas);

  function isLight(): boolean {
    return document.documentElement.getAttribute("data-theme") === "light";
  }

  function addNoise(ctx: CanvasRenderingContext2D, canvasEl: HTMLCanvasElement, light: boolean): void {
    const imageData = ctx.getImageData(0, 0, canvasEl.width, canvasEl.height);
    const data = imageData.data;
    const intensity = light ? 10 : 18;
    for (let i = 0; i < data.length; i += 4) {
      const n = (Math.random() - 0.5) * intensity;
      data[i] += n;
      data[i + 1] += n;
      data[i + 2] += n;
    }
    ctx.putImageData(imageData, 0, 0);
  }

  function drawDark(w: number, h: number): void {
    const grad = ctx!.createLinearGradient(0, 0, w * 0.3, h);
    grad.addColorStop(0, "#060814");
    grad.addColorStop(0.25, "#080c1e");
    grad.addColorStop(0.5, "#0a1028");
    grad.addColorStop(0.75, "#070a18");
    grad.addColorStop(1, "#04060e");
    ctx!.fillStyle = grad;
    ctx!.fillRect(0, 0, w, h);

    const r1 = ctx!.createRadialGradient(w * 0.45, h * 0.15, 0, w * 0.45, h * 0.15, h * 0.55);
    r1.addColorStop(0, "rgba(60, 100, 220, 0.22)");
    r1.addColorStop(0.35, "rgba(40, 70, 180, 0.1)");
    r1.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx!.fillStyle = r1;
    ctx!.fillRect(0, 0, w, h);

    const r2 = ctx!.createRadialGradient(w * 0.15, h * 0.7, 0, w * 0.15, h * 0.7, h * 0.5);
    r2.addColorStop(0, "rgba(30, 60, 180, 0.14)");
    r2.addColorStop(0.5, "rgba(20, 40, 120, 0.06)");
    r2.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx!.fillStyle = r2;
    ctx!.fillRect(0, 0, w, h);

    const r3 = ctx!.createRadialGradient(w * 0.8, h * 0.75, 0, w * 0.8, h * 0.75, h * 0.4);
    r3.addColorStop(0, "rgba(0, 140, 200, 0.08)");
    r3.addColorStop(0.5, "rgba(0, 80, 150, 0.04)");
    r3.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx!.fillStyle = r3;
    ctx!.fillRect(0, 0, w, h);

    const r4 = ctx!.createRadialGradient(w * 0.75, h * 0.1, 0, w * 0.75, h * 0.1, h * 0.3);
    r4.addColorStop(0, "rgba(80, 100, 200, 0.07)");
    r4.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx!.fillStyle = r4;
    ctx!.fillRect(0, 0, w, h);

    const r5 = ctx!.createRadialGradient(w * 0.5, h * 0.25, 0, w * 0.5, h * 0.25, h * 0.35);
    r5.addColorStop(0, "rgba(100, 150, 255, 0.06)");
    r5.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx!.fillStyle = r5;
    ctx!.fillRect(0, 0, w, h);

    addNoise(ctx!, canvas, false);
  }

  function drawLight(w: number, h: number): void {
    // Soft cool base
    const grad = ctx!.createLinearGradient(0, 0, w * 0.3, h);
    grad.addColorStop(0, "#f0f2fa");
    grad.addColorStop(0.3, "#e8ecf8");
    grad.addColorStop(0.6, "#eceff6");
    grad.addColorStop(1, "#e6eaf4");
    ctx!.fillStyle = grad;
    ctx!.fillRect(0, 0, w, h);

    // Soft blue bloom — top center
    const r1 = ctx!.createRadialGradient(w * 0.45, h * 0.15, 0, w * 0.45, h * 0.15, h * 0.5);
    r1.addColorStop(0, "rgba(100, 140, 230, 0.18)");
    r1.addColorStop(0.4, "rgba(80, 120, 210, 0.08)");
    r1.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx!.fillStyle = r1;
    ctx!.fillRect(0, 0, w, h);

    // Warm tint — lower left
    const r2 = ctx!.createRadialGradient(w * 0.2, h * 0.7, 0, w * 0.2, h * 0.7, h * 0.45);
    r2.addColorStop(0, "rgba(180, 190, 230, 0.12)");
    r2.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx!.fillStyle = r2;
    ctx!.fillRect(0, 0, w, h);

    // Cool sky — bottom right
    const r3 = ctx!.createRadialGradient(w * 0.8, h * 0.75, 0, w * 0.8, h * 0.75, h * 0.35);
    r3.addColorStop(0, "rgba(140, 190, 250, 0.1)");
    r3.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx!.fillStyle = r3;
    ctx!.fillRect(0, 0, w, h);

    addNoise(ctx!, canvas, true);
  }

  function draw(w: number, h: number): void {
    if (isLight()) {
      drawLight(w, h);
    } else {
      drawDark(w, h);
    }
  }

  function isCardMode(): boolean {
    return window.innerWidth >= 600;
  }

  function resize(): void {
    const dpr = window.devicePixelRatio || 1;

    let w: number;
    let h: number;

    if (isCardMode()) {
      // In card mode, size to the parent container
      const rect = wrap!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
    } else {
      // Full-screen mode on mobile
      w = window.innerWidth;
      h = window.innerHeight;
    }

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx!.scale(dpr, dpr);
    draw(w, h);
  }

  // Use ResizeObserver for responsive card sizing
  const ro = new ResizeObserver(() => resize());
  ro.observe(wrap);

  resize();
  window.addEventListener("resize", resize);

  // Redraw when theme changes
  window.addEventListener("themechange", () => resize());
}
