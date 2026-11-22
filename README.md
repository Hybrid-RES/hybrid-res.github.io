# Sergii Khomutov · HYBRID : RES

Personal website, research interests and a concise introduction to the HybridAEP engineering project.

- **Home:** https://hybrid-res.github.io/
- **Research & projects:** https://hybrid-res.github.io/research.html
- **HybridAEP:** https://hybrid-res.github.io/hybridaep.html
- **Contact:** https://hybrid-res.github.io/contact.html
- Ukrainian by default, with an English language switch.
- Static HTML, CSS and JavaScript. No build step, dependencies, analytics or tracking cookies. Contact delivery uses an external form endpoint once the owner has approved and activated it.
- Hosted by the existing GitHub Pages setup. The `.nojekyll` file enables direct static-file publishing.

## Files to edit

| File | Purpose |
| --- | --- |
| `index.html` | Personal introduction, expertise and contact information |
| `research.html` | Bilingual five-project engineering / research showcase with original portrait |
| `hybridaep.html` | Short project presentation and six module summaries |
| `contact.html` | Online enquiry form and a personal invitation to connect |
| `assets/css/portfolio.css` | Shared visual design and responsive layouts |
| `assets/js/portfolio.js` | Language switch, section navigation, header measurement and contact-form handling |
| `assets/images/sergii-home.jpg` | Full-length homepage portrait |
| `assets/images/sergii-research.jpg` | Park-bench portrait on the research page |
| `assets/images/sergii-contact.jpg` | Colour staircase portrait on the contact page |
| `assets/images/hybridaep-landscape.svg` | Original vector illustration; a conceptual site, not a simulation result |
| `assets/images/projects/` | Five showcase graphics; only the BESS chart is a production-code generated demo |
| `assets/images/favicon.svg` | SK monogram used in the header and browser tab |
| `assets/images/tools/` | Official product marks used in the tools-and-data-sources section |
| `assets/images/credentials/` | IVE and Uptime Institute logos, plus the owner's ATD certificate |
| `THIRD_PARTY_NOTICES.md` | Asset origins, attribution and applicable third-party licences |

The Ukrainian content is present in the HTML and remains usable without JavaScript. Each translated text element has a matching `data-en` attribute. The language switch also updates the document language, title, descriptions, navigation labels and cross-page links. English can be linked directly with `?lang=en`; an explicit switch is remembered locally when browser storage is available.

## Navigation and layout

The shared identity combines the owner's SK monogram with the uppercase **HYBRID : RES** wordmark. Two small teal squares form the colon; the monogram uses light S and amber K lettering on the site's dark background. The same vector mark is used as the favicon. Keep GitHub account names and URLs as `Hybrid-RES`.

The header includes About, Expertise, Projects, HybridAEP and Contact. Home and About are one introduction with a full-length portrait and a shared education-and-credentials row. Existing `#intro`, `#about` and `#education` links remain available. A native **Sections / Розділи** disclosure lists every main block of the current page, including education and credentials, the project tools, modules, workflow and future development. On smaller screens, the full menu is scrollable and can be closed with Escape. The current page or section is highlighted as the visitor moves through the site.

Section navigation IDs sit on the first inner content container, rather than the padded outer section. Native anchor scrolling uses one clearance based on the measured sticky-header height. Keep this arrangement when adding sections so padding and anchor offsets do not accumulate. Portraits retain their full proportions; their desktop size also responds to the available viewport height. Research text aligns with the top of its portrait.

## Portraits

The three portraits were supplied and selected by the owner for these pages. Their original image content and proportions are preserved, including the full-length homepage photo. No generated face, retouching or stock portrait is used. The supplied black-and-white variant is not needed for this layout.

Photos are ordinary HTML images and remain visible without JavaScript. The explicit image dimensions reserve space while loading; CSS sets their display width and automatic height. To replace a portrait, update its image file or the corresponding `src` in the page and check both wide and narrow layouts. Each current image is 1365 × 2048 pixels, under 1 MB and contains no EXIF fields.

## Content boundaries

HybridAEP is the author's developing engineering platform. The page introduces the implemented wind-resource, site/terrain, wind-farm, solar PV, PVsyst integration and reporting workflows. BESS and integrated hybrid-system modelling are explicitly identified as planned directions. The site makes no claims about certified outputs, guaranteed returns, client numbers or completed automated BESS optimisation.

The project presentation intentionally contains no private application URLs, source-code links, customer data or deployment details. The personal expertise section and the platform's implemented capabilities are separate.

The personal profile includes the owner's supplied PhD qualification from the Institute of Renewable Energy of the National Academy of Sciences of Ukraine, in Electrical engineering, with Programme Subject Area Electrical power, electrical engineering and electromechanics. The profile also describes energy solutions for critical infrastructure, including telecommunications and data centers. No employer is named.

The adjacent Uptime Institute card presents the owner's **Accredited Tier Designer (ATD)** certificate, number **3911**, dated **23 March 2021**, as shown in the original certificate. It does not assert a current validity period. Both credential cards have equal dimensions in the desktop grid and stack on smaller screens. The small certificate preview opens the unmodified, full-resolution local image in a new tab. The expertise order is critical infrastructure, research and tools, renewable energy, then power-system flexibility.

## Research & project portfolio (November 2026)

The pre-existing `research.html` is the only project index; no `projects.html` or unnecessary standalone project pages are created. The introductory portrait and hero stay intact. Five alternating, responsive horizontal showcase entries, each with **Objective → Approach → Key outcome → Tools**, have stable hash anchors:

- `#shadow-bess` — Shadow BESS Lab / Shadow Trading and DAM Forecast Modeling.
- `#gridlab` — GridLab / Critical Infrastructure Resilience Assessment.
- `#wind-aep` — HybridRES Wind AEP.
- `#solar-aep` — HybridRES Solar AEP.
- `#energy-finance` — Energy Finance Lab / Energy Investment and Quant Analytics.

The finance entry explicitly labels all three described modules (Investment, Market and Quantitative Risk Analysis) as a **concept**, not delivered functionality. GridLab describes **steady-state AC power-flow** and never implies verified real-site resilience or time-domain switching. Existing HybridAEP platform links are reused for Wind and Solar; no private app URLs, credentials or deployments are linked from the public site.

**Graphic provenance / replacement:**

- `assets/images/projects/shadow-bess.svg` is copied from `Hybrid-RES/shadowtraiding/docs/preview-chart-v0.2.1.svg`: the application-generated two-cycle chart, explicitly based on synthetic prices and volumes.
- `gridlab.svg`, `wind-aep.svg`, and `solar-aep.svg` are original **conceptual illustrations**, not screenshots or calculated results. Replace each with a checked, redacted screenshot from the corresponding actual application when supplied; update the image title/alt/caption and format honestly.
- `energy-finance.svg` is a conceptual illustration for a **planned** finance module, not a live software dashboard or financial calculation.

All image opens use local relative links; every image has bilingual alt text and explanatory captions. English support uses the existing `data-en` mechanism, keeping Ukrainian visible without JavaScript. Update both languages when adding future projects or screenshot captions.

## Contact form

The owner's email address is not included in the current HTML or JavaScript. All contact and demonstration calls to action lead to `contact.html`; HybridAEP links select that topic using `?topic=hybridaep`.

**Current state: prepared, not activated.** The form has an empty `action` and `data-endpoint`, disabled fields and a visible availability notice. It does not submit or claim that a message has been sent. Connecting FormSubmit requires the owner's approval to provide their recipient email to that service and activation of the recipient address.

After approval and activation, set both `action` and `data-endpoint` to the exact opaque form URL provided by FormSubmit, such as `https://formsubmit.co/OPAQUE_FORM_ID`. Do not use an email address as the endpoint or commit an activation link, API key or private token. The published opaque submission ID is a public form identifier, not a secret.

The frontend enables the form only for a valid opaque endpoint. It preserves input on a delivery error and treats success only as an affirmative service response. It sends the visitor's email, optional name, topic and message through the form provider; it does not put these values in URLs or browser storage. Keep the short form-provider and reply-purpose notice visible when activating delivery. Verify an actual test message arrives before reporting delivery as working.

## Maintenance checks

After editing, check all four pages in Ukrainian and English, narrow and wide layouts, keyboard navigation, mobile menu, internal links and contact-form states. Preserve the single main heading, visible focus outlines and reduced-motion styles. When CSS or JavaScript changes, update the `v=` asset version in all four HTML files so returning visitors receive the matching assets rather than a cached earlier version.

## Original template

The repository originally contained **Dimension by HTML5 UP**. Its legacy files, `README.txt` and `LICENSE.txt` retain their original credits and terms. The new pages use the independently authored `portfolio.css`, `portfolio.js` and `assets/images/` assets, and do not load the old template CSS, scripts, icon fonts or sample photos.
