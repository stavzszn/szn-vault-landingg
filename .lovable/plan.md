# New opening section: "EVERYTHING IN ONE VAULT"

The reference video hasn't been uploaded, so this plan uses a default design. If you attach the video, I'll update the plan to match its layout and motion.

## What you'll see
- A new first section above the current one (the photo with "Run your own AI influencers").
- A large centered headline, **EVERYTHING IN ONE VAULT**, in the site's current bold font and dark style.
- A short entrance animation: the words slide up and fade in one after another when the page loads, with a soft glow behind them in the site's accent color.
- Every section below stays the same.

## Technical details
- New `src/components/landing/VaultIntro.tsx`, using the shared `Section` and the existing heading font classes and color tokens. No new colors.
- CSS keyframes in `src/styles.css` for the word reveal, turned off when the visitor has reduced motion enabled.
- Add `<VaultIntro />` in `src/routes/index.tsx` before `<Hero />`.
- Hero keeps its `h1`. The new headline is an `h2`, so there's still only one main heading on the page.
