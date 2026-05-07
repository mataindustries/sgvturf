# SGV Turf Premium Hero Animation Spec

## Project
SGV Turf homepage premium hero animation

## Goal
Build a polished, lightweight “Yard Transformation Scan” hero animation for SGV Turf that makes the site feel more premium, local, and valuable when homeowners visit and when contractors are shown the page during cold calls.

The animation should feel like a refined landscape design plan coming alive. It should make SGV Turf look like a serious San Gabriel Valley quote engine, not a generic directory or AI-generated landing page.

## Current page context
The current homepage is a single-page HTML/CSS/JS site with an editorial landscaping style.

Existing visual language:

- Brand: SGV Turf
- Positioning: San Gabriel Valley turf and xeriscaping authority
- Hero headline: “Ditch the lawn. Find trusted turf pros.”
- Palette:
  - `--sage: #7A8C6E`
  - `--sage-light: #B5C4A8`
  - `--sage-dark: #4A5C40`
  - `--terracotta: #C8603A`
  - `--terracotta-light: #E8927A`
  - `--sand: #E8DFC8`
  - `--sand-dark: #D4C8A8`
  - `--soil: #2C1F14`
  - `--cream: #F5EFE0`
  - `--olive: #6B7340`
  - `--stone: #8C8070`
  - `--white: #FDFAF4`
- Fonts:
  - Playfair Display
  - DM Mono
  - Libre Baskerville
  - Manrope
- Current right hero visual:
  - `.hero-right`
  - `.hero-illustration`
  - `.plant-shapes`
  - `.hero-badge`

## Core concept
Create a premium animated top-down yard transformation scene.

The visual should look like a landscape architect’s plan, a drought-tolerant yard mockup, and a local service-matching interface blended together.

The user should see a simplified residential yard slowly transform from ordinary lawn into a clean San Gabriel Valley xeriscape.

## Visual story
The animation loops through this sequence:

1. A clean top-down yard plan appears.
2. The yard begins as muted green lawn with subtle boundary lines.
3. A warm scanning band slowly moves across the yard from left to right.
4. As the scanner passes, the lawn transforms into xeriscape elements:
   - decomposed granite zones
   - gravel / pebble texture
   - drought-tolerant plant clusters
   - agave or succulent star shapes
   - boulder/river-rock accents
   - drip irrigation linework
   - patio/path geometry
5. Small premium pings appear after the scan:
   - “Water-wise plan”
   - “Rebate check”
   - “SGV contractor match”
   - “Glendora · Pasadena · Covina”
6. The scene rests briefly in the finished state.
7. The loop resets gracefully without a hard jump.

## Feeling to create
The animation should feel:

- premium
- calm
- editorial
- local
- practical
- architectural
- believable
- expensive enough that a contractor would want to be featured on the page

It should not feel like:

- a video game HUD
- cyberpunk
- SaaS slop
- random particles
- a crypto landing page
- a neon AI dashboard
- a heavy 3D demo
- a generic stock illustration

## Preferred implementation
Use a lightweight animation that works directly inside the existing homepage.

Preferred order:

1. Use a `<canvas>` with WebGL if it can be kept clean, fast, and maintainable.
2. If raw WebGL becomes too brittle or overbuilt, use Canvas 2D with WebGL-like polish. Visual quality is more important than forcing WebGL.
3. Preserve the current static hero illustration as a fallback if JavaScript, Canvas, or WebGL fails.

Do not add heavy dependencies unless absolutely necessary.

Avoid Three.js unless the repo already uses it or the implementation remains very small. A polished custom canvas implementation is better than a bloated 3D dependency.

## Integration target
Add the animation inside `.hero-right`.

Recommended structure:

```html
<div class="hero-right">
  <div class="hero-illustration" aria-hidden="true"></div>
  <canvas class="yard-scan-canvas" aria-hidden="true"></canvas>
  <!-- existing plant-shapes fallback can stay -->
  <!-- existing hero-badge should stay unless it visually conflicts -->
</div>
```

The canvas should be decorative and should not interfere with buttons, links, forms, nav, or scrolling.

## CSS requirements
Add CSS for:

```css
.yard-scan-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.hero-badge {
  z-index: 3;
}

.plant-shapes {
  z-index: 0;
}
```

Adjust as needed to preserve the current composition.

The animation should sit behind the badge but above the flat background.

## Composition details
The hero-right should feel like a premium “yard plan board.”

Recommended composition:

- Background: dark sage gradient with soft soil-toned depth.
- Main yard plan: slightly rotated rectangle or polygon, centered and oversized.
- Yard border: thin cream/sand linework.
- Lawn starting state: muted sage/olive green, slightly textured.
- Xeriscape final state: sand, DG, stone, terracotta details, native plant clusters.
- Scan line: soft vertical band with warm terracotta and cream glow. Keep it subtle.
- Labels: small DM Mono-style UI chips, not too many.
- Locality: include small SGV city dots or text labels, but keep them subtle.

## Exact UI labels
Use short labels only. Do not clutter the hero.

Use 3 to 5 of these:

- `Water-wise plan`
- `Rebate check`
- `SGV contractor match`
- `Glendora`
- `Pasadena`
- `Covina`
- `Arcadia`
- `Monrovia`
- `Quote-ready yard`

Labels should appear as tiny refined chips or plan annotations, not big marketing banners.

## Animation timing
Keep the animation slow and premium.

Recommended loop:

- Total duration: 10 to 14 seconds
- Scan sweep: 5 to 7 seconds
- Finished-state hold: 2 to 4 seconds
- Soft reset/crossfade: 2 to 3 seconds

No fast jitter. No flashing. No frantic motion.

## Interaction
Add very subtle interaction only if it stays premium:

- On mouse move or touch move inside `.hero-right`, the scan glow can shift a few pixels.
- Plant clusters or city pings can parallax very slightly.
- Do not make the animation depend on interaction.
- Do not create distracting cursor trails.

On mobile, interaction should not be required.

## Performance requirements
This must be mobile-safe.

Requirements:

- Use `requestAnimationFrame`.
- Set canvas size using `devicePixelRatio`, but cap DPR at 2.
- Handle resize cleanly.
- Pause or reduce animation when `document.hidden` is true.
- Respect `prefers-reduced-motion: reduce`.
- If reduced motion is enabled, render one beautiful finished-state frame and do not animate.
- On mobile widths, reduce object count, label count, texture dots, and particle-like elements.
- No layout thrashing.
- No remote animation libraries.
- No large images.
- No console errors.

## Accessibility requirements
The canvas is decorative.

- Add `aria-hidden="true"` to the canvas.
- Do not put meaningful text only inside canvas unless equivalent text already exists elsewhere on the page.
- Respect reduced motion.
- Preserve contrast and readability of hero copy.
- Do not block keyboard navigation.

## Fallback requirements
If JavaScript is disabled or canvas fails:

- The existing `.hero-illustration`, `.plant-shapes`, and `.hero-badge` should still create a good static visual.
- Do not delete the existing illustration unless replacing it with an equal or better static fallback.
- The homepage should not look broken without the animation.

## Quality bar
The finished result must pass this test:

A local turf or xeriscaping contractor sees the page during a cold call and thinks:

> “This looks more polished than my current website. I would want my business featured here.”

## Anti-slop rules
Do not ship any of the following:

- generic particle clouds
- random floating dots with no yard transformation meaning
- neon blue/purple tech gradients
- AI-looking holograms
- unreadable tiny text spam
- cartoonish icons
- stock-style fake dashboard widgets
- spinning 3D globes
- janky flashing scan lines
- cheap-looking emojis
- huge dependency install for a small visual
- animation that tanks mobile performance

## Build steps
1. Inspect the current homepage file and locate `.hero-right`, `.hero-illustration`, `.plant-shapes`, and `.hero-badge`.
2. Add the canvas element inside `.hero-right` without breaking the existing fallback.
3. Add CSS for canvas layering, fallback visibility, and mobile behavior.
4. Add a small self-contained JS module near the bottom of the file.
5. Initialize the animation only after DOM content is ready.
6. Write clean drawing functions with clear names, such as:
   - `initYardScan()`
   - `resizeYardCanvas()`
   - `drawYardPlan()`
   - `drawLawnState()`
   - `drawXeriscapeState()`
   - `drawScanBand()`
   - `drawPlantCluster()`
   - `drawPlanLabels()`
7. Make sure errors fail silently and leave the static fallback visible.
8. Test desktop and mobile layouts.

## Suggested animation rendering approach
Use a normalized coordinate system so the scene scales cleanly.

Draw these layers:

1. Background gradient
2. Subtle topographic/landscape contour lines
3. Yard boundary polygon
4. Lawn base layer
5. Xeriscape final layer clipped by scan progress
6. DG/gravel dots clipped by scan progress
7. Plant clusters clipped by scan progress
8. Drip linework clipped by scan progress
9. Scanning band and glow
10. City/rebate pings
11. Small annotation labels
12. Soft vignette

The transformation can be controlled by a `progress` value from 0 to 1.

The scan position can be:

```js
const scanX = yardLeft + progress * yardWidth;
```

Clip the xeriscape layer to everything left of `scanX`, while keeping lawn visible to the right.

## Suggested mobile simplification
On screens below 760px:

- Use fewer plant clusters.
- Use 2 or 3 labels maximum.
- Reduce scan glow strength.
- Reduce texture dots by at least 50%.
- Keep the visual readable in a shorter hero layout.

## Acceptance checklist
Before finishing, confirm:

- The hero still loads with no console errors.
- The existing headline/buttons still work.
- The animation appears inside `.hero-right` only.
- The hero badge remains visible.
- Mobile does not feel cluttered.
- Reduced motion renders a static premium frame.
- The site still looks good if JS fails.
- No new paid or remote dependencies were added.
- The animation looks like a yard transformation, not random particles.
- The color palette matches SGV Turf.

## Final response expected from Codex
After implementation, summarize:

1. What files changed.
2. What was added.
3. How to test it locally.
4. Any fallback behavior included.
5. Any mobile or reduced-motion optimizations included.

Do not write a vague summary. Be specific.

## Optional polish if time allows
If the first version is working and clean, add one of these small premium touches:

### Option A: Contractor match pulse
After the yard finishes transforming, a tiny terracotta chip appears:

`Matched to SGV pros`

### Option B: Rebate marker
A subtle marker appears near the transformed yard:

`Rebate check ready`

### Option C: Local city sweep
Small city names softly fade in and out around the yard:

`Glendora · Pasadena · Covina · Arcadia`

Only add one optional polish item. Do not overload the hero.
