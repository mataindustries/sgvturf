export type ContractorTone = 'sage' | 'terracotta' | 'olive';

export interface ContractorProfile {
  slug: string;
  name: string;
  initials: string;
  tone: ContractorTone;
  featured: boolean;
  tagline: string;
  summary: string;
  specialties: string[];
  serviceAreas: string[];
  fitHighlights: string[];
  trustBlurb: string;
  ctaTitle: string;
  ctaText: string;
  metaDescription: string;
  disclaimer: string;
}

export const contractors: ContractorProfile[] = [
  {
    slug: 'foothill-dryscape-studio',
    name: 'Foothill Dryscape Studio',
    initials: 'FD',
    tone: 'sage',
    featured: true,
    tagline: 'Concept-forward drought-smart yards for foothill and character-home settings.',
    summary:
      'An editorial reference profile for homeowners who want strong design direction, simplified plant palettes, and a finished look from the street.',
    specialties: ['Xeriscape Design', 'Native Planting', 'DG & Gravel Layouts'],
    serviceAreas: ['Pasadena', 'South Pasadena', 'Monrovia', 'Glendora'],
    fitHighlights: [
      'Best suited to front-yard redesigns where architecture and curb appeal matter as much as water savings.',
      'Leans toward restrained palettes, layered greens, and clean circulation instead of theme-heavy installations.',
      'Good reference profile for homeowners looking for one clear design point of view.',
    ],
    trustBlurb:
      'A strong fit for homeowners who value clear scope, design coherence, and calm communication when comparing higher-end proposals.',
    ctaTitle: 'Want this kind of design-forward fit?',
    ctaText:
      'Use this profile as a benchmark when comparing local firms for planning depth, material restraint, and front-yard composition.',
    metaDescription:
      'Editorial SGV contractor profile for a design-forward drought-smart landscape studio serving foothill and character-home neighborhoods.',
    disclaimer:
      'Editorial reference profile created to illustrate this project style and planning approach.',
  },
  {
    slug: 'citrus-belt-landscape-atelier',
    name: 'Citrus Belt Landscape Atelier',
    initials: 'CB',
    tone: 'terracotta',
    featured: true,
    tagline: 'Polished suburban refreshes with premium planting structure and practical irrigation planning.',
    summary:
      'An editorial reference profile aimed at larger SGV lots where homeowners want a refined front yard without committing to a highly custom estate-style landscape.',
    specialties: ['Planting Plans', 'Irrigation Retrofits', 'Front Yard Refreshes'],
    serviceAreas: ['Arcadia', 'Temple City', 'San Gabriel', 'West Covina'],
    fitHighlights: [
      'Useful reference for projects that need a composed look on broad suburban frontages.',
      'Balances visual polish with easier upkeep and straightforward irrigation logic.',
      'Well matched to homeowners who want premium results without over-layering the site.',
    ],
    trustBlurb:
      'A useful comparison point for homeowners who want practical clarity and premium positioning without a sales-heavy tone.',
    ctaTitle: 'Comparing premium-but-practical options?',
    ctaText:
      'Keep this profile in mind if you want strong layout discipline, clean planting zones, and a lower-maintenance finish.',
    metaDescription:
      'Editorial SGV contractor profile focused on premium suburban yard refreshes, irrigation upgrades, and drought-smart planting plans.',
    disclaimer:
      'Editorial reference profile created to illustrate this project style and planning approach.',
  },
  {
    slug: 'mission-garden-works',
    name: 'Mission Garden Works',
    initials: 'MG',
    tone: 'olive',
    featured: true,
    tagline: 'Practical lawn-to-landscape conversions for established residential blocks.',
    summary:
      'An editorial reference profile representing a contractor style that feels dependable, organized, and well suited to homeowners who want a clear scope without chasing trend-heavy design.',
    specialties: ['Turf Removal', 'Drip Irrigation', 'Low-Maintenance Planting'],
    serviceAreas: ['Alhambra', 'San Gabriel', 'El Monte', 'Temple City'],
    fitHighlights: [
      'A strong reference point for everyday residential lots that need cleaner structure more than a full artistic redesign.',
      'Prioritizes maintenance ease, reliable layout, and manageable planting plans.',
      'Helpful benchmark for homeowners who want a tidy, durable result and straightforward decision-making.',
    ],
    trustBlurb:
      'A grounded fit for homeowners who value straight answers, manageable upkeep, and a clear plan.',
    ctaTitle: 'Need a simpler, steadier project fit?',
    ctaText:
      'Use this profile as a guide when evaluating contractors for clarity of scope, ease of upkeep, and practical front-yard planning.',
    metaDescription:
      'Editorial SGV contractor profile centered on practical turf removal, drip irrigation, and low-maintenance residential landscape updates.',
    disclaimer:
      'Editorial reference profile created to illustrate this project style and planning approach.',
  },
  {
    slug: 'arroyo-outdoor-edit',
    name: 'Arroyo Outdoor Edit',
    initials: 'AO',
    tone: 'sage',
    featured: false,
    tagline: 'Compact-lot planning with stronger geometry, softer planting, and calm curb appeal.',
    summary:
      'An editorial reference profile for homeowners in denser SGV neighborhoods who need every square foot to work harder and look more composed.',
    specialties: ['Compact Yard Planning', 'Entry Hardscape', 'Shade-Sun Balance'],
    serviceAreas: ['South Pasadena', 'Alhambra', 'Pasadena'],
    fitHighlights: [
      'Best used as a benchmark for projects where proportion, circulation, and architecture are major concerns.',
      'Emphasizes fewer materials, sharper layout decisions, and subtle planting repetition.',
      'Good fit for homeowners who care about a tailored look on a modest footprint.',
    ],
    trustBlurb:
      'A refined comparison point for homeowners who care about proportion, entry sequence, and a tailored look on a modest footprint.',
    ctaTitle: 'Working with a compact lot?',
    ctaText:
      'Reference this profile when comparing teams for detail sensitivity, entry sequencing, and refined low-water material choices.',
    metaDescription:
      'Editorial SGV contractor profile for compact-lot planning, entry hardscape improvements, and refined low-water landscaping.',
    disclaimer:
      'Editorial reference profile created to illustrate this project style and planning approach.',
  },
  {
    slug: 'canyon-line-xeriscapes',
    name: 'Canyon Line Xeriscapes',
    initials: 'CL',
    tone: 'olive',
    featured: false,
    tagline: 'Foothill-aware yard planning for exposure, slope, and regional planting character.',
    summary:
      'An editorial reference profile tailored to edge-of-valley properties where drainage, grade, and heat response shape the design as much as aesthetics.',
    specialties: ['Slope Planning', 'Drainage-Aware Layouts', 'Foothill Planting'],
    serviceAreas: ['Glendora', 'San Dimas', 'Monrovia'],
    fitHighlights: [
      'Useful reference for projects where site conditions are more complex than a flat lawn swap.',
      'Pairs hardscape restraint with enough planting texture to keep foothill yards feeling settled.',
      'A benchmark profile for homeowners who want resilience without a harsh or overly sparse finish.',
    ],
    trustBlurb:
      'A useful benchmark for homeowners whose yards have slope, drainage, or exposure issues that matter as much as planting style.',
    ctaTitle: 'Need a foothill-ready perspective?',
    ctaText:
      'Compare real prospects against this profile if your project depends on slope handling, stronger zoning, and regionally appropriate planting.',
    metaDescription:
      'Editorial SGV contractor profile for foothill properties, drainage-aware xeriscaping, and slope-sensitive landscape planning.',
    disclaimer:
      'Editorial reference profile created to illustrate this project style and planning approach.',
  },
  {
    slug: 'valley-ground-plan',
    name: 'Valley Ground Plan',
    initials: 'VG',
    tone: 'terracotta',
    featured: false,
    tagline: 'Clean, durable upgrades for warmer SGV yards that need lower maintenance and stronger order.',
    summary:
      'An editorial reference profile framed for homeowners in sun-heavy neighborhoods who want a yard that reads finished, survives heat, and stays manageable week to week.',
    specialties: ['Heat-Tolerant Planting', 'Gravel & Stone Surfaces', 'Suburban Yard Simplification'],
    serviceAreas: ['Covina', 'West Covina', 'El Monte'],
    fitHighlights: [
      'Acts as a good comparison point for larger, warmer lots that need structure more than ornament.',
      'Favors durable materials, evergreen rhythm, and irrigation simplicity.',
      'A practical benchmark for homeowners who want lower upkeep without losing visual warmth.',
    ],
    trustBlurb:
      'A strong comparison point for homeowners prioritizing heat resilience, durability, and a cleaner long-term baseline.',
    ctaTitle: 'Comparing options for hotter valley lots?',
    ctaText:
      'Use this profile to judge how well real candidates speak to heat resilience, long-term upkeep, and clear layout decisions.',
    metaDescription:
      'Editorial SGV contractor profile focused on heat-tolerant planting, durable hardscape, and lower-maintenance suburban landscape updates.',
    disclaimer:
      'Editorial reference profile created to illustrate this project style and planning approach.',
  },
];
