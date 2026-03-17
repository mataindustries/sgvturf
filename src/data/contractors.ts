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
      'A sample premium profile positioned for homeowners who want strong design direction, simplified plant palettes, and a finished editorial look from the street.',
    specialties: ['Xeriscape Design', 'Native Planting', 'DG & Gravel Layouts'],
    serviceAreas: ['Pasadena', 'South Pasadena', 'Monrovia', 'Glendora'],
    fitHighlights: [
      'Best suited to front-yard redesigns where architecture and curb appeal matter as much as water savings.',
      'Leans toward restrained palettes, layered greens, and clean circulation instead of theme-heavy installations.',
      'Good reference profile for homeowners looking for one clear design point of view.',
    ],
    trustBlurb:
      'This generic profile is written to signal the kind of clear scope, design coherence, and calm communication homeowners usually value when comparing higher-end proposals.',
    ctaTitle: 'Want this kind of design-forward fit?',
    ctaText:
      'Use this sample profile as a benchmark when comparing local firms for planning depth, material restraint, and front-yard composition.',
    metaDescription:
      'Sample SGV contractor profile for a design-forward drought-smart landscape studio serving foothill and character-home neighborhoods.',
    disclaimer:
      'Sample directory profile for layout demonstration only. It is not presented as a real or verified business listing.',
  },
  {
    slug: 'citrus-belt-landscape-atelier',
    name: 'Citrus Belt Landscape Atelier',
    initials: 'CB',
    tone: 'terracotta',
    featured: true,
    tagline: 'Polished suburban refreshes with premium planting structure and practical irrigation planning.',
    summary:
      'A sample contractor concept aimed at larger SGV lots where homeowners want a refined front yard without committing to a highly custom estate-style landscape.',
    specialties: ['Planting Plans', 'Irrigation Retrofits', 'Front Yard Refreshes'],
    serviceAreas: ['Arcadia', 'Temple City', 'San Gabriel', 'West Covina'],
    fitHighlights: [
      'Useful reference for projects that need a composed look on broad suburban frontages.',
      'Balances visual polish with easier upkeep and straightforward irrigation logic.',
      'Well matched to homeowners who want premium results without over-layering the site.',
    ],
    trustBlurb:
      'The write-up is intentionally generic, but it reflects the kind of practical clarity and premium positioning that make a proposal feel reassuring rather than sales-heavy.',
    ctaTitle: 'Comparing premium-but-practical options?',
    ctaText:
      'Keep this sample profile in mind if you want strong layout discipline, clean planting zones, and a lower-maintenance finish.',
    metaDescription:
      'Sample SGV contractor profile focused on premium suburban yard refreshes, irrigation upgrades, and drought-smart planting plans.',
    disclaimer:
      'Sample directory profile for design and content seeding only. No real-world verification or endorsement is implied.',
  },
  {
    slug: 'mission-garden-works',
    name: 'Mission Garden Works',
    initials: 'MG',
    tone: 'olive',
    featured: true,
    tagline: 'Practical lawn-to-landscape conversions for established residential blocks.',
    summary:
      'A sample profile representing a contractor style that feels dependable, organized, and well suited to homeowners who want a clear scope without chasing trend-heavy design.',
    specialties: ['Turf Removal', 'Drip Irrigation', 'Low-Maintenance Planting'],
    serviceAreas: ['Alhambra', 'San Gabriel', 'El Monte', 'Temple City'],
    fitHighlights: [
      'A strong reference point for everyday residential lots that need cleaner structure more than a full artistic redesign.',
      'Prioritizes maintenance ease, reliable layout, and manageable planting plans.',
      'Helpful benchmark for homeowners who want a tidy, durable result and straightforward decision-making.',
    ],
    trustBlurb:
      'This sample profile is meant to feel grounded and credible without inventing reviews, awards, or other verification cues that would be misleading.',
    ctaTitle: 'Need a simpler, steadier project fit?',
    ctaText:
      'Use this profile as a guide when evaluating contractors for clarity of scope, ease of upkeep, and practical front-yard planning.',
    metaDescription:
      'Sample SGV contractor profile centered on practical turf removal, drip irrigation, and low-maintenance residential landscape updates.',
    disclaimer:
      'Sample directory profile only. It illustrates a contractor positioning style and does not describe a real verified company.',
  },
  {
    slug: 'arroyo-outdoor-edit',
    name: 'Arroyo Outdoor Edit',
    initials: 'AO',
    tone: 'sage',
    featured: false,
    tagline: 'Compact-lot planning with stronger geometry, softer planting, and calm curb appeal.',
    summary:
      'A sample boutique profile for homeowners in denser SGV neighborhoods who need every square foot to work harder and look more composed.',
    specialties: ['Compact Yard Planning', 'Entry Hardscape', 'Shade-Sun Balance'],
    serviceAreas: ['South Pasadena', 'Alhambra', 'Pasadena'],
    fitHighlights: [
      'Best used as a benchmark for projects where proportion, circulation, and architecture are major concerns.',
      'Emphasizes fewer materials, sharper layout decisions, and subtle planting repetition.',
      'Good fit for homeowners who care about a tailored look on a modest footprint.',
    ],
    trustBlurb:
      'The language here is intentionally polished, but it stays generic and descriptive so the profile feels useful without implying a real operating business.',
    ctaTitle: 'Working with a compact lot?',
    ctaText:
      'Reference this sample profile when comparing teams for detail sensitivity, entry sequencing, and refined low-water material choices.',
    metaDescription:
      'Sample SGV contractor profile for compact-lot planning, entry hardscape improvements, and refined low-water landscaping.',
    disclaimer:
      'Sample directory profile created for the SGV Turf prototype. It should be treated as illustrative content only.',
  },
  {
    slug: 'canyon-line-xeriscapes',
    name: 'Canyon Line Xeriscapes',
    initials: 'CL',
    tone: 'olive',
    featured: false,
    tagline: 'Foothill-aware yard planning for exposure, slope, and regional planting character.',
    summary:
      'A sample contractor concept tailored to edge-of-valley properties where drainage, grade, and heat response shape the design as much as aesthetics.',
    specialties: ['Slope Planning', 'Drainage-Aware Layouts', 'Foothill Planting'],
    serviceAreas: ['Glendora', 'San Dimas', 'Monrovia'],
    fitHighlights: [
      'Useful reference for projects where site conditions are more complex than a flat lawn swap.',
      'Pairs hardscape restraint with enough planting texture to keep foothill yards feeling settled.',
      'A benchmark profile for homeowners who want resilience without a harsh or overly sparse finish.',
    ],
    trustBlurb:
      'The profile is intentionally generic, but it models the kind of site-aware positioning homeowners often look for when their yard has grade or drainage complications.',
    ctaTitle: 'Need a foothill-ready perspective?',
    ctaText:
      'Compare real prospects against this sample if your project depends on slope handling, stronger zoning, and regionally appropriate planting.',
    metaDescription:
      'Sample SGV contractor profile for foothill properties, drainage-aware xeriscaping, and slope-sensitive landscape planning.',
    disclaimer:
      'Sample directory profile for content seeding purposes only. It is not a real listing and carries no verification claims.',
  },
  {
    slug: 'valley-ground-plan',
    name: 'Valley Ground Plan',
    initials: 'VG',
    tone: 'terracotta',
    featured: false,
    tagline: 'Clean, durable upgrades for warmer SGV yards that need lower maintenance and stronger order.',
    summary:
      'A sample profile framed for homeowners in sun-heavy neighborhoods who want a yard that reads finished, survives heat, and stays manageable week to week.',
    specialties: ['Heat-Tolerant Planting', 'Gravel & Stone Surfaces', 'Suburban Yard Simplification'],
    serviceAreas: ['Covina', 'West Covina', 'El Monte'],
    fitHighlights: [
      'Acts as a good comparison point for larger, warmer lots that need structure more than ornament.',
      'Favors durable materials, evergreen rhythm, and irrigation simplicity.',
      'A practical benchmark for homeowners who want lower upkeep without losing visual warmth.',
    ],
    trustBlurb:
      'This generic profile is deliberately written without ratings, testimonials, or unsupported claims so the presentation remains helpful and non-deceptive.',
    ctaTitle: 'Comparing options for hotter valley lots?',
    ctaText:
      'Use this sample profile to judge how well real candidates speak to heat resilience, long-term upkeep, and clear layout decisions.',
    metaDescription:
      'Sample SGV contractor profile focused on heat-tolerant planting, durable hardscape, and lower-maintenance suburban landscape updates.',
    disclaimer:
      'Sample directory profile only. It is designed to demonstrate presentation style, not represent an actual business.',
  },
];
