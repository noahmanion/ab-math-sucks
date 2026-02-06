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
  },
  significance: {
    header: {
      title: "A/B Test Significance Calculator",
      subtitle: "Determine the statistical significance of your test results"
    },
    toggle: {
      label: "Unhinged Mode"
    },
    inputs: {
      controlVisitors: "Control group visitors",
      controlConversions: "Control group conversions",
      variantVisitors: "Variant group visitors",
      variantConversions: "Variant group conversions",
      significanceLevel: "Significance level"
    },
    results: {
      prefix: "Results",
      controlCRLabel: "Control conversion rate",
      variantCRLabel: "Variant conversion rate",
      relativeLiftLabel: "Relative lift",
      absoluteLiftLabel: "Absolute lift",
      pValueLabel: "P-value",
      significanceLabel: "Statistical significance",
      confidenceIntervalLabel: "95% confidence interval"
    },
    messages: {
      sigPositiveLarge: "Statistically significant result. Your variant outperformed control with {confidence}% confidence (p-value: {pValue}). This is a substantial improvement. Consider validating your tracking implementation.",
      sigPositiveMedium: "Statistically significant result. Your variant outperformed control with {confidence}% confidence (p-value: {pValue}). This result is unlikely to be due to chance.",
      sigPositiveSmall: "Statistically significant result. Your variant outperformed control with {confidence}% confidence (p-value: {pValue}). While the lift is modest, it is statistically reliable.",
      sigNegative: "Control outperformed variant. The original experience performed better with {confidence}% confidence (p-value: {pValue}). Consider analyzing why the variant underperformed.",
      notSigClose: "Result not statistically significant. With a p-value of {pValue}, we cannot conclude the variant performed differently from control. The result approaches significance. Consider extending the test if practical.",
      notSigFar: "Result not statistically significant. With a p-value of {pValue}, we cannot conclude the variant performed differently from control. The observed difference is likely due to random variation.",
      noDifference: "No difference detected. Control and variant have identical conversion rates (p = 1.0)."
    },
    realityCheck: {
      sampleAdequacy: "Your sample size was sufficient to detect effects of {minEffect}% or larger at your chosen significance level.",
      minSampleWarning: "With these sample sizes, you had limited statistical power. Results should be interpreted with caution.",
      practicalImpact: "If you maintain {traffic} monthly visitors, this {lift}% lift means approximately {impact} additional conversions per month."
    },
    callouts: {
      mismatchedSamples: "Note: Unequal sample sizes may reduce statistical power. Consider investigating the cause.",
      zeroConversions: "Zero conversions detected in {group}. Verify tracking is implemented correctly.",
      conversionsExceedVisitors: "Conversion count exceeds visitor count. Please verify your inputs.",
      verySmallSample: "Very small sample sizes detected. Results should be interpreted with extreme caution.",
      perfectResults: "Extremely significant results warrant verification of test implementation and data accuracy.",
      highBaseline: "Note: Very high conversion rates may affect the reliability of the normal approximation used in this calculation."
    },
    howItWorks: {
      title: "How this works",
      content: ""
    },
    copyButton: "Copy results"
  }
};

// Aggressive version of significance
COPY.aggressive.significance = {
  header: {
    title: "Did It Actually Work?",
    subtitle: "Find out if your test proved anything or if you just got lucky"
  },
  toggle: {
    label: "Stakeholder-Safe Mode"
  },
  inputs: {
    controlVisitors: "How many people saw the boring version?",
    controlConversions: "How many converted? (The baseline for your ego)",
    variantVisitors: "How many people saw your 'brilliant' idea?",
    variantConversions: "How many converted? (Moment of truth)",
    significanceLevel: "How sure do you need to be?"
  },
  results: {
    prefix: "The Verdict",
    controlCRLabel: "Control conversion rate",
    variantCRLabel: "Variant conversion rate",
    relativeLiftLabel: "Relative lift",
    absoluteLiftLabel: "Absolute lift",
    pValueLabel: "P-value",
    significanceLabel: "Statistical significance",
    confidenceIntervalLabel: "95% confidence interval"
  },
  messages: {
    sigPositiveLarge: "Holy shit, it actually worked. Your variant beat control with {confidence}% confidence. p-value: {pValue}. A {lift}% lift? Either you found something real or something's broken. Double-check your tracking.",
    sigPositiveMedium: "Holy shit, it actually worked. Your variant beat control with {confidence}% confidence. p-value: {pValue}. Go tell everyone, you've earned it.",
    sigPositiveSmall: "Holy shit, it actually worked. Your variant beat control with {confidence}% confidence. p-value: {pValue}. Though let's be honest, a {lift}% lift isn't going to get you promoted. But a win's a win.",
    sigNegative: "Your variant made things worse. Control beat your variant with {confidence}% confidence. p-value: {pValue}. The good news: you prevented a mistake. The bad news: someone has to tell the designer.",
    notSigClose: "Inconclusive. The universe shrugs. p-value: {pValue}. You're close but not there. Resist the urge to call this 'directionally positive' in the readout.",
    notSigFar: "Inconclusive. The universe shrugs. p-value: {pValue}. This isn't even close. The difference you're seeing is probably just noise.",
    noDifference: "No difference detected. You got the exact same conversion rates in both groups. Well, that's boring."
  },
  realityCheck: {
    sampleAdequacy: "With these sample sizes, you could reliably detect a {minEffect}% lift. That's your statistical power at work.",
    minSampleWarning: "Your sample size is too small to detect anything short of a miracle. Run it longer or accept the ambiguity.",
    practicalImpact: "If you get {traffic} monthly visitors, this {lift}% lift means roughly {impact} additional conversions per month."
  },
  callouts: {
    mismatchedSamples: "Your sample sizes are way off. Did your test break partway through or do you just hate statistical power?",
    zeroConversions: "You got zero conversions in {group}. That's not a test result, that's a cry for help.",
    conversionsExceedVisitors: "You have more conversions than visitors. That's not how math works.",
    verySmallSample: "Your sample size is ridiculously small. You should probably run the test longer.",
    perfectResults: "p < 0.001. Either you found the holy grail or your data is lying to you. Seriously, check your implementation.",
    highBaseline: "Your conversion rate is suspiciously high. Make sure you're tracking things correctly."
  },
  howItWorks: {
    title: "How this works (if you care)",
    content: ""
  },
  copyButton: "Copy this result"
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
  tone: typeof localStorage !== 'undefined' ? loadToneFromStorage() : 'aggressive',
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
// LOCALSTORAGE HELPERS
// ============================================================================

function loadToneFromStorage() {
  try {
    return localStorage.getItem('abmath.tone') || 'aggressive';
  } catch (e) {
    console.warn('localStorage unavailable:', e);
    return 'aggressive';
  }
}

function saveToneToStorage(tone) {
  try {
    localStorage.setItem('abmath.tone', tone);
  } catch (e) {
    console.warn('Failed to save tone:', e);
  }
}

// ============================================================================
// PAGE DETECTION
// ============================================================================

function detectPage() {
  const path = window.location.pathname;
  if (path.includes('significance')) return 'significance';
  return 'duration';
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
// SIGNIFICANCE CALCULATOR FUNCTIONS
// ============================================================================

function calculateSignificance(controlVisitors, controlConversions, variantVisitors, variantConversions, significanceLevel) {
  // Validate inputs
  if (controlVisitors <= 0 || variantVisitors <= 0) {
    return null;
  }

  // Convert to numbers
  const n1 = parseFloat(controlVisitors);
  const n2 = parseFloat(variantVisitors);
  const x1 = parseFloat(controlConversions);
  const x2 = parseFloat(variantConversions);

  // Calculate conversion rates
  const p1 = x1 / n1;
  const p2 = x2 / n2;

  // If both rates are identical, p-value = 1.0 (no difference)
  if (p1 === p2) {
    return {
      controlRate: p1,
      variantRate: p2,
      relativeLift: 0,
      absoluteLift: 0,
      zStatistic: 0,
      pValue: 1.0,
      confidenceInterval: { lower: 0, upper: 0 },
      isSignificant: false,
      noDifference: true
    };
  }

  // Calculate pooled proportion
  const pPooled = (x1 + x2) / (n1 + n2);

  // Calculate standard error
  const se = Math.sqrt(pPooled * (1 - pPooled) * (1 / n1 + 1 / n2));

  // Calculate z-statistic
  const z = (p2 - p1) / se;

  // Calculate p-value using approximation of normal distribution
  // For two-tailed test
  const pValue = 2 * (1 - normalCDF(Math.abs(z)));

  // Get z-critical value for confidence interval (using 95% by default)
  const zCritical = 1.96;

  // Calculate confidence interval for difference
  const diff = p2 - p1;
  const seDiff = Math.sqrt((p1 * (1 - p1) / n1) + (p2 * (1 - p2) / n2));
  const marginOfError = zCritical * seDiff;

  return {
    controlRate: p1,
    variantRate: p2,
    relativeLift: p1 > 0 ? ((p2 - p1) / p1) * 100 : 0,
    absoluteLift: (p2 - p1) * 100,
    zStatistic: z,
    pValue: pValue,
    confidenceInterval: {
      lower: diff - marginOfError,
      upper: diff + marginOfError
    },
    isSignificant: pValue < (1 - significanceLevel),
    sampleSize1: n1,
    sampleSize2: n2,
    isPositive: p2 > p1,
    noDifference: false
  };
}

// Approximation of normal CDF
function normalCDF(z) {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const sign = z < 0 ? -1 : 1;
  z = Math.abs(z) / Math.sqrt(2);

  const t = 1.0 / (1.0 + p * z);
  const y = 1.0 - (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t) * Math.exp(-z * z);

  return 0.5 * (1.0 + sign * y);
}

function getSignificanceMessage(results, tone) {
  const copy = COPY[tone].significance.messages;
  const lift = Math.abs(results.relativeLift).toFixed(1);
  const liftPercent = results.absoluteLift.toFixed(2);
  const confidence = ((1 - results.pValue) * 100).toFixed(0);
  const pValue = results.pValue.toFixed(4);

  if (results.noDifference) {
    return copy.noDifference;
  }

  if (results.isSignificant) {
    if (results.isPositive) {
      // Significant positive
      const absLift = Math.abs(results.relativeLift);
      if (absLift > 20) {
        return copy.sigPositiveLarge
          .replace('{confidence}', confidence)
          .replace('{pValue}', pValue)
          .replace('{lift}', lift);
      } else if (absLift > 5) {
        return copy.sigPositiveMedium
          .replace('{confidence}', confidence)
          .replace('{pValue}', pValue);
      } else {
        return copy.sigPositiveSmall
          .replace('{confidence}', confidence)
          .replace('{pValue}', pValue)
          .replace('{lift}', lift);
      }
    } else {
      // Significant negative
      return copy.sigNegative
        .replace('{confidence}', confidence)
        .replace('{pValue}', pValue);
    }
  } else {
    // Not significant
    if (results.pValue < 0.1) {
      return copy.notSigClose.replace('{pValue}', pValue);
    } else {
      return copy.notSigFar.replace('{pValue}', pValue);
    }
  }
}

function checkEdgeCases(controlVisitors, controlConversions, variantVisitors, variantConversions) {
  const n1 = parseFloat(controlVisitors);
  const n2 = parseFloat(variantVisitors);
  const x1 = parseFloat(controlConversions);
  const x2 = parseFloat(variantConversions);
  const copy = getCurrentCopy().significance?.callouts || {};
  const edgeCases = [];

  // Check for validation errors first (these should block calculation)
  if (x1 > n1 || x2 > n2) {
    edgeCases.push({
      type: 'error',
      message: copy.conversionsExceedVisitors || 'Conversion count exceeds visitor count. Please verify your inputs.'
    });
    return edgeCases;
  }

  if (x1 === 0 && x2 === 0) {
    edgeCases.push({
      type: 'error',
      message: (copy.zeroConversions || 'Zero conversions detected in both groups. Verify tracking is implemented correctly.').replace('{group}', 'both groups')
    });
    return edgeCases;
  }

  if (x1 === 0) {
    edgeCases.push({
      type: 'warning',
      message: (copy.zeroConversions || 'Zero conversions detected in control group. Verify tracking is implemented correctly.').replace('{group}', 'control group')
    });
  }

  if (x2 === 0) {
    edgeCases.push({
      type: 'warning',
      message: (copy.zeroConversions || 'Zero conversions detected in variant group. Verify tracking is implemented correctly.').replace('{group}', 'variant group')
    });
  }

  // Check for wildly mismatched sample sizes
  const sizeRatio = Math.max(n1, n2) / Math.min(n1, n2);
  if (sizeRatio > 3) {
    edgeCases.push({
      type: 'warning',
      message: copy.mismatchedSamples || 'Unequal sample sizes detected. This may reduce statistical power.'
    });
  }

  // Check for very small samples
  if (n1 < 30 || n2 < 30) {
    edgeCases.push({
      type: 'error',
      message: copy.verySmallSample || 'Sample sizes are too small for reliable z-test results.'
    });
  } else if (n1 < 100 || n2 < 100) {
    edgeCases.push({
      type: 'warning',
      message: copy.verySmallSample || 'Sample sizes are quite small. Results should be interpreted cautiously.'
    });
  }

  // Check for high baseline rates
  const p1 = x1 / n1;
  const p2 = x2 / n2;
  if (p1 > 0.95 || p2 > 0.95) {
    edgeCases.push({
      type: 'warning',
      message: copy.highBaseline || 'Very high conversion rates may affect the reliability of this calculation.'
    });
  }

  return edgeCases;
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
// SIGNIFICANCE PAGE UPDATE FUNCTIONS
// ============================================================================

function updateSignificanceCopy() {
  const copy = getCurrentCopy().significance;
  if (!copy) return;

  // Header
  const titleEl = document.getElementById('sig-page-title');
  const subtitleEl = document.getElementById('sig-page-subtitle');
  if (titleEl) titleEl.textContent = copy.header.title;
  if (subtitleEl) subtitleEl.textContent = copy.header.subtitle;

  // Toggle label
  const toggleLabel = document.getElementById('toggle-label');
  if (toggleLabel) toggleLabel.textContent = copy.toggle.label;

  // Input labels
  const labels = {
    'label-control-visitors': copy.inputs.controlVisitors,
    'label-control-conversions': copy.inputs.controlConversions,
    'label-variant-visitors': copy.inputs.variantVisitors,
    'label-variant-conversions': copy.inputs.variantConversions,
    'label-sig-significance': copy.inputs.significanceLevel
  };

  Object.entries(labels).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });

  // Results labels
  const resultLabels = {
    'label-control-cr': copy.results.controlCRLabel,
    'label-variant-cr': copy.results.variantCRLabel,
    'label-sig-status': copy.results.significanceLabel,
    'label-p-value': copy.results.pValueLabel,
    'label-relative-lift': copy.results.relativeLiftLabel,
    'label-absolute-lift': copy.results.absoluteLiftLabel
  };

  Object.entries(resultLabels).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });

  // Results prefix
  const prefixEl = document.getElementById('sig-results-prefix');
  if (prefixEl) prefixEl.textContent = copy.results.prefix;

  // Button
  const copyBtn = document.getElementById('sig-copy-button');
  if (copyBtn) copyBtn.textContent = copy.copyButton;

  // How it works
  const howItWorksTitle = document.getElementById('sig-how-it-works-title');
  if (howItWorksTitle) howItWorksTitle.textContent = copy.howItWorks.title;

  // Update theme
  if (state.tone === 'nice') {
    document.body.setAttribute('data-tone', 'nice');
  } else {
    document.body.removeAttribute('data-tone');
  }
}

function updateSignificanceResults() {
  const controlVisitors = parseFloat(document.getElementById('control-visitors')?.value || 0);
  const controlConversions = parseFloat(document.getElementById('control-conversions')?.value || 0);
  const variantVisitors = parseFloat(document.getElementById('variant-visitors')?.value || 0);
  const variantConversions = parseFloat(document.getElementById('variant-conversions')?.value || 0);
  const significanceLevel = parseFloat(document.getElementById('sig-significance')?.value || 0.95);

  // Check edge cases
  const edgeCases = checkEdgeCases(controlVisitors, controlConversions, variantVisitors, variantConversions);
  displayEdgeCases(edgeCases);

  // If validation errors exist, don't calculate
  if (edgeCases.some(e => e.type === 'error')) {
    clearSignificanceResults();
    return;
  }

  const results = calculateSignificance(controlVisitors, controlConversions, variantVisitors, variantConversions, significanceLevel);

  if (!results) {
    clearSignificanceResults();
    return;
  }

  // Update result displays
  const controlCR = (results.controlRate * 100).toFixed(2);
  const variantCR = (results.variantRate * 100).toFixed(2);
  const significance = results.isSignificant ? 'Yes' : 'No';
  const pValue = results.pValue.toFixed(4);
  const relativeLift = results.relativeLift.toFixed(2);
  const absoluteLift = results.absoluteLift.toFixed(3);

  const elements = {
    'value-control-cr': `${controlCR}%`,
    'value-variant-cr': `${variantCR}%`,
    'value-sig-status': significance,
    'value-p-value': pValue,
    'value-relative-lift': `${relativeLift}%`,
    'value-absolute-lift': `${absoluteLift}pp`
  };

  Object.entries(elements).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });

  // Update message
  const message = getSignificanceMessage(results, state.tone);
  const msgEl = document.getElementById('significance-message');
  if (msgEl) msgEl.textContent = message;

  // Check for suspiciously perfect results
  if (results.pValue < 0.001) {
    const callouts = [];
    const copy = getCurrentCopy();
    if (copy.significance?.callouts?.perfectResults) {
      callouts.push({
        type: 'warning',
        message: copy.significance.callouts.perfectResults
      });
    }
    if (callouts.length > 0) {
      displayEdgeCases([...edgeCases, ...callouts]);
    }
  }
}

function clearSignificanceResults() {
  const elements = [
    'value-control-cr',
    'value-variant-cr',
    'value-sig-status',
    'value-p-value',
    'value-relative-lift',
    'value-absolute-lift'
  ];

  elements.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '—';
  });

  const msgEl = document.getElementById('significance-message');
  if (msgEl) msgEl.textContent = '';
}

function displayEdgeCases(edgeCases) {
  const section = document.getElementById('edge-cases-section');
  const content = document.getElementById('edge-cases-content');

  if (!edgeCases || edgeCases.length === 0) {
    if (section) section.style.display = 'none';
    return;
  }

  if (section) section.style.display = 'block';
  if (content) {
    content.innerHTML = edgeCases.map(ec => {
      const color = ec.type === 'error' ? 'border-left: 4px solid var(--accent-color);' : '';
      return `<p class="callout-item" style="${color}">${ec.message}</p>`;
    }).join('');
  }
}

// ============================================================================
// NAVIGATION & STATE SYNC
// ============================================================================

function setActiveNavLink() {
  const page = detectPage();
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if ((page === 'duration' && link.href.includes('index')) ||
        (page === 'significance' && link.href.includes('significance'))) {
      link.classList.add('active');
    }
  });
}

function setupCrossTabSync() {
  window.addEventListener('storage', (e) => {
    if (e.key === 'abmath.tone' && e.newValue !== state.tone) {
      state.tone = e.newValue;
      const toggle = document.getElementById('tone-toggle');
      if (toggle) {
        toggle.checked = (e.newValue === 'nice');
      }
      updateAllCopy();
      updateResults();
      updateCallouts();
    }
  });
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
  saveToneToStorage(state.tone);
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

function handleSignificanceInputChange(event) {
  updateSignificanceResults();
}

function handleSignificanceToneToggle(event) {
  state.tone = event.target.checked ? 'nice' : 'aggressive';
  saveToneToStorage(state.tone);
  updateSignificanceCopy();
  updateSignificanceResults();
}

function handleSignificanceCopyResults() {
  const controlVisitors = parseFloat(document.getElementById('control-visitors')?.value || 0);
  const controlConversions = parseFloat(document.getElementById('control-conversions')?.value || 0);
  const variantVisitors = parseFloat(document.getElementById('variant-visitors')?.value || 0);
  const variantConversions = parseFloat(document.getElementById('variant-conversions')?.value || 0);
  const significanceLevel = parseFloat(document.getElementById('sig-significance')?.value || 0.95);

  const results = calculateSignificance(controlVisitors, controlConversions, variantVisitors, variantConversions, significanceLevel);
  if (!results) return;

  const controlCR = (results.controlRate * 100).toFixed(2);
  const variantCR = (results.variantRate * 100).toFixed(2);
  const message = getSignificanceMessage(results, state.tone);

  const text = `A/B Test Significance Results
-----------------------------
Control Conversion Rate: ${controlCR}%
Variant Conversion Rate: ${variantCR}%
Relative Lift: ${results.relativeLift.toFixed(2)}%
Absolute Lift: ${results.absoluteLift.toFixed(3)} percentage points

P-value: ${results.pValue.toFixed(4)}
Statistically Significant: ${results.isSignificant ? 'Yes' : 'No'}

${message}`;

  navigator.clipboard.writeText(text).then(() => {
    // Show brief feedback
    const button = document.getElementById('sig-copy-button');
    if (!button) return;
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

function initDurationCalculator() {
  // Duration calculator - attach event listeners to inputs
  const baselineInput = document.getElementById('baseline-cr');
  const mdeInput = document.getElementById('mde');
  const trafficInput = document.getElementById('traffic');
  const variantsInput = document.getElementById('variants');
  const significanceSelect = document.getElementById('significance');
  const powerSelect = document.getElementById('power');

  if (baselineInput) baselineInput.addEventListener('input', handleInputChange);
  if (mdeInput) mdeInput.addEventListener('input', handleInputChange);
  if (trafficInput) trafficInput.addEventListener('input', handleInputChange);
  if (variantsInput) variantsInput.addEventListener('input', handleInputChange);
  if (significanceSelect) significanceSelect.addEventListener('change', handleInputChange);
  if (powerSelect) powerSelect.addEventListener('change', handleInputChange);

  // Toggle handler
  const toneToggle = document.getElementById('tone-toggle');
  if (toneToggle) toneToggle.addEventListener('change', handleToneToggle);

  // Copy button
  const copyButton = document.getElementById('copy-button');
  if (copyButton) copyButton.addEventListener('click', handleCopyResults);

  // Initial render
  updateAllCopy();
  updateResults();
}

function initSignificanceCalculator() {
  // Significance calculator - attach event listeners to inputs
  const inputs = [
    'control-visitors',
    'control-conversions',
    'variant-visitors',
    'variant-conversions',
    'sig-significance'
  ];

  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener(id === 'sig-significance' ? 'change' : 'input', handleSignificanceInputChange);
    }
  });

  // Toggle handler
  const toneToggle = document.getElementById('tone-toggle');
  if (toneToggle) {
    toneToggle.addEventListener('change', handleSignificanceToneToggle);
  }

  // Copy button
  const copyButton = document.getElementById('sig-copy-button');
  if (copyButton) {
    copyButton.addEventListener('click', handleSignificanceCopyResults);
  }

  // Initial render
  updateSignificanceCopy();
  updateSignificanceResults();
}

function init() {
  // Set up cross-tab sync
  setupCrossTabSync();

  // Set toggle checkbox to current tone
  const toneToggle = document.getElementById('tone-toggle');
  if (toneToggle) {
    toneToggle.checked = (state.tone === 'nice');
  }

  // Detect which page we're on and initialize accordingly
  const page = detectPage();

  if (page === 'significance') {
    initSignificanceCalculator();
  } else {
    initDurationCalculator();
  }

  // Set active nav link
  setActiveNavLink();
}

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', init);
