# A/B Test Duration Calculator - Build Prompt

Build a single-page static A/B test duration calculator. Pure HTML/CSS/JS, no frameworks, no build step. This will be hosted on Firebase Hosting.

## Core Functionality

Calculator inputs:
- Baseline conversion rate (%, default 3%)
- Minimum detectable effect (% relative lift, default 10%)
- Daily visitors to the test (number, default 10000)
- Number of variants including control (default 2)
- Statistical significance level (dropdown: 90%, 95%, 99%, default 95%)
- Statistical power (dropdown: 80%, 90%, default 80%)

Use the standard sample size formula for two-proportion z-test. Calculate required sample size per variant, then divide by daily traffic to get duration in days. Round up to whole days.

Output:
- Required sample size per variant
- Total sample size needed
- Estimated test duration in days
- A contextual message based on the duration (see tone system below)

## Tone Toggle System

Include a toggle switch in the top right that switches between "Aggressive" mode (default) and "Nice" mode. The toggle should be labeled "Stakeholder-Safe Mode" when in aggressive mode, and "Unhinged Mode" when in nice mode.

The toggle changes ALL copy on the page - not just results, but input labels, helper text, page title, everything.

### Page Header Copy

**Aggressive:**
- Title: "Should You Even Bother?"
- Subtitle: "A reality check for your testing roadmap"

**Nice:**
- Title: "A/B Test Duration Calculator"
- Subtitle: "Plan your experiments with confidence"

### Input Label Copy

| Field | Aggressive | Nice |
|-------|-----------|------|
| Baseline CR | "What's your current conversion rate? (Be honest)" | "Baseline conversion rate" |
| MDE | "Smallest lift you'd actually care about" | "Minimum detectable effect" |
| Traffic | "How much traffic do you actually have?" | "Daily visitors to test" |
| Variants | "How many variants are you trying to cram in?" | "Number of variants" |
| Significance | "How sure do you need to be? (95% is fine, you're not curing cancer)" | "Statistical significance level" |
| Power | "Statistical power (just leave this alone)" | "Statistical power" |

### Result Duration Copy

Based on calculated days, show contextual message:

| Days | Aggressive | Nice |
|------|-----------|------|
| < 7 | "Suspiciously fast. Either you're sitting on a traffic goldmine or you're about to p-hack yourself into a bad decision." | "Great news - you can run this test quickly. Just ensure you don't stop early if results look promising." |
| 7-14 | "Reasonable. You might actually learn something." | "A solid testing window. You should have reliable results within two weeks." |
| 15-30 | "Your stakeholders will ask 'is it done yet?' approximately 47 times." | "Plan for 2-4 weeks. Consider setting expectations with stakeholders early." |
| 31-60 | "Hope you don't have quarterly planning coming up." | "This test needs 1-2 months. Make sure it aligns with your planning cycles." |
| 61-90 | "This test will outlive at least one of your company's strategic priorities." | "A longer test - consider whether the expected impact justifies the timeline." |
| 91-180 | "By the time this concludes, the person who requested it will have a different job." | "At this duration, consider testing a larger change or focusing on higher-traffic pages." |
| 181-365 | "You're not running a test. You're running a longitudinal study. Apply for a grant." | "This timeline suggests the test may not be practical. Consider alternative approaches." |
| > 365 | "This test will achieve significance approximately never. Just pick the one your CEO likes and move on with your life." | "With current parameters, this test isn't feasible. Try increasing traffic or testing a larger change." |

### Conditional Callouts

Add additional callout messages based on input values. Show these below the main result in a "Reality Check" section.

**Low traffic (< 500/day):**
- Aggressive: "At this traffic level, your test results are statistically indistinguishable from a ouija board."
- Nice: "Your traffic volume may make it difficult to reach statistical significance in a reasonable timeframe."

**Very low traffic (< 100/day):**
- Aggressive: "You don't have a testing program. You have a hope and a prayer."
- Nice: "Consider focusing on higher-traffic pages or accumulating more traffic before testing."

**Tiny MDE (< 5%):**
- Aggressive: "Detecting a X% lift is like trying to hear a whisper at a concert. Possible, but why are you doing this to yourself?"
- Nice: "Detecting small effects requires substantial sample sizes. Consider whether a larger minimum effect would be acceptable."

**High baseline CR (> 40%):**
- Aggressive: "With a conversion rate this high, maybe just take the win and go outside."
- Nice: "Your high baseline conversion rate is great! Smaller relative improvements may still be meaningful in absolute terms."

**Many variants (> 3):**
- Aggressive: "Running X variants means you're not testing a hypothesis, you're running a creative tournament. Respect, but also, good luck."
- Nice: "Multiple variants extend test duration. Consider whether all variants are necessary for this test."

## Design

Brutalist-minimal aesthetic. The humor lands better if the design is deadpan serious.

- Clean white background
- One accent color: #dc2626 (red) for key numbers and the toggle when in aggressive mode, #059669 (green) when in nice mode
- Monospace font (JetBrains Mono or similar from Google Fonts) for all numbers and calculations
- System sans-serif stack for body text
- Large type for the main result (48px+)
- Generous whitespace
- Inputs styled simply - bottom border only, no full boxes
- Mobile responsive (single column on mobile)
- No animations except a subtle transition on the toggle

## File Structure

```
/index.html
/styles.css
/calculator.js
```

Keep it simple. All calculation logic in calculator.js. All copy/strings stored in a config object at the top of the JS file so the tone toggle just swaps which string set is active.

## Additional Details

- Calculate on every input change (no submit button)
- Include a small "How this works" expandable section at the bottom explaining the math (brief, not condescending)
- Add a "Copy results" button that copies a plain text summary to clipboard
- Include basic meta tags for social sharing (og:title, og:description)
- Add a small footer with "Built by [Your Name]" and link placeholder
