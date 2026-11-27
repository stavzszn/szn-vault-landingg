<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep workflow before/after comparisons in the landing Workflows component using native range inputs so dragging, touch, and keyboard control share one value.
- Use the shared Tabs controls for the landing workflow showcase and render media at its natural aspect ratio; this keeps keyboard navigation accessible and examples uncropped.
- Keep the character-replacement showcase in its own landing component using existing paired clips and one native range value; this keeps the comparison synchronized and accessible.
- Use the shared pricing values in src/lib/pricing.ts for displayed prices and structured offers so purchase amounts cannot drift between them.
- Scope hero phone adjustments to its named CSS hooks below the mobile breakpoint so the desktop composition stays unchanged.
- Keep the archive photo collection separate from the workflow catalog using shared Tabs; show workflow cards with explicit example labels until real workflow screenshots are supplied.
- Keep Content archive photos in their own collection, independent of landing gallery photos, so archive replacements do not change other sections.
