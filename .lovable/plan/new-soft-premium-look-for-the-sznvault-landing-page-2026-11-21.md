# New soft, premium look for the SZNVAULT landing page

This plan borrows the layout ideas from seedraai.com: photos inside big letters, elegant italic accent words, sliding photo rows and lots of space. It keeps your black background and white text, with a soft, premium feel.

## The new style
- **Colors:** the background stays black. It gets soft warm-black tones and very faint glows so it feels deeper and less flat. Text is white, and secondary text is soft grey.
- **Fonts:** headlines and body text keep the current clean sans. A refined italic serif is added for accent words, for example "Everything in one vault. *One payment.*"
- **Details:** more space between sections, thin hairline borders, softer rounded cards and gentle fade-in motion as you scroll. Main buttons stay white pills, with a soft glow when you hover.

## What stays exactly the same
- The nav bar and footer keep their design. The only change is the new ARCHIVE tab.
- The "Everything in one place" section, with your video and the four topic cards.
- The Terms, Privacy and Refund pages.
- All links: checkout, Discord, vault.sznvault.com and the Whop tracking.

## Landing page, top to bottom
1. **Hero:** giant "SZNVAULT" letters, each filled with one of your AI photos, on black. Below them:
   - Headline "Everything in one vault. *One payment.*"
   - Short text
   - Two buttons: Get instant access and See what's inside
   - The "What you get" list, in a cleaner two-column layout
2. **Statement line:** a large soft italic sentence, "Every photo on this page came out of our workflows."
3. **Made entirely with SZNVAULT:** a wall of your photos in two rows that slowly slide in opposite directions, with a "View the full archive" link to the new Archive page.
4. **Everything in one place:** unchanged.
5. **Plug and use ComfyUI workflows:** the same four before/after cards and the "And 2 more workflows" block, restyled with softer cards.
6. **Pricing:** the photo and the included items in a more premium card, with softer borders and a faint glow. The price changes from €47 with €149 crossed out to **€47 with €97 crossed out**.
7. **FAQ:** a minimal list with thin lines between questions.

The reviews section ("The users speak for themselves") is removed.

## New Archive page
- A new page at /archive with a large "The *archive.*" title and a short line of text.
- All your AI photos in a tidy grid. Click any photo to open it full size, and use the arrows to move through them.
- It uses the same nav bar and footer as the main page.
- The nav bar tabs become **MAIN, ARCHIVE, DISCORD**.

## Technical details
- `src/styles.css`: adjust the dark tokens slightly for the warm-black look, add an `--font-serif` token and soft glow and shadow tokens, add a marquee keyframe, and turn off motion for visitors who choose reduced motion. Load Instrument Serif in `__root.tsx` with a `<link>` tag.
- New `src/components/landing/HeroLetters.tsx`: letters filled with photos using `background-clip:text`, in a smaller wrapping layout on phones.
- Rewrite `Gallery.tsx` as a CSS marquee that links to `/archive`.
- Remove `<Testimonials />` from `index.tsx`. Keep `Tutorials` exactly as it is.
- Restyle `Workflows.tsx` while keeping the native range inputs. Restyle `Pricing.tsx` and change €149 to €97. Restyle `Faq.tsx`.
- New `src/routes/archive.tsx` with its own `head()` metadata, a shared photo list in `src/lib/archive-photos.ts` and a lightbox dialog.
- `Navbar.tsx`: add an ARCHIVE tab that links to `/archive` and marks the current page as active. Nothing else in the nav bar changes. The Footer is not touched.
- Check the desktop and phone views with screenshots.
