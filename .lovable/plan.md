# New look for the SZNVAULT landing page

Modeled on seedraai.com. This replaces the "Neon street" idea, because the site you sent has a very different, editorial style.

## The new style
- **Colors:** warm off-white background, near-black text, and a soft lilac-to-pink gradient on the main buttons. The current all-black look goes away.
- **Fonts:** a clean modern sans for body text, plus an elegant italic serif for accent words, like "Your AI vault. *One payment.*"
- **Feel:** lots of empty space, big type, rounded pill buttons with thin outlines, and photos as the main decoration.

## New page layout (top to bottom)
1. **Nav bar:** logo on the left, plain text links in the middle (Workflows, Tutorials, Pricing, FAQ, Discord), and Discord plus a gradient "Get access – €47" button on the right.
2. **Hero:** giant "SZNVAULT" letters, each filled with one of your AI photos, like the SEEDRA letters on the reference. Below them:
   - Headline "Everything in one vault. *One payment.*"
   - Short text
   - Two buttons: Get access (checkout) and See what's inside (vault.sznvault.com)
3. **Statement line:** a large italic sentence, "Every photo on this page came out of our workflows."
4. **The archive:** a wall of your photos in rows that slowly slide sideways. This replaces the 3D carousel.
5. **Everything in one place:** your video in a large rounded frame, with the four topic cards (ComfyUI setup, image and video generation, face consistency, and many more) as a clean light grid.
6. **Plug and use workflows:** the same four before/after cards with drag sliders, restyled light, plus the "And 2 more workflows" block.
7. **Reviews:** your five review screenshots in a simple sliding row.
8. **Pricing:** one big card with the €47 price (€149 crossed out), the list of what's included, the pricing photo, and the payment logos.
9. **FAQ:** a minimal list with thin lines between questions.
10. **Footer:** light and simple. Logo, the navigation and legal links (Terms, Privacy, Refund), and Join Discord.

The Terms, Privacy and Refund pages also switch to the light style.

## What stays the same
All your text, photos, videos, prices, the checkout link, the Discord link, the vault link and the Whop tracking stay as they are. Removed sections stay removed.

## Technical details
- Rewrite the color tokens in `src/styles.css` for the light palette, and add a `--gradient-cta` token. Add a sans and a serif font (General Sans or Geist, plus Instrument Serif), loaded in `__root.tsx` with `<link>` tags.
- New `HeroLetters.tsx`: each letter uses `background-clip:text` with its own photo and a heavy display weight. On phones it becomes a smaller layout that wraps.
- `Gallery.tsx` becomes a CSS marquee (rows going opposite ways, paused for visitors who turn off motion). Testimonials becomes a simple scroll-snap row.
- `Workflows.tsx` keeps its native range inputs and only gets restyled.
- Restyle Navbar, Footer, Faq, Pricing, Showcase and LegalDoc to use the new tokens only.
- Update `index.tsx` for the new section order.
- Check desktop and phone views with screenshots.
