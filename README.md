# Sergii Khomutov · Hybrid-RES

Personal website, research interests and a concise introduction to the HybridAEP engineering project.

- **Home:** https://hybrid-res.github.io/
- **Research & projects:** https://hybrid-res.github.io/research.html
- **HybridAEP:** https://hybrid-res.github.io/hybridaep.html
- **Contact:** https://hybrid-res.github.io/contact.html
- Ukrainian by default, with an English language switch.
- Static HTML, CSS and JavaScript. No build step, dependencies, analytics, cookies or form backend.
- Hosted by the existing GitHub Pages setup. The `.nojekyll` file enables direct static-file publishing.

## Files to edit

| File | Purpose |
| --- | --- |
| `index.html` | Personal introduction, expertise and contact information |
| `research.html` | Research directions and engineering projects |
| `hybridaep.html` | Short project presentation and six module summaries |
| `contact.html` | Personal invitation to connect, email and GitHub links |
| `assets/css/portfolio.css` | Shared visual design and responsive layouts |
| `assets/js/portfolio.js` | Language switch, mobile navigation and email copying |
| `assets/images/sergii-home.jpg` | Full-length homepage portrait |
| `assets/images/sergii-research.jpg` | Park-bench portrait on the research page |
| `assets/images/sergii-contact.jpg` | Colour staircase portrait on the contact page |
| `assets/images/hybridaep-landscape.svg` | Original vector illustration; a conceptual site, not a simulation result |
| `assets/images/favicon.svg` | Site identity and favicon |

The Ukrainian content is present in the HTML and remains usable without JavaScript. Each translated text element has a matching `data-en` attribute. The language switch also updates the document language, title, descriptions, navigation labels and cross-page links. English can be linked directly with `?lang=en`; an explicit switch is remembered locally when browser storage is available.

## Portraits

The three portraits were supplied and selected by the owner for these pages. Their original image content and proportions are preserved, including the full-length homepage photo. No generated face, retouching or stock portrait is used. The supplied black-and-white variant is not needed for this layout.

Photos are ordinary HTML images and remain visible without JavaScript. The explicit image dimensions reserve space while loading; CSS sets their display width and automatic height. To replace a portrait, update its image file or the corresponding `src` in the page and check both wide and narrow layouts. Each current image is 1365 × 2048 pixels, under 1 MB and contains no EXIF fields.

## Content boundaries

HybridAEP is the author's developing engineering platform. The page introduces the implemented wind-resource, site/terrain, wind-farm, solar PV, PVsyst integration and reporting workflows. BESS and integrated hybrid-system modelling are explicitly identified as planned directions. The site makes no claims about certified outputs, guaranteed returns, client numbers or completed automated BESS optimisation.

The project presentation intentionally contains no private application URLs, source-code links, customer data or deployment details. The personal expertise section and the platform's implemented capabilities are separate.

Contact links open the visitor's own email client. No message is sent by the website, and no backend is required.

## Maintenance checks

After editing, check all four pages in Ukrainian and English, narrow and wide layouts, keyboard navigation, mobile menu, internal links and the email-copy action. Preserve the single main heading, visible focus outlines and reduced-motion styles. When CSS or JavaScript changes, update the `v=` asset version in all four HTML files so returning visitors receive the matching assets rather than a cached earlier version.

## Original template

The repository originally contained **Dimension by HTML5 UP**. Its legacy files, `README.txt` and `LICENSE.txt` retain their original credits and terms. The new pages use the independently authored `portfolio.css`, `portfolio.js` and `assets/images/` assets, and do not load the old template CSS, scripts, icon fonts or sample photos.
