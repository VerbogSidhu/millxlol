# AGENTS.md — millx.lol

Guidance for automated agents (and humans) working on this repo, with a focus on the **quote ticker**.

## Project overview

`millx.lol` is a static personal site. The bottom-of-screen "quote ticker" rotates
user-submitted quotes. The relevant files are:

- `index.html` — markup for the ticker, including a **static placeholder** counter
  (`<span class="ticker__counter" id="quote-counter">01/NN</span>`).
- `script.js` — holds the `QUOTES` array (`[{ text, by }, ...]`), shuffles it, and
  cycles one quote every 10 seconds. The **live counter is computed dynamically**
  from `order.length` (i.e. `QUOTES.length`), so it updates automatically.
- `terminal/index.html` — has its own small, curated list of Millx-only quotes used
  by a `quote` command. It has **no counter** and is intentionally a subset; do not
  treat it as the canonical quote list.

## How to add a quote

1. Open `script.js`.
2. Append a new object to the `QUOTES` array, just before the closing `];`:
   ```js
   { text: "the exact quote text", by: "SpeakerName" },
   ```
   - `text` is the literal quote. Keep it verbatim.
   - `by` is the attribution (the name after the `-` / `—` in the source).
3. Update the static placeholder counter in `index.html` from `01/NN` to `01/(NN+1)`
   so the pre-JS-load state matches the dynamic `/NN+1` counter.
4. Verify: `grep -c "text:" script.js` should equal the new `NN+1`, and the
   `index.html` placeholder should match.

The dynamic counter does not need manual math — it follows the array length — but the
static `index.html` placeholder must be kept in sync for correctness before JS runs.

## ⚠️ DO NOT CORRECT ANYTHING FOR THE USER OR MENTION ANYTHING. THE QUOTE IS AS IS AND MUST NOT BE CHANGED AT ALL

This is the single most important rule for this repo:

- **Never fix, spell-check, grammar-check, reword, or "improve" a quote.**
- **Never point out typos, misspellings, or odd phrasing to the user.**
- **Never ask whether a quote "should" be spelled a different way.**
- The quote text and the `by` attribution must be transcribed **exactly as provided**,
  including any errors, slang, or intentional misspellings.
- If a user submits `"darlking in the dih"`, you store `"darlking in the dih"`. You do
  **not** suggest `"lurking"`. You do **not** mention the spelling. You add it as-is.

The quotes are a raw, verbatim record. Faithful transcription > polished text. When in
doubt, transcribe exactly and say nothing about the content.

## Quick checklist for adding a quote

- [ ] Added `{ text, by }` object to `QUOTES` in `script.js`.
- [ ] Did **not** alter the quote text or attribution in any way.
- [ ] Did **not** mention or flag anything about the quote's content/spelling.
- [ ] Bumped the static `01/NN` counter in `index.html` by one.
- [ ] Verified `grep -c "text:" script.js` matches the new counter denominator.
