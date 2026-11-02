# Tidewell: Figma-to-Website (PUCIT HCI Lab 07)

**Course:** Human-Computer Interaction, Punjab University College of Information Technology (PUCIT), Lahore
**Lab:** 07, Figma-to-Website conversion with the Figma MCP server

| Deliverable | Link |
|---|---|
| Figma file | https://www.figma.com/design/YmMKWIwfIPGuOQNCxImQiT (set sharing to "Anyone with the link can view") |
| GitHub repository | _add after pushing_ |
| Live website | _add after deploying_ |

## Lab objective
Turn a multi-section Figma design into a responsive, accessible website, using Auto Layout, design variables, semantic layer names and the Figma Model Context Protocol (MCP) server.

## Concept
**Tidewell** is a fictional workflow-automation product for teams. The page has a navbar, hero with calls to action, a four-card feature grid, a results/testimonial section, a contact form and a footer.

## Technologies
React 18, Vite 5, Tailwind CSS 3, `lucide-react` icons, self-hosted Inter (`@fontsource/inter`).

## Figma design
- **Pages:** `Components` (icons, Logo, Button, NavItem, FormInput, FeatureCard) and `Website`.
- **Frames:** `Website - Desktop 1440`, `Website - Tablet 768`, `Website - Mobile 375`, `Website - Mobile Menu Open 375`.
- **Auto Layout:** every section is an Auto Layout frame with explicit padding and gap. Sections and cards use Fill horizontally and Hug vertically. The feature grid uses Auto Layout Wrap (cards Fill with a 260px minimum width), so it reflows 4, 2 and 1 columns.
- **Semantic names:** `Navbar`, `Main`, `HeroSection`, `HeroContent`, `HeroHeading`, `HeroActions`, `HeroVisual`, `FeatureSection`, `FeatureGrid`, `FeatureCard01..04`, `AdditionalSection`, `ContactSection`, `ContactForm`, `NameInput`, `EmailInput`, `MessageInput`, `SubmitButton`, `Footer`.
- **Variables:** Colors (Primary, PrimaryHover, Secondary, Background, Surface, SurfaceMuted, TextPrimary, TextSecondary, TextOnPrimary, Border, Accent, FocusRing, Error, Success), Spacing (Space4 to Space96), Radius (SM, MD, LG, Full). 12 text styles and a `Shadow/Card` effect style. Fills, padding, gaps and radii are bound to the variables.
- **Components and variants:** Button (Primary/Secondary x Default/Hover/Focus/Disabled), NavItem (Default/Hover/Focus), FormInput (Input/Textarea x Default/Focus/Disabled/Error), FeatureCard (Default/Hover), Logo (Light/Dark). Icons are SVG components with SVG export enabled.

## Figma MCP integration
The design was created and read through the Figma MCP server (remote endpoint `https://mcp.figma.com/mcp`) from a Claude chat with the Figma connector. Tools used: `use_figma`, `get_variable_defs` (output saved in `docs/figma/variable-defs.json`), `get_design_context` (desktop frame) and `get_screenshot`.
Config for IDE clients is included so the same server can be connected in VS Code (`.vscode/mcp.json`) or Cursor (`.cursor/mcp.json`). No tokens are stored in the repo.

## Project structure
```
src/components/  Navbar, Logo, Button, HeroSection, HeroVisual, FeatureSection, FeatureCard,
                 AdditionalSection, ContactSection, ContactForm, FormField, Footer
src/index.css    design tokens as CSS custom properties (from Figma variables)
tailwind.config.js  tokens mapped to Tailwind (colors, radius, shadow, type scale)
docs/            figma/variable-defs.json, screenshots/
.vscode/mcp.json, .cursor/mcp.json
```

## Install and run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the build locally
```

## Responsive testing
Tested in headless Chromium at 1440, 768 and 375px: no horizontal overflow (`scrollWidth == innerWidth`), no console errors, feature grid goes 4 to 2 to 1 columns, hero stacks below 1024px, the navbar collapses to a menu button below 768px. Screenshots are in `docs/screenshots/`.

## HCI and accessibility
- Landmarks: `header`, `nav` (Primary, Mobile, Footer), `main`, `section`, `footer`; one `h1`, `h2` per section, `h3` for cards.
- Native controls (`a`, `button`, `input`, `textarea`); every field has a bound `<label>`; errors use `aria-invalid` and `aria-describedby`; success uses `role="status"`.
- Visible focus rings on all interactive elements, hover states, skip link, Escape closes the mobile menu, `aria-expanded` on the menu button, reduced-motion support.
- The hero illustration is one `role="img"` with a descriptive `aria-label`. The site uses no raster images.
- axe-core (WCAG 2.1 A/AA + best practices): 0 violations at all three widths.
- The contact form is a client-side demo: it validates and acknowledges, but sends nothing. Replace `handleSubmit` in `ContactForm.jsx` with a real endpoint for production.

## Deployment
Vercel: import the GitHub repo, framework preset **Vite**, build command `npm run build`, output `dist`. Netlify uses the same settings. For GitHub Pages, set `base` in `vite.config.js` to `/PUCIT-HCI-Lab-07-Figma-to-Website/`.

## Screenshots
`docs/screenshots/desktop-1440.png`, `tablet-768.png`, `mobile-375.png`, `mobile-375-menu-open.png`, `mobile-375-form-errors.png`.
