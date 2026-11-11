# Sergii Khomutov · Hybrid-RES

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
| `research.html` | Research directions and engineering projects |
| `hybridaep.html` | Short project presentation and six module summaries |
| `contact.html` | Online enquiry form and a personal invitation to connect |
| `assets/css/portfolio.css` | Shared visual design and responsive layouts |
| `assets/js/portfolio.js` | Language switch, mobile navigation and contact-form handling |
| `assets/images/sergii-home.jpg` | Full-length homepage portrait |
| `assets/images/sergii-research.jpg` | Park-bench portrait on the research page |
| `assets/images/sergii-contact.jpg` | Colour staircase portrait on the contact page |
| `assets/images/hybridaep-landscape.svg` | Original vector illustration; a conceptual site, not a simulation result |
| `assets/images/favicon.svg` | Site identity and favicon |
| `assets/images/tools/` | Official product marks used in the tools-and-data-sources section |
| `THIRD_PARTY_NOTICES.md` | Asset origins, attribution and applicable third-party licences |

The Ukrainian content is present in the HTML and remains usable without JavaScript. Each translated text element has a matching `data-en` attribute. The language switch also updates the document language, title, descriptions, navigation labels and cross-page links. English can be linked directly with `?lang=en`; an explicit switch is remembered locally when browser storage is available.

## Portraits

The three portraits were supplied and selected by the owner for these pages. Their original image content and proportions are preserved, including the full-length homepage photo. No generated face, retouching or stock portrait is used. The supplied black-and-white variant is not needed for this layout.

Photos are ordinary HTML images and remain visible without JavaScript. The explicit image dimensions reserve space while loading; CSS sets their display width and automatic height. To replace a portrait, update its image file or the corresponding `src` in the page and check both wide and narrow layouts. Each current image is 1365 × 2048 pixels, under 1 MB and contains no EXIF fields.

## Content boundaries

HybridAEP is the author's developing engineering platform. The page introduces the implemented wind-resource, site/terrain, wind-farm, solar PV, PVsyst integration and reporting workflows. BESS and integrated hybrid-system modelling are explicitly identified as planned directions. The site makes no claims about certified outputs, guaranteed returns, client numbers or completed automated BESS optimisation.

The project presentation intentionally contains no private application URLs, source-code links, customer data or deployment details. The personal expertise section and the platform's implemented capabilities are separate.

The personal profile includes the owner's supplied PhD qualification from the Institute of Renewable Energy of the National Academy of Sciences of Ukraine, in Electrical engineering, with Programme Subject Area Electrical power, electrical engineering and electromechanics. The profile also describes energy solutions for critical infrastructure, including telecommunications and data centres. No employer is named.

## Contact form

The owner's email address is not included in the current HTML or JavaScript. All contact and demonstration calls to action lead to `contact.html`; HybridAEP links select that topic using `?topic=hybridaep`.

**Current state: prepared, not activated.** The form has an empty `action` and `data-endpoint`, disabled fields and a visible availability notice. It does not submit or claim that a message has been sent. Connecting FormSubmit requires the owner's approval to provide their recipient email to that service and activation of the recipient address.

After approval and activation, set both `action` and `data-endpoint` to the exact opaque form URL provided by FormSubmit, such as `https://formsubmit.co/OPAQUE_FORM_ID`. Do not use an email address as the endpoint or commit an activation link, API key or private token. The published opaque submission ID is a public form identifier, not a secret.

The frontend enables the form only for a valid opaque endpoint. It preserves input on a delivery error and treats success only as an affirmative service response. It sends the visitor's email, optional name, topic and message through the form provider; it does not put these values in URLs or browser storage. Keep the short form-provider and reply-purpose notice visible when activating delivery. Verify an actual test message arrives before reporting delivery as working.

## Maintenance checks

After editing, check all four pages in Ukrainian and English, narrow and wide layouts, keyboard navigation, mobile menu, internal links and contact-form states. Preserve the single main heading, visible focus outlines and reduced-motion styles. When CSS or JavaScript changes, update the `v=` asset version in all four HTML files so returning visitors receive the matching assets rather than a cached earlier version.

## Original template

The repository originally contained **Dimension by HTML5 UP**. Its legacy files, `README.txt` and `LICENSE.txt` retain their original credits and terms. The new pages use the independently authored `portfolio.css`, `portfolio.js` and `assets/images/` assets, and do not load the old template CSS, scripts, icon fonts or sample photos.
