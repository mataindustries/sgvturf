export interface RebateEntry {
  slug: string;
  districtName: string;
  coverageArea: string;
  coverageCities: string[];
  rebateType: string;
  publishedIncentive: string;
  notes: string;
  officialUrl: string;
  lastVerified: string;
}
export interface RebateFaq { question: string; answer: string; }

export const rebateEntries: RebateEntry[] = [
  {
    slug: 'socal-watersmart-turf-replacement',
    districtName: 'SoCal Water$mart',
    coverageArea: 'Eligible customers of participating regional water agencies. Confirm the water provider for the property.',
    coverageCities: ['Arcadia', 'Monrovia', 'Temple City', 'San Gabriel', 'South Pasadena', 'Alhambra', 'El Monte', 'Covina', 'West Covina', 'Glendora', 'San Dimas'],
    rebateType: 'Residential lawn-to-garden turf replacement',
    publishedIncentive: 'Regional base program begins at $2 per square foot',
    notes: 'Subject to current terms and funding. Pre-approval and program requirements matter. Synthetic/artificial turf is not an approved conversion option.',
    officialUrl: 'https://socalwatersmart.com/en/residential/rebates/available-rebates/turf-replacement-program/',
    lastVerified: 'August 21, 2026',
  },
  {
    slug: 'pasadena-water-and-power',
    districtName: 'Pasadena Water and Power',
    coverageArea: 'Eligible Pasadena Water and Power residential and commercial customers.',
    coverageCities: ['Pasadena'],
    rebateType: 'Eligible turf replacement and tree incentive',
    publishedIncentive: '$2 per square foot, plus $100 per eligible tree for up to five trees',
    notes: 'Subject to published conditions, current funding, and required approval. Confirm eligibility before removing turf or starting work.',
    officialUrl: 'https://pwp.cityofpasadena.net/turfreplacement/',
    lastVerified: 'August 21, 2026',
  },
];

export const rebateFaqs: RebateFaq[] = [
  { question: 'Is artificial turf eligible for the regional turf-replacement rebate?', answer: 'No. SoCal Water$mart states that synthetic/artificial turf is not an approved conversion option. Evaluate artificial turf as a separate installation choice, not as a rebate-eligible lawn-to-garden conversion.' },
  { question: 'Should I remove turf before applying?', answer: 'Do not start based on this page alone. Confirm the property’s water provider, read the current official terms, and obtain any required pre-approval before removing turf or starting work.' },
  { question: 'What if my utility is not listed here?', answer: 'No amount is published unless it was verified from an official source for this pass. Treat the status as “Verify with your utility” and do not assume a regional or neighboring utility amount applies.' },
];
