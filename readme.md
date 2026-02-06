# AB Math Sucks

A/B test duration calculator for people who want the truth, not a pep talk.

## What is this?

You know that test your PM wants to run? The one where you're detecting a 3% lift on a page with 200 daily visitors? This calculator tells you how long that will actually take. (Spoiler: longer than anyone's patience.)

## Features

- **Actual math** - Standard two-proportion z-test sample size calculation. The same formula everyone uses, we just don't lie to you about the results.
- **Tone toggle** - "Aggressive" mode tells you the truth. "Nice" mode tells you the truth but politely, for when you need to share with stakeholders who bruise easily.
- **Reality checks** - Contextual callouts when your inputs suggest you're wasting everyone's time.
- **No signup, no tracking, no BS** - Just a calculator. It runs in your browser. We don't want your email.

## When to use this

- Before you promise a test will "only take a couple weeks"
- When someone asks why you can't "just test it real quick"
- To win arguments with data instead of opinions
- To lose arguments with data instead of opinions (the math doesn't care about your roadmap)

## When not to use this

- When you've already promised a timeline
- When you want to feel good about your testing velocity
- When ignorance is genuinely bliss

## The math

Sample size per variant:

```
n = (2 * p̄ * (1 - p̄) * (Z_α/2 + Z_β)²) / (p1 - p2)²
```

Where:
- `p̄` = pooled conversion rate
- `Z_α/2` = z-score for significance level (1.96 for 95%)
- `Z_β` = z-score for power (0.84 for 80%)
- `p1 - p2` = absolute difference you're trying to detect

Then we divide by your daily traffic and try not to laugh.

## Running locally

It's three files. Open `index.html` in a browser. That's it. No npm install, no build step, no node_modules folder the size of a small planet.

## Deploying

```bash
firebase deploy
```

Or throw it on literally any static host. It's HTML, CSS, and JS. It'll run anywhere.

## Contributing

Found a bug? Open an issue. Want to add a feature? Sure, but keep it simple. This is a calculator, not a platform.

Want to argue about the statistical methodology? Save it. We used the standard formula. Take it up with Ronald Fisher's ghost.

## License

MIT. Do whatever you want with it.

## Credits

Built by Claude Code. Fueled by the memory of every test that "should have only taken two weeks."
