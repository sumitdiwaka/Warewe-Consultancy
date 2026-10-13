# Realtor360

A Figma-to-code implementation of the **Realtor360** real-estate CRM, built with React and TypeScript. It covers the Dashboard plus ten list screens, with shared layout components for the navbar, filters, tables and pagination.

- **Live demo:** `https://warewe-consultancy-one.vercel.app/`
- **Repository:** `https://github.com/sumitdiwaka/Warewe-Consultancy`
- **Design:** Realtor360 Figma file (file key `w3ZJn4OeQVLudyC0jOzOYW`)

## Tech stack

| Area | Choice |
|---|---|
| Framework | React 18 |
| Language | TypeScript (strict mode) |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3, Inter font (Google Fonts) |
| Routing | React Router 6 (`HashRouter`) |
| Charts | Recharts |

## Screens

| Screen | Route |
|---|---|
| Dashboard (Home) | `/#/` |
| Developments | `/#/developments` |
| Buildings | `/#/buildings` |
| Units | `/#/units` |
| Leads | `/#/leads` |
| Companies | `/#/companies` |
| Contacts | `/#/contacts` |
| Deals | `/#/deals` |
| Activities | `/#/activities` |
| Attorney Firms | `/#/attorney-firms` |
| Reports | `/#/reports` |

The app uses `HashRouter`, so deep links and page refreshes work on any static host without server-side rewrite rules.

## Getting started

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev        # start the dev server at http://localhost:5173
npm run build      # type-check and create a production build in dist/
npm run preview    # serve the production build locally
```

For the closest match to the design, view the app in a browser window about **1440px wide** at 100% zoom. The layout is capped at 1440px and centred on wider screens.

## Project structure

```
src/
  assets/          Photos, avatars and the exported lead-source donut SVG
  components/      Navbar, FilterSidebar, PageShell, DataTable, StatusBadge,
                   Pagination, Calendar, Avatar, Thumb
  pages/           One file per screen
  App.tsx          Routes
  index.css        Tailwind layers and the shared .card style
tailwind.config.js Design tokens (gold palette, page background, Inter)
vercel.json        Vercel build and SPA settings
```

### Reusable pieces

- **PageShell**: filter sidebar, page title, toolbar (create button, search, view and actions) and pagination shared by the list screens.
- **DataTable**: grid-based table that takes a column template, headers and rows.
- **FilterSidebar**: grouped checkbox filters with Apply and Reset buttons.
- **StatusBadge**: coloured status pills (Active, In Progress, Converted, Closed Won and others).

## Design tokens

Defined in `tailwind.config.js` and `src/index.css`:

- Font: Inter (400, 500, 600, 700)
- Gold `#D4AF37`, mid cream `#EBDDA6`, light cream `#F7F0D6`
- Page background `#F5F6F8`, card white
- Card radius `20px`, card shadow `2px 4px 4px rgba(0, 0, 0, 0.1)`

## Deploying to Vercel

1. Push the project to GitHub (the folder that contains `package.json`; do not commit `node_modules` or `dist`).
2. In Vercel, choose **Add New, Project** and import the repository.
3. Vercel detects Vite. The build command (`npm run build`), output directory (`dist`) and install command are also set in `vercel.json`.
4. Click **Deploy**. Every push to the main branch redeploys automatically.

Note: `npm run build` runs `tsc` first, so any TypeScript error fails the deployment. Run `npm run build` locally before pushing.

## Notes and limitations

- The data is static sample data taken from the Figma screens; there is no backend.
- Filters, search boxes and pagination controls are visual only and do not filter the sample data yet.
- Some icons (for example the dashboard KPI icons) and the company logos are approximations or placeholders. They can be replaced with the exported Figma assets.
- Sizes, spacing and colours were measured from the Figma screens and refined screen by screen. Small differences may remain.