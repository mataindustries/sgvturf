export interface ResourceSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  links?: ResourceLink[];
}

export interface ResourceLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ResourceFaq {
  question: string;
  answer: string;
}

export interface ResourceArticle {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  intro: string;
  publishedAt: string;
  publishedLabel: string;
  readTime: string;
  featured: boolean;
  tags: string[];
  relatedCitySlugs: string[];
  relatedRebateSlugs: string[];
  keyTakeaways: string[];
  sections: ResourceSection[];
  lastVerified?: string;
  faqs?: ResourceFaq[];
  ctaTitle: string;
  ctaText: string;
  ctaPrimaryHref?: string;
  ctaPrimaryLabel?: string;
  ctaSecondaryHref?: string;
  ctaSecondaryLabel?: string;
  metaDescription: string;
}

export const resources: ResourceArticle[] = [
  {
    slug: 'sgv-turf-replacement-rebates-2026',
    category: 'Rebates & Eligibility',
    title: 'SGV Turf Replacement Rebates in 2026: What to Check Before You Remove Your Lawn',
    excerpt:
      'Check the property\'s water provider, current program terms, and required approval before lawn removal. See the verified regional and Pasadena examples SGVTurf currently tracks.',
    intro:
      'Do not remove your lawn before confirming eligibility with the program that serves the property and obtaining any required approval. As last verified August 21, 2026, SGVTurf lists a regional SoCal Water$mart base incentive beginning at $2 per square foot for eligible customers of participating agencies. Pasadena Water and Power publishes $2 per square foot, plus $100 per eligible tree for up to five trees. Current terms, funding, and property eligibility still control. Artificial or synthetic turf is not an eligible conversion under the regional SoCal Water$mart lawn-to-garden program.',
    publishedAt: '2026-08-24',
    publishedLabel: 'August 2026',
    readTime: '9 min read',
    featured: true,
    tags: ['Turf Replacement Rebate', 'Eligibility', 'Pasadena'],
    relatedCitySlugs: ['pasadena', 'san-gabriel', 'arcadia'],
    relatedRebateSlugs: ['socal-watersmart-turf-replacement', 'pasadena-water-and-power'],
    keyTakeaways: [
      'Apply and obtain any required approval before lawn removal or other project work.',
      'The property\'s actual water provider, not its city name alone, determines which program may apply.',
      'Artificial or synthetic turf does not qualify for the regional SoCal Water$mart lawn-to-garden rebate.',
    ],
    lastVerified: 'August 21, 2026',
    sections: [
      {
        heading: 'How does the regional turf replacement rebate generally work?',
        paragraphs: [
          'SoCal Water$mart publishes a residential lawn-to-garden turf replacement program for eligible customers of participating regional water agencies. The verified SGVTurf record says the regional base program begins at $2 per square foot. That is a starting point, not a quote for every San Gabriel Valley property.',
          'The program is for an eligible lawn-to-garden conversion. Approval, current terms, and available funding matter. A homeowner should use the official program page to check the current rules, then confirm that the property\'s water provider participates and that the proposed work qualifies.',
          'Do not treat a rebate calculator result, a neighbor\'s approval, or an SGV city name as authorization to start. The program or utility makes the eligibility decision for the address.',
        ],
        links: [
          {
            label: 'Open the official SoCal Water$mart turf replacement program',
            href: 'https://socalwatersmart.com/en/residential/rebates/available-rebates/turf-replacement-program/',
            external: true,
          },
          { label: 'Compare SGVTurf\'s verified rebate records', href: '/rebates/' },
        ],
      },
      {
        heading: 'Why does the property\'s water provider matter?',
        paragraphs: [
          'A mailing address in Pasadena, Arcadia, San Gabriel, or another SGV city does not by itself identify the applicable rebate. Water service boundaries and city boundaries are not the same thing. The account\'s provider is the useful starting fact.',
          'Find the provider name on the current water bill. If the bill or account arrangement is unclear, ask the property owner, landlord, HOA, or utility before relying on a program amount. Then use that provider\'s official source to confirm participation, customer eligibility, required approval, funding status, and the conversion rules that apply to the project.',
          'SGVTurf\'s regional record lists several SGV cities as coverage context, but it is expressly limited to eligible customers of participating agencies. It should not be read as a promise that every address in those cities qualifies.',
        ],
        links: [
          { label: 'See the San Gabriel city guide', href: '/cities/san-gabriel/' },
          { label: 'See the Arcadia city guide', href: '/cities/arcadia/' },
        ],
      },
      {
        heading: 'What rebate examples has SGVTurf verified?',
        paragraphs: [
          'SGVTurf currently publishes two official-source examples, last verified August 21, 2026. The regional SoCal Water$mart residential lawn-to-garden program begins at $2 per square foot for eligible customers of participating agencies. The Pasadena Water and Power program publishes $2 per square foot, plus $100 per eligible tree for up to five trees.',
          'These figures do not establish eligibility for a particular home. Both records remain subject to published conditions, current funding, and required approval.',
          'If the property\'s utility is not represented on the SGVTurf rebate hub, the correct answer is to verify directly with that utility. Do not borrow an amount or rule from a neighboring provider.',
        ],
        links: [{ label: 'Review both verified examples on the SGVTurf rebate hub', href: '/rebates/' }],
      },
      {
        heading: 'What should Pasadena homeowners check?',
        paragraphs: [
          'Pasadena Water and Power is the relevant verified example for eligible PWP residential and commercial customers. Its published incentive is $2 per square foot, plus $100 per eligible tree for up to five trees.',
          'A Pasadena address is not enough to assume PWP eligibility. Confirm that PWP serves the property, review the current official conditions, and obtain required approval before removing turf or beginning work. The published incentive and tree provision are subject to current funding and program rules.',
          'Use the Pasadena city guide for local project context, but use PWP\'s official page for the program decision. SGVTurf does not approve applications or determine eligibility.',
        ],
        links: [
          {
            label: 'Open the official Pasadena Water and Power turf replacement page',
            href: 'https://pwp.cityofpasadena.net/turfreplacement/',
            external: true,
          },
          { label: 'Read the Pasadena landscape guide', href: '/cities/pasadena/' },
        ],
      },
      {
        heading: 'Can I get a rebate for artificial turf?',
        paragraphs: [
          'Not through the regional SoCal Water$mart lawn-to-garden turf replacement program. Its verified program information says synthetic or artificial turf is not an approved conversion option.',
          'Artificial turf can still be evaluated as a separate installation choice, but do not include it in a regional rebate plan or assume that removing living lawn is enough to qualify. Ask the applicable utility about its own current rules if a different local program may apply.',
          'Homeowners comparing artificial turf with planting should separate two decisions: which finished surface fits the yard, and which proposed conversion meets a program\'s terms. The answers may differ.',
        ],
        links: [
          {
            label: 'Compare artificial turf and low-water planting for SGV homes',
            href: '/resources/artificial-turf-versus-low-water-planting-for-sgv-homes/',
          },
        ],
      },
      {
        heading: 'What should I do before demolition?',
        paragraphs: [
          'First, pause lawn removal. Confirm the water provider and locate the official program page. Read the current eligibility and conversion terms for the property type, then complete the application and obtain any approval required before work starts.',
          'Keep the existing lawn in place until the program confirms that you can proceed. Save the applicable terms and approval record with the project file. Record the lawn area carefully, but do not assume your measurement is the final approved square footage.',
          'Once approval status is clear, build the landscape scope around the program requirements and the needs of the site. Irrigation changes, planting zones, drainage, and usable open space should be decided before contractor pricing so each bid covers the same work.',
        ],
        bullets: [
          'Identify the water provider shown on the property\'s current bill.',
          'Open that provider\'s official rebate source, not a search-result summary.',
          'Confirm customer, property, and proposed-conversion eligibility.',
          'Confirm current funding and any required approval directly with the program.',
          'Do not remove lawn or start work until the required approval is in hand.',
          'Save the approval and current terms with the project records.',
        ],
        links: [
          {
            label: 'Plan a drought-smart SGV front yard',
            href: '/resources/planning-a-drought-smart-front-yard-in-the-sgv/',
          },
          {
            label: 'Review irrigation upgrades for a low-water landscape',
            href: '/resources/sgv-irrigation-upgrades-that-make-low-water-landscapes-work/',
          },
        ],
      },
      {
        heading: 'Which program applies to my property?',
        paragraphs: [
          'Use this sequence before adding a rebate to the project budget.',
        ],
        bullets: [
          'Provider: Which water utility appears on the current bill?',
          'Program: Does that provider direct residential customers to a current turf replacement program?',
          'Property: Is this account and property type eligible under the published terms?',
          'Project: Does the planned lawn-to-garden conversion meet the program rules?',
          'Timing: Is approval required before removal or installation begins?',
          'Funding: Is funding currently available, and has the program confirmed the applicable incentive?',
          'Documentation: What approval or records must be retained for the project?',
        ],
        links: [
          { label: 'Start with the SGVTurf rebate hub', href: '/rebates/' },
          { label: 'Build a free homeowner project brief', href: '/sgv-yard-project/' },
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I apply before removing my lawn?',
        answer:
          'Yes. Confirm the property\'s water provider, review the current official terms, apply, and obtain any required approval before lawn removal or other project work.',
      },
      {
        question: 'How much is the turf replacement rebate in the San Gabriel Valley?',
        answer:
          'There is no single SGV-wide amount. As last verified August 21, 2026, the regional SoCal Water$mart base program begins at $2 per square foot for eligible customers of participating agencies. Pasadena Water and Power publishes $2 per square foot, plus $100 per eligible tree for up to five trees. Confirm the applicable amount and eligibility with the property\'s provider.',
      },
      {
        question: 'Does every SGV homeowner qualify for SoCal Water$mart?',
        answer:
          'No blanket eligibility is stated. The verified record applies to eligible customers of participating regional water agencies. Confirm the property\'s provider, participation, current terms, and required approval.',
      },
      {
        question: 'Can I get the regional rebate for artificial turf?',
        answer:
          'No. Synthetic or artificial turf is not an approved conversion option under the regional SoCal Water$mart lawn-to-garden program.',
      },
      {
        question: 'Is a Pasadena address enough to qualify for the PWP program?',
        answer:
          'No. The verified Pasadena example is for eligible Pasadena Water and Power customers. Confirm that PWP serves the property and approves the proposed work before removing turf.',
      },
      {
        question: 'What if my water provider is not listed on SGVTurf?',
        answer:
          'Contact that provider and use its official program source. Do not assume that a regional example or a neighboring utility\'s amount applies to the property.',
      },
    ],
    ctaTitle: 'Turn the verified rebate status into a project-ready brief.',
    ctaText:
      'Use the SGVTurf rebate hub to record the official source, then build a free homeowner project brief with the provider, approval status, and intended yard scope.',
    ctaPrimaryHref: '/sgv-yard-project/',
    ctaPrimaryLabel: 'Build My Free Yard Brief',
    ctaSecondaryHref: '/rebates/',
    ctaSecondaryLabel: 'Review the Rebate Hub',
    metaDescription:
      'Check 2026 SGV turf replacement rebates, Pasadena and regional examples, artificial turf eligibility, and what to confirm before lawn removal.',
  },
  {
    slug: 'planning-a-drought-smart-front-yard-in-the-sgv',
    category: 'Planning & Budget',
    title: 'How to Plan a Drought-Smart Front Yard in the SGV Without Losing Curb Appeal',
    excerpt:
      'A practical framework for reducing lawn, organizing materials, and keeping an SGV front yard polished instead of patchy.',
    intro:
      'The best drought-smart front yards in the San Gabriel Valley do not start with plants. They start with layout: where people walk, where the eye lands from the street, and how much open space the yard really needs.',
    publishedAt: '2026-03-06',
    publishedLabel: 'March 2026',
    readTime: '7 min read',
    featured: true,
    tags: ['Front Yard', 'Planning', 'Budget'],
    relatedCitySlugs: ['pasadena', 'south-pasadena'],
    relatedRebateSlugs: ['socal-watersmart-turf-replacement', 'pasadena-water-and-power'],
    keyTakeaways: [
      'Begin with circulation and open-space needs before selecting plants.',
      'Use fewer materials and repeat them consistently across the yard.',
      'A reduced lawn can still feel welcoming when the edges and entry are clear.',
    ],
    sections: [
      {
        heading: 'Start with structure, not shopping',
        paragraphs: [
          'A lot of homeowners jump straight into choosing gravel, turf alternatives, or a plant list. In practice, the stronger first move is understanding how the front yard is supposed to function. Is it mostly for curb appeal, for children, for a dog run, or simply as a buffer between the street and the house?',
          'Once those priorities are clear, it becomes much easier to decide what should stay open, what can be planted densely, and where hardscape actually adds value instead of clutter.',
        ],
      },
      {
        heading: 'Reduce lawn strategically',
        paragraphs: [
          'A full lawn removal is not always necessary. Sometimes the better option is keeping a smaller, more intentional patch of usable green while converting the rest into layered planting and low-water ground treatments.',
          'That approach often feels more natural in SGV neighborhoods where homeowners still want softness from the street but do not want to keep irrigating an oversized front lawn.',
        ],
        bullets: [
          'Keep lawn only where it serves a real purpose.',
          'Let walkways and entry zones define the composition.',
          'Use planting to frame, not swallow, the house frontage.',
        ],
      },
      {
        heading: 'Choose a palette that can age well',
        paragraphs: [
          'Drought-smart design is easier to maintain when the material and plant palette is narrow. Repeating a few dependable shrubs, grasses, and accent plants creates a calmer look than filling every gap with a new species.',
          'The same rule applies to hardscape. One gravel tone, one paving language, and one or two planting textures usually feel more premium than a yard trying to showcase every idea at once.',
        ],
      },
    ],
    ctaTitle: 'Ready to compare front-yard approaches?',
    ctaText:
      'Use the city and project style pages to compare compact lots, larger suburban frontages, or foothill-style landscapes.',
    metaDescription:
      'Editorial SGV resource on planning a drought-smart front yard with better curb appeal, lower water use, and a clearer design structure.',
  },
  {
    slug: 'artificial-turf-versus-low-water-planting-for-sgv-homes',
    category: 'Design Choices',
    title: 'Artificial Turf vs. Low-Water Planting for SGV Homes: Which Feels Better Long Term?',
    excerpt:
      'A grounded comparison of appearance, maintenance rhythm, heat, and where each option tends to work best in San Gabriel Valley yards.',
    intro:
      'Artificial turf and low-water planting solve different problems. One reduces ongoing garden care in open-use areas. The other creates a more climate-responsive yard with texture, shade potential, and a softer long-term look.',
    publishedAt: '2026-02-12',
    publishedLabel: 'February 2026',
    readTime: '6 min read',
    featured: true,
    tags: ['Artificial Turf', 'Planting', 'Decision Guide'],
    relatedCitySlugs: ['arcadia', 'temple-city'],
    relatedRebateSlugs: ['socal-watersmart-turf-replacement'],
    keyTakeaways: [
      'Artificial turf is strongest in spaces that need durable open-use coverage.',
      'Low-water planting usually ages more naturally and offers more visual depth.',
      'Many SGV yards benefit from a hybrid strategy rather than a single solution.',
    ],
    sections: [
      {
        heading: 'Think about use before appearance',
        paragraphs: [
          'If a yard needs a durable play surface, a dog-friendly run, or a clean evergreen look with minimal weekly maintenance, artificial turf may solve a real functional problem. If the goal is cooling, biodiversity, or a more layered design, planting usually offers more upside.',
          'The mistake is treating turf and planting as purely aesthetic substitutes. They behave differently in heat, maintenance, and how they shape the character of the yard.',
        ],
      },
      {
        heading: 'Heat and texture matter in SGV conditions',
        paragraphs: [
          'In warm inland neighborhoods, exposed artificial turf can feel much hotter than living plant material or shaded gravel beds. That does not mean it is the wrong choice, but it does mean placement matters.',
          'Planting, especially when layered with shrubs and small canopy elements, can create a softer and often more comfortable environment over time. It also changes the yard through the seasons in ways many homeowners prefer.',
        ],
      },
      {
        heading: 'Consider a hybrid layout',
        paragraphs: [
          'One of the most practical SGV strategies is using a smaller area of turf where open surface is genuinely useful, then surrounding it with lower-water planting and clean hardscape.',
          'That keeps the maintenance logic simple while avoiding the flat, all-one-material feeling that can make a yard seem unfinished or overly synthetic.',
        ],
        bullets: [
          'Reserve turf for active-use zones, not every open inch.',
          'Use planting to soften edges and cool the composition.',
          'Let irrigation planning follow the actual use zones of the site.',
        ],
      },
    ],
    ctaTitle: 'Need help deciding what belongs where?',
    ctaText:
      'Compare illustrative project styles to explore planting-first designs, turf zones, or blended layouts.',
    metaDescription:
      'Editorial SGV guide comparing artificial turf and low-water planting for homeowners weighing heat, maintenance, and long-term curb appeal.',
  },
  {
    slug: 'sgv-irrigation-upgrades-that-make-low-water-landscapes-work',
    category: 'Systems & Maintenance',
    title: 'The Irrigation Upgrades That Usually Matter Most in Low-Water SGV Landscapes',
    excerpt:
      'Why many landscape upgrades underperform without a smarter irrigation plan, and which changes tend to have the biggest impact first.',
    intro:
      'A drought-smart yard is only partly a plant palette decision. In many SGV homes, the old irrigation layout is the real bottleneck because it was set up to support wall-to-wall lawn instead of different planting zones.',
    publishedAt: '2026-01-16',
    publishedLabel: 'January 2026',
    readTime: '5 min read',
    featured: false,
    tags: ['Irrigation', 'Maintenance', 'Systems'],
    relatedCitySlugs: ['san-gabriel', 'glendora'],
    relatedRebateSlugs: ['socal-watersmart-turf-replacement'],
    keyTakeaways: [
      'Hydrozoning matters more than simply reducing watering frequency.',
      'Drip and point-source irrigation work best when the planting layout is clear.',
      'Old spray-heavy systems often need simplification, not just new timers.',
    ],
    sections: [
      {
        heading: 'Match the irrigation to the new layout',
        paragraphs: [
          'When a yard shifts from lawn to mixed planting and hardscape, the irrigation design needs to change with it. One broad watering pattern rarely works once the site contains shrub masses, trees, gravel zones, and maybe a small remaining patch of turf.',
          'That is why hydrozoning is so important. Plants with similar water needs should be grouped together so the system can support them accurately instead of forcing compromise everywhere.',
        ],
      },
      {
        heading: 'Simpler is often better',
        paragraphs: [
          'Homeowners sometimes assume a low-water yard needs a highly technical irrigation setup. In reality, many landscapes improve when an old, overly patched system gets simplified into fewer, more legible zones.',
          'That clarity helps with maintenance later on because it is easier to troubleshoot, adjust seasonally, and understand how much water each part of the yard is receiving.',
        ],
      },
      {
        heading: 'Treat irrigation as part of the design',
        paragraphs: [
          'It is tempting to think of irrigation as a hidden technical layer, but it influences whether the finished landscape actually performs well. A clean plan for emitters, valves, and zones supports healthier planting and more predictable maintenance.',
          'For SGV homeowners, that usually means asking irrigation questions early instead of after the planting plan is already fixed.',
        ],
      },
    ],
    ctaTitle: 'Looking for irrigation-aware project examples?',
    ctaText:
      'The city and project style pages highlight approaches that emphasize irrigation retrofits, lower-maintenance planting, and practical system planning.',
    metaDescription:
      'Editorial SGV article on irrigation upgrades, hydrozoning, and why low-water landscapes need a better system plan to perform well.',
  },
  {
    slug: 'what-makes-an-sgv-yard-feel-premium-after-turf-removal',
    category: 'Editorial Perspective',
    title: 'What Makes an SGV Yard Feel Premium After Turf Removal?',
    excerpt:
      'A look at the small design moves that make water-wise landscapes feel intentional, settled, and neighborhood-appropriate rather than improvised.',
    intro:
      'Premium does not have to mean elaborate. In SGV landscape work, it often means the yard looks edited: the hardscape aligns, the plant spacing makes sense, and the palette feels calm from the street.',
    publishedAt: '2025-12-10',
    publishedLabel: 'December 2025',
    readTime: '6 min read',
    featured: false,
    tags: ['Premium Look', 'Curb Appeal', 'Editorial'],
    relatedCitySlugs: ['pasadena', 'monrovia'],
    relatedRebateSlugs: ['socal-watersmart-turf-replacement'],
    keyTakeaways: [
      'The most premium yards usually rely on restraint rather than excess.',
      'Clean edges and repetition matter as much as plant selection.',
      'A water-wise landscape should still feel tied to the architecture of the home.',
    ],
    sections: [
      {
        heading: 'Premium usually means edited',
        paragraphs: [
          'When homeowners say they want a premium result, they are often responding to clarity more than cost. The planting is not random, the materials do not fight each other, and the eye can understand the composition quickly from the street.',
          'That level of order is especially important after turf removal, because a former lawn leaves a large visual field that can either become elegant or feel unresolved.',
        ],
      },
      {
        heading: 'Architecture should still lead',
        paragraphs: [
          'A refined yard frames the house instead of competing with it. Older homes may want softer planting and classic edges, while more contemporary facades can handle stronger geometry and bolder material contrast.',
          'Either way, the landscape feels more expensive when it appears to belong to the house rather than simply occupying the same lot.',
        ],
      },
      {
        heading: 'Restraint ages better',
        paragraphs: [
          'Over-designed landscapes often lose their appeal once the novelty fades or maintenance slips. A tighter plant palette, clearer spacing, and durable materials are easier to keep looking good over time.',
          'That is one reason the strongest SGV drought-smart yards tend to feel calm and settled instead of busy. They are easier to live with and easier to maintain.',
        ],
      },
    ],
    ctaTitle: 'Want a clearer benchmark for a refined result?',
    ctaText:
      'Browse the project style guides and city guides to compare approaches for compact historic lots, larger suburban yards, or foothill-facing properties.',
    metaDescription:
      'Editorial SGV guide to what makes a drought-smart yard feel premium after turf removal, including restraint, edges, and architectural fit.',
  },
];
