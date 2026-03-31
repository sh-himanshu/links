/* ============================================================
   Links — Himanshu Sharma
   All personal data is XOR + Base64 encoded to deter AI bots
   from scraping raw text off the GitHub source.
   ============================================================ */

(function () {
  "use strict";

  // ── XOR encode/decode ────────────────────────────────────
  var K = 42; // XOR key
  function xb(s) {
    for (var o = "", i = 0; i < s.length; i++)
      o += String.fromCharCode(s.charCodeAt(i) ^ K);
    return o;
  }
  function enc(s) { return btoa(xb(s)); }
  function dec(s) { return xb(atob(s)); }

  // ── Encoded data blob (built from assets/data.json) ──────
  // To regenerate: run enc("value") in console with the key above
  var D = {
    leetcode:    enc("https://leetcode.com/u/sh-himanshu"),
    x:           enc("https://x.com/himanshu_1220"),
    github:      enc("https://github.com/sh-himanshu"),
    linkedin:    enc("https://www.linkedin.com/in/sh-himanshu/"),
    instagram:   enc("https://www.instagram.com/hs7.sharma"),
    phone:       enc("+91 8058009415"),
    email:       enc("himanshu.sh1220@gmail.com"),
    portfolio:   enc("https://sh-himanshu.com"),
    resume:      enc("http://sh-himanshu.com/download/resume"),
    location:    enc("Gurugram, India"),
  };

  // ── SVG icon paths (24×24 viewBox) ───────────────────────
  var icons = {
    portfolio: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>',
    github: '<path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>',
    linkedin: '<path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>',
    x: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',
    leetcode: '<path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 00-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0013.483 0zm-2.866 12.815a1.38 1.38 0 00-1.38 1.382 1.38 1.38 0 001.38 1.382H20.79a1.38 1.38 0 001.38-1.382 1.38 1.38 0 00-1.38-1.382z"/>',
    instagram: '<path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z"/>',
    email: '<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>',
    phone: '<path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>',
    resume: '<path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm2-6h8v2H8v-2zm0-3h8v2H8v-2zm0 6h5v2H8v-2z"/>',
    location: '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>',
    arrow: '<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>'
  };

  function svgIcon(name, cls) {
    return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true">' + icons[name] + '</svg>';
  }

  // ── Link definitions ─────────────────────────────────────
  var links = [
    { key: "portfolio", icon: "portfolio", label: "Portfolio", sub: "sh-himanshu.com" },
    { key: "github",    icon: "github",    label: "GitHub",    sub: "sh-himanshu" },
    { key: "linkedin",  icon: "linkedin",  label: "LinkedIn",  sub: "in/sh-himanshu" },
    { key: "x",         icon: "x",         label: "X (Twitter)", sub: "@himanshu_1220" },
    { key: "leetcode",  icon: "leetcode",  label: "LeetCode",  sub: "sh-himanshu" },
    { key: "instagram", icon: "instagram", label: "Instagram", sub: "@hs7.sharma" },
    { key: "email",     icon: "email",     label: "Email",     sub: null, isEmail: true },
    { key: "phone",     icon: "phone",     label: "Phone",     sub: null, isPhone: true },
    { key: "resume",    icon: "resume",    label: "Resume",    sub: "Download CV" }
  ];

  // ── Render links ─────────────────────────────────────────
  var nav = document.getElementById("links");
  var frag = document.createDocumentFragment();

  links.forEach(function (l) {
    var val = dec(D[l.key]);
    var a = document.createElement("a");
    a.className = "link-btn";
    a.rel = "noopener noreferrer";

    if (l.isEmail) {
      a.href = "mailto:" + val;
      l.sub = val;
    } else if (l.isPhone) {
      a.href = "tel:" + val.replace(/\s/g, "");
      l.sub = val;
    } else {
      a.href = val;
      a.target = "_blank";
    }

    a.innerHTML =
      '<span class="link-icon">' + svgIcon(l.icon) + '</span>' +
      '<span class="link-text">' +
        '<span class="link-label">' + l.label + '</span>' +
        (l.sub ? '<span class="link-sub">' + l.sub + '</span>' : '') +
      '</span>' +
      svgIcon("arrow", "link-arrow");

    frag.appendChild(a);
  });
  nav.appendChild(frag);

  // ── Location chip ────────────────────────────────────────
  var locEl = document.getElementById("loc");
  locEl.innerHTML = svgIcon("location") + '<span>' + dec(D.location) + '</span>';

  // ── Gradient noise background ────────────────────────────
  (function initBackground() {
    var wrap = document.getElementById("bgCanvas");
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    wrap.appendChild(canvas);

    function resize() {
      var dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
      draw();
    }

    function draw() {
      var w = window.innerWidth;
      var h = window.innerHeight;

      // Base gradient — deep purples to teals
      var grad = ctx.createLinearGradient(0, 0, w * 0.5, h);
      grad.addColorStop(0, "#0D001A");
      grad.addColorStop(0.3, "#1A0033");
      grad.addColorStop(0.5, "#12002B");
      grad.addColorStop(0.7, "#0A1628");
      grad.addColorStop(1, "#060D1A");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Radial accent — purple glow
      var r1 = ctx.createRadialGradient(w * 0.3, h * 0.2, 0, w * 0.3, h * 0.2, h * 0.6);
      r1.addColorStop(0, "rgba(120, 70, 200, 0.25)");
      r1.addColorStop(0.5, "rgba(80, 40, 160, 0.1)");
      r1.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = r1;
      ctx.fillRect(0, 0, w, h);

      // Radial accent — teal glow
      var r2 = ctx.createRadialGradient(w * 0.75, h * 0.7, 0, w * 0.75, h * 0.7, h * 0.5);
      r2.addColorStop(0, "rgba(0, 180, 180, 0.12)");
      r2.addColorStop(0.5, "rgba(0, 100, 140, 0.06)");
      r2.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = r2;
      ctx.fillRect(0, 0, w, h);

      // Radial accent — warm pink
      var r3 = ctx.createRadialGradient(w * 0.6, h * 0.15, 0, w * 0.6, h * 0.15, h * 0.35);
      r3.addColorStop(0, "rgba(200, 100, 180, 0.1)");
      r3.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = r3;
      ctx.fillRect(0, 0, w, h);

      // Film grain / noise overlay
      addNoise(ctx, w, h);
    }

    function addNoise(ctx, w, h) {
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;
      var len = data.length;
      for (var i = 0; i < len; i += 4) {
        var n = (Math.random() - 0.5) * 25;
        data[i]     += n;
        data[i + 1] += n;
        data[i + 2] += n;
      }
      ctx.putImageData(imageData, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);
  })();
})();
