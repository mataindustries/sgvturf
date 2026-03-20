export interface ResourceSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
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
  ctaTitle: string;
  ctaText: string;
  metaDescription: string;
}

export const resources: ResourceArticle[] = [
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
    relatedRebateSlugs: ['upper-sgv-regional-programs', 'pasadena-water-and-power'],
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
      'Use the city and contractor pages to see which profiles match compact lots, larger suburban frontages, or foothill-style landscapes.',
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
    relatedRebateSlugs: ['upper-sgv-regional-programs', 'valley-county-water-district'],
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
      'Compare contractor profiles by specialty to find approaches oriented toward planting-first designs, turf zones, or blended layouts.',
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
    relatedRebateSlugs: ['golden-state-water-sgv', 'central-sgv-utility-programs'],
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
      'The city and contractor pages highlight profiles that emphasize irrigation retrofits, lower-maintenance planting, and practical system planning.',
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
    relatedRebateSlugs: ['upper-sgv-regional-programs'],
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
      'Browse the contractor profiles and city guides to compare which approaches align with compact historic lots, larger suburban yards, or foothill-facing properties.',
    metaDescription:
      'Editorial SGV guide to what makes a drought-smart yard feel premium after turf removal, including restraint, edges, and architectural fit.',
  },
];
