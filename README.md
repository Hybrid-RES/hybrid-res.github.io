# Sergii Khomutov · Hybrid-RES

Personal website and a concise introduction to the HybridAEP engineering project.

- **Home:** https://hybrid-res.github.io/
- **HybridAEP:** https://hybrid-res.github.io/hybridaep.html
- Ukrainian by default, with an English language switch.
- Static HTML, CSS and JavaScript. No build step, dependencies, analytics, cookies or form backend.
- Hosted by the existing GitHub Pages setup. The `.nojekyll` file enables direct static-file publishing.

## Files to edit

| File | Purpose |
| --- | --- |
| `index.html` | Personal introduction, expertise and contact information |
| `hybridaep.html` | Short project presentation and six module summaries |
| `assets/css/portfolio.css` | Shared visual design and responsive layouts |
| `assets/js/portfolio.js` | Language switch, mobile navigation, email copying and portrait configuration |
| `assets/images/hybridaep-landscape.svg` | Original vector illustration; a conceptual site, not a simulation result |
| `assets/images/favicon.svg` | Site identity and favicon |

The Ukrainian content is present in the HTML and remains usable without JavaScript. Each translated text element has a matching `data-en` attribute. The language switch also updates the document language, title, descriptions, navigation labels and cross-page links. English can be linked directly with `?lang=en`; an explicit switch is remembered locally when browser storage is available.

## Add the chosen portrait

The initial redesign uses an intentional **SK monogram** because no selected portrait was supplied. It does not use a generated face or a stock portrait.

1. Add the owner's approved photo, for example `assets/images/sergii-khomutov.jpg`.
2. Set `PORTRAIT_URL` at the top of `assets/js/portfolio.js` to `assets/images/sergii-khomutov.jpg`.
3. Check the crop on a phone and desktop. Adjust `.profile-portrait` → `object-position` if needed.

The image is shown only after it loads successfully; otherwise the monogram remains visible. A vertical portrait of about 1000–1400 pixels on the long edge is sufficient. Avoid committing unnecessarily large originals or camera metadata.

## Content boundaries

HybridAEP is the author's developing engineering platform. The page introduces the implemented wind-resource, site/terrain, wind-farm, solar PV, PVsyst integration and reporting workflows. BESS and integrated hybrid-system modelling are explicitly identified as planned directions. The site makes no claims about certified outputs, guaranteed returns, client numbers or completed automated BESS optimisation.

The project presentation intentionally contains no private application URLs, source-code links, customer data or deployment details. The personal expertise section and the platform's implemented capabilities are separate.

Contact links open the visitor's own email client. No message is sent by the website, and no backend is required.

## Maintenance checks

After editing, check both pages in Ukrainian and English, narrow and wide layouts, keyboard navigation, mobile menu, internal links and the email-copy action. Preserve the single main heading, visible focus outlines and reduced-motion styles.

## Original template

The repository originally contained **Dimension by HTML5 UP**. Its legacy files, `README.txt` and `LICENSE.txt` retain their original credits and terms. The new pages use the independently authored `portfolio.css`, `portfolio.js` and `assets/images/` assets, and do not load the old template CSS, scripts, icon fonts or sample photos.
