// ============================================================================
// COPY CONFIGURATION - All text content for aggressive and nice modes
// ============================================================================

const COPY = {
  aggressive: {
    header: {
      title: "Should You Even Bother?",
      subtitle: "A reality check for your testing roadmap"
    },
    toggle: {
      label: "Stakeholder-Safe Mode"
    },
    inputs: {
      baseline: "What's your current conversion rate? (Be honest)",
      mde: "Smallest lift you'd actually care about",
      traffic: "How much traffic do you actually have?",
      variants: "How many variants are you trying to cram in?",
      significance: "How sure do you need to be? (95% is fine, you're not curing cancer)",
      power: "Statistical power (just leave this alone)"
    },
    results: {
      prefix: "The Verdict",
      samplesLabel: "Samples per variant",
      totalLabel: "Total samples needed",
      durationLabel: "Test duration"
    },
    durationMessages: {
      lt7: "Suspiciously fast. Either you're sitting on a traffic goldmine or you're about to p-hack yourself into a bad decision.",
      d7_14: "Reasonable. You might actually learn something.",
      d15_30: "Your stakeholders will ask 'is it done yet?' approximately 47 times.",
      d31_60: "Hope you don't have quarterly planning coming up.",
      d61_90: "This test will outlive at least one of your company's strategic priorities.",
      d91_180: "By the time this concludes, the person who requested it will have a different job.",
      d181_365: "You're not running a test. You're running a longitudinal study. Apply for a grant.",
      gt365: "This test will achieve significance approximately never. Just pick the one your CEO likes and move on with your life."
    },
    callouts: {
      lowTraffic: "At this traffic level, your test results are statistically indistinguishable from a ouija board.",
      veryLowTraffic: "You don't have a testing program. You have a hope and a prayer.",
      tinyMDE: "Detecting a {mde}% lift is like trying to hear a whisper at a concert. Possible, but why are you doing this to yourself?",
      highBaseline: "With a conversion rate this high, maybe just take the win and go outside.",
      manyVariants: "Running {variants} variants means you're not testing a hypothesis, you're running a creative tournament. Respect, but also, good luck."
    },
    howItWorks: {
      title: "How this works (if you care)",
      content: ""
    },
    copyButton: "Copy this reality check"
  },
  nice: {
    header: {
      title: "A/B Test Duration Calculator",
      subtitle: "Plan your experiments with confidence"
    },
    toggle: {
      label: "Unhinged Mode"
    },
    inputs: {
      baseline: "Baseline conversion rate",
      mde: "Minimum detectable effect",
      traffic: "Daily visitors to test",
      variants: "Number of variants",
      significance: "Statistical significance level",
      power: "Statistical power"
    },
    results: {
      prefix: "Results",
      samplesLabel: "Samples per variant",
      totalLabel: "Total samples needed",
      durationLabel: "Estimated duration"
    },
    durationMessages: {
      lt7: "Great news - you can run this test quickly. Just ensure you don't stop early if results look promising.",
      d7_14: "A solid testing window. You should have reliable results within two weeks.",
      d15_30: "Plan for 2-4 weeks. Consider setting expectations with stakeholders early.",
      d31_60: "This test needs 1-2 months. Make sure it aligns with your planning cycles.",
      d61_90: "A longer test - consider whether the expected impact justifies the timeline.",
      d91_180: "At this duration, consider testing a larger change or focusing on higher-traffic pages.",
      d181_365: "This timeline suggests the test may not be practical. Consider alternative approaches.",
      gt365: "With current parameters, this test isn't feasible. Try increasing traffic or testing a larger change."
    },
    callouts: {
      lowTraffic: "Your traffic volume may make it difficult to reach statistical significance in a reasonable timeframe.",
      veryLowTraffic: "Consider focusing on higher-traffic pages or accumulating more traffic before testing.",
      tinyMDE: "Detecting small effects requires substantial sample sizes. Consider whether a larger minimum effect would be acceptable.",
      highBaseline: "Your high baseline conversion rate is great! Smaller relative improvements may still be meaningful in absolute terms.",
      manyVariants: "Multiple variants extend test duration. Consider whether all variants are necessary for this test."
    },
    howItWorks: {
      title: "How this works",
      content: ""
    },
    copyButton: "Copy results"
  }
};

// ============================================================================
// Z-SCORE MAPPINGS
// ============================================================================

const Z_SCORES = {
  significance: {
    0.90: 1.645,
    0.95: 1.96,
    0.99: 2.576
  },
  power: {
    0.80: 0.842,
    0.90: 1.282
  }
};

// ============================================================================
// STATE MANAGEMENT
// ============================================================================

const state = {
  tone: 'aggressive',
  inputs: {
    baseline: 3,
    mde: 10,
    traffic: 10000,
    variants: 2,
    significance: 0.95,
    power: 0.80
  },
  results: null
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

function getDurationText(days) {
  if (days === 1) return '1 day';
  if (days < 365) return `${formatNumber(days)} days`;

  const years = Math.floor(days / 365);
  const remainingDays = days % 365;

  if (remainingDays === 0) {
    return years === 1 ? '1 year' : `${years} years`;
  }

  return `${years} year${years > 1 ? 's' : ''}, ${remainingDays} days`;
}

function getCurrentCopy() {
  return COPY[state.tone];
}

// ============================================================================
// STATISTICAL CALCULATION
// ============================================================================

function calculateSampleSize() {
  const { baseline, mde, traffic, variants, significance, power } = state.inputs;

  if (!baseline || !mde || !traffic || baseline < 0 || mde <= 0 || traffic <= 0) {
    return null;
  }

  // Convert percentages to decimals
  const p1 = baseline / 100;
  const p2 = p1 * (1 + mde / 100);

  // Clamp p2 to valid range [0, 1]
  const clampedP2 = Math.min(Math.max(p2, 0), 1);

  const zAlpha = Z_SCORES.significance[significance];
  const zBeta = Z_SCORES.power[power];

  const p1_term = p1 * (1 - p1);
  const p2_term = clampedP2 * (1 - clampedP2);

  const numerator = Math.pow(zAlpha + zBeta, 2) * (p1_term + p2_term);
  const denominator = Math.pow(clampedP2 - p1, 2);

  if (denominator === 0) {
    return null;
  }

  const samplesPerVariant = Math.ceil(numerator / denominator);
  const totalSamples = samplesPerVariant * variants;
  const durationDays = Math.ceil(totalSamples / traffic);

  return {
    samplesPerVariant,
    totalSamples,
    durationDays
  };
}


// ============================================================================
// DURATION MESSAGE SELECTION
// ============================================================================

function getDurationMessage(days) {
  const messages = getCurrentCopy().durationMessages;

  if (days < 7) return messages.lt7;
  if (days < 15) return messages.d7_14;
  if (days < 31) return messages.d15_30;
  if (days < 61) return messages.d31_60;
  if (days < 91) return messages.d61_90;
  if (days < 181) return messages.d91_180;
  if (days < 365) return messages.d181_365;
  return messages.gt365;
}

// ============================================================================
// CONDITIONAL CALLOUTS
// ============================================================================

function getActiveCallouts() {
  const { traffic, mde, baseline, variants } = state.inputs;
  const callouts = getCurrentCopy().callouts;
  const active = [];

  // Very low traffic
  if (traffic < 100) {
    active.push(callouts.veryLowTraffic);
  } else if (traffic < 500) {
    active.push(callouts.lowTraffic);
  }

  // Tiny MDE
  if (mde < 5) {
    active.push(callouts.tinyMDE.replace('{mde}', mde));
  }

  // High baseline
  if (baseline > 40) {
    active.push(callouts.highBaseline);
  }

  // Many variants
  if (variants > 3) {
    active.push(callouts.manyVariants.replace('{variants}', variants));
  }

  return active;
}

// ============================================================================
// UI UPDATE FUNCTIONS
// ============================================================================

function updateAllCopy() {
  const copy = getCurrentCopy();

  // Header
  document.getElementById('page-title').textContent = copy.header.title;
  document.getElementById('page-subtitle').textContent = copy.header.subtitle;

  // Toggle label
  document.getElementById('toggle-label').textContent = copy.toggle.label;

  // Input labels
  document.getElementById('label-baseline').textContent = copy.inputs.baseline;
  document.getElementById('label-mde').textContent = copy.inputs.mde;
  document.getElementById('label-traffic').textContent = copy.inputs.traffic;
  document.getElementById('label-variants').textContent = copy.inputs.variants;
  document.getElementById('label-significance').textContent = copy.inputs.significance;
  document.getElementById('label-power').textContent = copy.inputs.power;

  // Results labels
  document.getElementById('results-prefix').textContent = copy.results.prefix;
  document.getElementById('label-samples').textContent = copy.results.samplesLabel;
  document.getElementById('label-total').textContent = copy.results.totalLabel;
  document.getElementById('label-duration').textContent = copy.results.durationLabel;

  // Button
  document.getElementById('copy-button').textContent = copy.copyButton;

  // How it works
  document.getElementById('how-it-works-title').textContent = copy.howItWorks.title;

  // Update theme
  if (state.tone === 'nice') {
    document.body.setAttribute('data-tone', 'nice');
  } else {
    document.body.removeAttribute('data-tone');
  }
}

function updateResults() {
  const results = calculateSampleSize();

  if (!results) {
    document.getElementById('value-samples').textContent = '—';
    document.getElementById('value-total').textContent = '—';
    document.getElementById('value-duration').textContent = '—';
    document.getElementById('duration-message').textContent = '';
    return;
  }

  state.results = results;

  // Update result values
  document.getElementById('value-samples').textContent = formatNumber(results.samplesPerVariant);
  document.getElementById('value-total').textContent = formatNumber(results.totalSamples);
  document.getElementById('value-duration').textContent = getDurationText(results.durationDays);

  // Update duration message
  document.getElementById('duration-message').textContent = getDurationMessage(results.durationDays);
}

function updateCallouts() {
  const callouts = getActiveCallouts();
  const section = document.getElementById('callouts-section');
  const content = document.getElementById('callout-content');

  if (callouts.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';
  content.innerHTML = callouts.map(callout => `<p class="callout-item">${callout}</p>`).join('');
}

// ============================================================================
// EVENT HANDLERS
// ============================================================================

function handleInputChange(event) {
  const id = event.target.id;
  let value;

  if (id === 'significance' || id === 'power') {
    value = parseFloat(event.target.value);
  } else if (id === 'variants') {
    value = Math.max(1, Math.floor(parseFloat(event.target.value) || 1));
  } else {
    value = parseFloat(event.target.value) || 0;
  }

  // Map input IDs to state keys
  const keyMap = {
    'baseline-cr': 'baseline',
    'mde': 'mde',
    'traffic': 'traffic',
    'variants': 'variants',
    'significance': 'significance',
    'power': 'power'
  };

  const stateKey = keyMap[id];
  if (stateKey) {
    state.inputs[stateKey] = value;
  }

  updateResults();
  updateCallouts();
}

function handleToneToggle(event) {
  state.tone = event.target.checked ? 'nice' : 'aggressive';
  updateAllCopy();
  updateResults();
  updateCallouts();
}

function handleCopyResults() {
  if (!state.results) return;

  const { samplesPerVariant, totalSamples, durationDays } = state.results;
  const { baseline, mde, traffic } = state.inputs;
  const message = getDurationMessage(durationDays);

  const text = `A/B Test Duration Estimate
--------------------------
Baseline CR: ${baseline}%
Minimum Detectable Effect: ${mde}%
Daily Visitors: ${formatNumber(traffic)}

Results:
- Samples per variant: ${formatNumber(samplesPerVariant)}
- Total samples needed: ${formatNumber(totalSamples)}
- Estimated duration: ${getDurationText(durationDays)}

${message}`;

  navigator.clipboard.writeText(text).then(() => {
    // Show brief feedback
    const button = document.getElementById('copy-button');
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    setTimeout(() => {
      button.textContent = originalText;
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}

// ============================================================================
// INITIALIZATION
// ============================================================================

function init() {
  // Attach event listeners to inputs
  document.getElementById('baseline-cr').addEventListener('input', handleInputChange);
  document.getElementById('mde').addEventListener('input', handleInputChange);
  document.getElementById('traffic').addEventListener('input', handleInputChange);
  document.getElementById('variants').addEventListener('input', handleInputChange);
  document.getElementById('significance').addEventListener('change', handleInputChange);
  document.getElementById('power').addEventListener('change', handleInputChange);

  // Toggle handler
  document.getElementById('tone-toggle').addEventListener('change', handleToneToggle);

  // Copy button
  document.getElementById('copy-button').addEventListener('click', handleCopyResults);

  // Initial render
  updateAllCopy();
  updateResults();
}

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', init);
