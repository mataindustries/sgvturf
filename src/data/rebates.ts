export type RebateProjectTypeId =
  | 'turf-replacement'
  | 'planting-conversion'
  | 'irrigation-upgrade'
  | 'controller-upgrade';

export interface RebateProjectType {
  id: RebateProjectTypeId;
  label: string;
  description: string;
}

export interface RebateEstimateBand {
  min: number;
  max: number;
}

export interface RebateEntry {
  slug: string;
  districtName: string;
  coverageArea: string;
  coverageCities: string[];
  rebateType: string;
  estimatedSavingsRange: string;
  notes: string;
  ctaLabel: string;
  ctaHref: string;
  projectTypes: RebateProjectTypeId[];
  estimatePerSqFt: RebateEstimateBand;
}

export interface RebateFaq {
  question: string;
  answer: string;
}

export const rebateProjectTypes: RebateProjectType[] = [
  {
    id: 'turf-replacement',
    label: 'Turf Removal + Conversion',
    description:
      'Best for broad lawn replacement projects where the yard is being reorganized around lower-water materials.',
  },
  {
    id: 'planting-conversion',
    label: 'Low-Water Replanting',
    description:
      'Useful when the goal is mostly drought-tolerant planting, mulch, and cleaner hydrozones rather than a full rebuild.',
  },
  {
    id: 'irrigation-upgrade',
    label: 'Drip Irrigation Retrofit',
    description:
      'Focused on efficiency improvements tied to planting beds, valves, and simpler distribution.',
  },
  {
    id: 'controller-upgrade',
    label: 'Smart Controller / Nozzle Upgrade',
    description:
      'Best for smaller efficiency upgrades where the existing layout largely stays in place.',
  },
];

export const rebateEntries: RebateEntry[] = [
  {
    slug: 'pasadena-water-and-power',
    districtName: 'Pasadena Water & Power',
    coverageArea:
      'Pasadena municipal utility customers planning front-yard turf reduction or irrigation updates.',
    coverageCities: ['Pasadena'],
    rebateType: 'Water-wise landscape conversion and irrigation companion incentives',
    estimatedSavingsRange: '$750 to $3,500 estimated',
    notes:
      'Illustrative only. Program terms can change with funding cycles, pre-approval rules, and the amount of plant or irrigation work included.',
    ctaLabel: 'Add This to My Project Brief',
    ctaHref: '/#quote',
    projectTypes: ['turf-replacement', 'planting-conversion', 'irrigation-upgrade'],
    estimatePerSqFt: { min: 0.75, max: 1.85 },
  },
  {
    slug: 'upper-sgv-regional-programs',
    districtName: 'Upper SGV Regional District Programs',
    coverageArea:
      'Arcadia, Monrovia, Temple City, San Gabriel, South Pasadena, and nearby SGV member-area homeowners.',
    coverageCities: ['Arcadia', 'Monrovia', 'Temple City', 'San Gabriel', 'South Pasadena'],
    rebateType: 'Landscape conversion rebates for drought-smart front yards',
    estimatedSavingsRange: '$600 to $2,800 estimated',
    notes:
      'Often strongest for projects that combine lawn reduction with plant coverage and basic irrigation modernization. Confirm retailer-specific terms before assuming eligibility.',
    ctaLabel: 'Compare This With My City Plan',
    ctaHref: '/cities/',
    projectTypes: ['turf-replacement', 'planting-conversion', 'irrigation-upgrade'],
    estimatePerSqFt: { min: 0.6, max: 1.4 },
  },
  {
    slug: 'valley-county-water-district',
    districtName: 'Valley County Water District',
    coverageArea:
      'Covina and West Covina-area customers weighing lawn reduction and controller upgrades.',
    coverageCities: ['Covina', 'West Covina'],
    rebateType: 'Turf replacement paired with smart-controller efficiency rebates',
    estimatedSavingsRange: '$400 to $2,400 estimated',
    notes:
      'Illustrative range only. The most generous estimates usually assume a meaningful lawn conversion, not just a small equipment swap.',
    ctaLabel: 'Fold This Into My Estimate',
    ctaHref: '/#quote',
    projectTypes: ['turf-replacement', 'planting-conversion', 'controller-upgrade'],
    estimatePerSqFt: { min: 0.45, max: 1.2 },
  },
  {
    slug: 'golden-state-water-sgv',
    districtName: 'Golden State Water SGV Service Areas',
    coverageArea:
      'Glendora, San Dimas, and selected SGV utility territories focused on efficiency-first upgrades.',
    coverageCities: ['Glendora', 'San Dimas'],
    rebateType: 'High-efficiency irrigation equipment and smart-controller rebates',
    estimatedSavingsRange: '$150 to $1,200 estimated',
    notes:
      'Usually best suited to projects where the yard layout already works and the homeowner is mainly improving irrigation performance.',
    ctaLabel: 'Review the Irrigation Angle',
    ctaHref: '/resources/sgv-irrigation-upgrades-that-make-low-water-landscapes-work/',
    projectTypes: ['irrigation-upgrade', 'controller-upgrade'],
    estimatePerSqFt: { min: 0.18, max: 0.55 },
  },
  {
    slug: 'central-sgv-utility-programs',
    districtName: 'Central SGV Utility Programs',
    coverageArea:
      'Illustrative fit for Alhambra, El Monte, and other mixed-utility neighborhoods across the valley.',
    coverageCities: ['Alhambra', 'El Monte'],
    rebateType: 'Low-water planting and irrigation bundle incentives',
    estimatedSavingsRange: '$350 to $2,000 estimated',
    notes:
      'Use this as a planning benchmark, not a live program feed. Actual utility alignment can vary block by block and by current funding availability.',
    ctaLabel: 'Check the Rebate Hub Notes',
    ctaHref: '/rebates/',
    projectTypes: ['planting-conversion', 'irrigation-upgrade', 'controller-upgrade'],
    estimatePerSqFt: { min: 0.35, max: 1.05 },
  },
];

export const rebateFaqs: RebateFaq[] = [
  {
    question: 'Are these rebate amounts current and guaranteed?',
    answer:
      'No. The page is intentionally framed as an SGV planning reference, so every amount is an estimated range only. Homeowners should confirm current terms, timing, and pre-approval requirements directly with the relevant district or utility before treating any number as real.',
  },
  {
    question: 'Why do the estimates vary so much between projects?',
    answer:
      'Rebate structures often depend on how much turf is removed, whether the project includes planting or irrigation work, and how the local utility defines qualifying scope. A small controller swap and a full front-yard conversion usually do not sit in the same rebate band.',
  },
  {
    question: 'Can I use the estimator before I know my utility?',
    answer:
      'Yes. The estimator is meant to help homeowners sketch a reasonable planning range even when the exact program is not confirmed yet. Selecting a city only narrows the estimate toward the closest SGV-style examples on this page.',
  },
  {
    question: 'What should I bring into a contractor conversation?',
    answer:
      'Bring your approximate lawn size, the kind of project you are considering, and the rebate lane that seems closest to your property. That is usually enough to turn a vague idea into a more structured project brief.',
  },
];
