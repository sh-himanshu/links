# Links — links.sh-himanshu.com

A minimal, single-page link-in-bio site built with **Material Design 3 Expressive** theming.

Live at **[links.sh-himanshu.com](https://links.sh-himanshu.com)**

## Features

- **MD3 Expressive** dark theme with full token system (primary, surface, outline, containers)
- **Gradient noise background** rendered on canvas with radial color accents and film grain
- **XOR + Base64 encoded data** — personal info is obfuscated in source to deter AI/bot scraping
- **Verified badge** with profile photo
- **Staggered fade-in animations** with `prefers-reduced-motion` support
- **Accessible** — semantic HTML, focus-visible outlines, keyboard navigation, ARIA labels
- **Responsive** — optimized for 375px–1440px+
- **Minified** — production HTML + JS total under 15KB

## Stack

- Vanilla HTML / CSS / JS — zero dependencies
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) typeface
- Deployed on [Vercel](https://vercel.com) with custom domain via Cloudflare DNS

## Structure

```
index.html        ← minified production HTML (inline CSS)
app.min.js        ← minified production JS (data decode + canvas bg)
assets/
  img/profile.png ← profile photo
  data.json       ← raw link data (source of truth)
src/
  index.html      ← readable development HTML
  app.js          ← readable development JS
```

## Anti-Scraping

All personal data (URLs, email, phone) is XOR-encrypted with a key and Base64-encoded in the JS source. Data is only decoded at runtime in the browser — raw values never appear in the repository source code.

## License

MIT
