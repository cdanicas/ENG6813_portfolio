# Christy Shell — ENG 6813 Portfolio

Personal portfolio for ENG 6813, built around the course *LDR 4077: Becoming an Effective Leader*. Deployed as a static site on GitHub Pages — no build step, no dependencies.

**Live site:** `https://cdanicas.github.io/ENG6813_portfolio/` (once GitHub Pages is enabled — see below)

## What's here

- **Teaching Statement** — my teaching philosophy, written for this course.
- **Course Syllabus** — the full syllabus for LDR 4077, including schedule, grading, and AI use policy.
- **Hotel Negotiator** — a self-contained simulator where students submit a hotel RFP, review three proposals, and negotiate contract terms over four rounds against a scripted hotel sales manager. Fully static and rule-based — no API key required.
- **Ethics Simulations** — a self-contained simulator where students step into one of five board-leadership roles and work through realistic ethical dilemmas.

## Structure

```
/
├── index.html                  # shell: nav + all 4 tabs
├── assets/css/style.css        # shared design system
├── assets/js/tabs.js           # tab switching
├── ethics-simulator/index.html # embedded app
├── hotel-negotiator/index.html # embedded app
└── .nojekyll
```

## Enabling GitHub Pages

1. Merge this branch into `main` (or point Pages at this branch directly).
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Set branch to `main`, folder to `/ (root)`, then **Save**.
5. GitHub publishes the site at `https://cdanicas.github.io/ENG6813_portfolio/` within a minute or two.
