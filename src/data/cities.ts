export interface CityGuide {
  slug: string;
  name: string;
  headline: string;
  intro: string;
  narrative: string[];
  commonNeeds: string[];
  localNotes: string[];
  nearbyCities: string[];
  ctaTitle: string;
  ctaText: string;
  metaDescription: string;
}

export const cities: CityGuide[] = [
  {
    slug: 'pasadena',
    name: 'Pasadena',
    headline: 'Historic neighborhoods, mature trees, and front yards that need water-wise structure.',
    intro:
      'Pasadena projects often balance architecture, curb appeal, and drought-smart planting without losing the polished feel of older homes.',
    narrative: [
      'Across Pasadena, homeowners are usually working with a mix of heritage planting, broad front lawns, and irrigation that was designed for a much wetter landscape style. The strongest projects tend to preserve shade, simplify the hardscape, and replace thirsty turf with layered planting that still feels intentional from the sidewalk.',
      'Craftsman homes, mid-century properties, and denser in-town lots all call for a slightly different approach, but the common thread is restraint: clean edges, durable materials, and a planting palette that can handle hot inland afternoons without looking sparse.',
    ],
    commonNeeds: [
      'Front-yard lawn reduction that still feels neighborhood-appropriate',
      'Drip irrigation retrofits for older planting beds and tree canopies',
      'A more editorial entry sequence with gravel, native shrubs, and low-water color',
    ],
    localNotes: [
      'Mature trees often drive both shade patterns and root-zone decisions.',
      'Older homes benefit from landscape plans that feel architectural rather than overly desert-themed.',
      'Many homeowners want lower water use without losing a refined, finished curb appeal.',
    ],
    nearbyCities: ['South Pasadena', 'San Marino', 'Arcadia'],
    ctaTitle: 'Planning a Pasadena-style refresh?',
    ctaText:
      'Browse sample contractor profiles that fit design-forward front yards, irrigation upgrades, and polished drought-tolerant planting plans.',
    metaDescription:
      'Generic Pasadena landscaping guide for SGV homeowners considering turf removal, xeriscaping, and drought-smart front yard upgrades.',
  },
  {
    slug: 'arcadia',
    name: 'Arcadia',
    headline: 'Larger lots, visible curb appeal, and landscapes built to stay tidy through summer heat.',
    intro:
      'Arcadia homeowners often need water-wise landscapes that feel substantial, with room for statement planting and cleaner circulation.',
    narrative: [
      'Arcadia properties frequently have wider setbacks and deeper front yards than many central SGV neighborhoods, which changes the design math. Instead of simply replacing a lawn, homeowners usually need the space organized into clear zones with pathways, specimen planting, and an irrigation plan that is easier to manage.',
      'The most successful yards in this part of the valley feel calm and generous rather than packed. A reduced lawn area, stronger tree placement, and durable decomposed granite or stone surfacing can make a large yard feel more intentional while cutting maintenance load.',
    ],
    commonNeeds: [
      'Large-area turf reduction with a more composed layout',
      'Low-water planting beds that still read as premium from the street',
      'Simple circulation upgrades for broad front yards and side-yard access',
    ],
    localNotes: [
      'Bigger lots benefit from clearer zoning instead of one uninterrupted planting field.',
      'Homeowners often want a premium look without constant seasonal replanting.',
      'Shade, reflected heat, and irrigation efficiency all vary widely across lot depth.',
    ],
    nearbyCities: ['Pasadena', 'Temple City', 'Monrovia'],
    ctaTitle: 'Looking for an Arcadia-ready concept?',
    ctaText:
      'Use the contractor directory to compare sample profiles built around larger lots, premium curb appeal, and practical irrigation planning.',
    metaDescription:
      'Generic Arcadia city guide for drought-smart landscaping, large-lot turf removal, and premium xeriscape planning in the SGV.',
  },
  {
    slug: 'monrovia',
    name: 'Monrovia',
    headline: 'Foothill light, established neighborhoods, and yards that need structure more than lawn.',
    intro:
      'Monrovia landscapes often work best when they lean into shade transitions, foothill heat, and a slightly more natural planting rhythm.',
    narrative: [
      'Monrovia sits in a sweet spot where foothill character and walkable residential streets create real curb-appeal expectations. Homeowners here often want yards that feel relaxed and regional, but still edited enough to complement traditional facades and smaller-lot geometry.',
      'Projects usually focus on replacing patchy lawn, improving drainage around older hardscape, and building layered planting that looks settled instead of newly installed. Good spacing and restrained material choices matter as much as plant selection.',
    ],
    commonNeeds: [
      'Foothill-friendly planting plans that can handle hot spells and cooler nights',
      'Drainage-conscious gravel or DG areas on sloped or uneven lots',
      'Cleaner lawn replacement for compact front yards with strong street visibility',
    ],
    localNotes: [
      'Foothill adjacency makes sun exposure and runoff different from central-valley lots.',
      'Smaller front yards benefit from fewer materials and stronger plant repetition.',
      'Homeowners usually respond well to landscapes that feel established quickly.',
    ],
    nearbyCities: ['Arcadia', 'Duarte', 'Bradbury'],
    ctaTitle: 'Comparing options for Monrovia homes?',
    ctaText:
      'See sample profiles suited to foothill lots, layered planting, and drought-smart updates that still feel settled and neighborhood-specific.',
    metaDescription:
      'Generic Monrovia landscaping guide covering foothill planting, turf replacement, and water-wise front yard planning.',
  },
  {
    slug: 'south-pasadena',
    name: 'South Pasadena',
    headline: 'Compact lots, character homes, and careful upgrades that need to feel timeless.',
    intro:
      'South Pasadena projects usually succeed when water savings come with restraint, craftsmanship, and planting that respects older architecture.',
    narrative: [
      'In South Pasadena, the challenge is rarely just removing turf. Homeowners are usually trying to solve for walkability, curb presence, and proportion on compact lots where every material shift is highly visible. That pushes designs toward fewer moves, better detailing, and planting palettes that age gracefully.',
      'Because many homes already have strong architectural identity, landscapes do better when they frame the structure rather than compete with it. Low-water can still feel lush here, but it usually comes from layered green textures and thoughtful spacing rather than dense floral massing.',
    ],
    commonNeeds: [
      'Front-yard refreshes that feel appropriate for older architecture',
      'Compact planting plans with year-round texture and lower water demand',
      'Hardscape edits that improve circulation without overwhelming the site',
    ],
    localNotes: [
      'Smaller lots amplify every material and spacing decision.',
      'Homeowners often prefer subtle palettes over highly thematic desert looks.',
      'Entry sequencing and sidewalk view matter more than square footage.',
    ],
    nearbyCities: ['Pasadena', 'Alhambra', 'San Gabriel'],
    ctaTitle: 'Need a more tailored South Pasadena look?',
    ctaText:
      'Explore sample contractor profiles geared toward compact lots, architectural sensitivity, and lower-water planting that still feels classic.',
    metaDescription:
      'Generic South Pasadena city page for homeowners planning tasteful turf replacement and drought-smart landscape upgrades.',
  },
  {
    slug: 'san-gabriel',
    name: 'San Gabriel',
    headline: 'Established residential blocks with practical yards that need efficiency and calm curb appeal.',
    intro:
      'San Gabriel homeowners often want landscapes that are easier to maintain, easier to irrigate, and more intentional from the street.',
    narrative: [
      'A lot of San Gabriel properties have functional outdoor space but not always a clear design framework. Turf removal projects here often focus on simplifying care: reducing mowing, improving irrigation coverage, and making the front yard read cleanly with a limited, dependable palette.',
      'Because many homes sit on straightforward residential lots, small layout improvements can have an outsized effect. A defined walkway edge, a gravel shoulder, or better layering around existing trees can quickly make the yard feel planned instead of pieced together over time.',
    ],
    commonNeeds: [
      'Low-maintenance front yards with cleaner planting zones',
      'Efficient irrigation for mixed lawn and shrub areas',
      'Simple material palettes that hold up well through hot summers',
    ],
    localNotes: [
      'Many yards respond well to practical improvements more than full redesigns.',
      'Homeowners often prioritize easier maintenance and neater edges.',
      'A restrained palette can make everyday residential lots feel much more finished.',
    ],
    nearbyCities: ['Temple City', 'Alhambra', 'Rosemead'],
    ctaTitle: 'Planning a practical San Gabriel update?',
    ctaText:
      'Review sample profiles oriented around efficient irrigation, lower-maintenance planting, and straightforward front-yard upgrades.',
    metaDescription:
      'Generic San Gabriel landscaping guide for simple, drought-smart front yard improvements and turf replacement planning.',
  },
  {
    slug: 'temple-city',
    name: 'Temple City',
    headline: 'Family neighborhoods, sunny lots, and landscapes that need to stay neat without constant upkeep.',
    intro:
      'Temple City projects often center on water savings, durable planting, and layouts that still feel welcoming for everyday use.',
    narrative: [
      'Temple City homeowners tend to look for landscaping that is practical first, but still upgraded enough to lift the entire frontage of the house. That often means balancing lower water use with open space, clean lines, and durable materials that can handle regular family traffic.',
      'Where a full redesign is not necessary, strategic lawn reduction paired with stronger planting edges and drip irrigation can make a major difference. The best results usually come from reducing visual clutter and using a tight, repeatable material palette.',
    ],
    commonNeeds: [
      'Durable lawn alternatives for sunny, family-used yards',
      'Planting plans that stay tidy without heavy weekly maintenance',
      'Targeted irrigation upgrades for beds, borders, and foundation planting',
    ],
    localNotes: [
      'Open, sunny lots reward drought-tolerant plants with strong form.',
      'Simple material repetition helps everyday residential yards feel cohesive.',
      'Families often want some flexible open area alongside lower-water planting.',
    ],
    nearbyCities: ['San Gabriel', 'Arcadia', 'Rosemead'],
    ctaTitle: 'Comparing Temple City-friendly styles?',
    ctaText:
      'Browse polished sample profiles that fit sunny lots, practical family yards, and lower-maintenance front-yard upgrades.',
    metaDescription:
      'Generic Temple City guide for turf replacement, practical xeriscape planning, and low-maintenance SGV landscaping.',
  },
  {
    slug: 'alhambra',
    name: 'Alhambra',
    headline: 'Urban SGV lots where every square foot needs to work harder and look more intentional.',
    intro:
      'Alhambra landscapes often benefit from compact planning, sharper edges, and planting that can handle reflected heat from paving and walls.',
    narrative: [
      'In Alhambra, a lot of the design challenge comes from density. Smaller setbacks, driveways, and adjacent hard surfaces can make a yard feel fragmented unless the landscape creates clearer order. Turf replacement projects here usually do well when they prioritize strong geometry and low-water materials that age cleanly.',
      'Because lots are often compact, homeowners can get meaningful impact from relatively small moves: a better walkway alignment, a contained gravel bed, or a simplified plant palette with reliable structure through the year.',
    ],
    commonNeeds: [
      'Compact front-yard redesigns with stronger geometry',
      'Lower-water planting that handles warm walls and paved edges',
      'Cleaner transitions between driveway, walk, and planting zones',
    ],
    localNotes: [
      'Reflected heat can be a bigger issue than total yard size suggests.',
      'Compact yards usually need stronger layout discipline, not more materials.',
      'Simple planting repetition often creates the most premium result.',
    ],
    nearbyCities: ['South Pasadena', 'San Gabriel', 'Monterey Park'],
    ctaTitle: 'Need a smarter layout for an Alhambra lot?',
    ctaText:
      'Explore sample directory profiles focused on compact-yard planning, crisp hardscape, and low-water planting that stays composed.',
    metaDescription:
      'Generic Alhambra city guide for compact-yard turf removal, xeriscaping, and drought-smart hardscape planning.',
  },
  {
    slug: 'el-monte',
    name: 'El Monte',
    headline: 'Warm valley conditions, practical family properties, and landscapes that need real durability.',
    intro:
      'El Monte homeowners often prioritize resilient planting, manageable upkeep, and outdoor spaces that stay useful through long dry periods.',
    narrative: [
      'El Monte projects often start from a practical brief: reduce water demand, lower maintenance, and create a yard that can handle daily use. That tends to favor durable ground planes, well-zoned planting, and irrigation systems that are simpler to manage than older spray-heavy setups.',
      'Where lots have broad exposure, success usually comes from choosing materials that hold their appearance through heat and dust while still keeping enough softness near entries and windows. The result should feel sturdy, not stripped down.',
    ],
    commonNeeds: [
      'Heat-tolerant planting for exposed valley conditions',
      'Durable lawn reduction for active front and side-yard areas',
      'Irrigation simplification with more targeted drip coverage',
    ],
    localNotes: [
      'Full-sun sites benefit from clear hydrozones and sturdy plant selection.',
      'Practical family use often matters as much as design style.',
      'Durability and ease of upkeep are usually top priorities.',
    ],
    nearbyCities: ['South El Monte', 'Baldwin Park', 'Temple City'],
    ctaTitle: 'Looking for durable El Monte options?',
    ctaText:
      'Compare sample contractor profiles shaped around exposed lots, lower-maintenance planting, and practical drought-smart upgrades.',
    metaDescription:
      'Generic El Monte guide for durable water-wise landscaping, irrigation retrofits, and practical turf replacement planning.',
  },
  {
    slug: 'covina',
    name: 'Covina',
    headline: 'Warm inland yards that need lower water use without losing a comfortable, lived-in look.',
    intro:
      'Covina landscapes often do best when they combine a simple structural plan with planting that softens the heat of broad, sunny exposure.',
    narrative: [
      'Covina homeowners often have enough yard area to make meaningful design choices, but not always enough shade or slope to naturally break the site into zones. That is why turf replacement here often works best when the project introduces clear structure first: walkways, gravel fields, planting islands, and a manageable irrigation plan.',
      'A good Covina landscape should feel easy to care for and visually settled. That usually means using strong evergreen forms, a few seasonal accents, and materials that stay clean through dry weather and heavy sun.',
    ],
    commonNeeds: [
      'Sunny front-yard conversions with stronger layout definition',
      'Evergreen, low-water planting that avoids a sparse look',
      'Hardscape and gravel updates that make larger yards feel organized',
    ],
    localNotes: [
      'Broad sun exposure calls for reliable plant structure and heat tolerance.',
      'Larger front yards benefit from a visible layout, not just lawn removal.',
      'Homeowners often want lower maintenance without a severe aesthetic.',
    ],
    nearbyCities: ['West Covina', 'Charter Oak', 'Glendora'],
    ctaTitle: 'Planning a Covina conversion?',
    ctaText:
      'Browse sample profiles geared toward sunny inland lots, stronger site organization, and water-wise planting with year-round presence.',
    metaDescription:
      'Generic Covina landscaping guide for sunny SGV properties, turf removal, and low-water yard planning.',
  },
  {
    slug: 'west-covina',
    name: 'West Covina',
    headline: 'Varied lot sizes, warmer summer exposure, and yards that need a cleaner, more efficient baseline.',
    intro:
      'West Covina projects often revolve around reducing water demand while making larger suburban yards easier to manage and more refined.',
    narrative: [
      'Many West Covina homes have enough outdoor area for a real before-and-after transformation, but the best results usually come from prioritizing order rather than complexity. That can mean narrowing the lawn, introducing defined planting zones, or upgrading the irrigation system so each area gets the right amount of water.',
      'Because summer heat is a real factor, the palette needs to be resilient without becoming monotone. Repetition, texture, and a few durable accent materials usually create the most premium result for the least long-term upkeep.',
    ],
    commonNeeds: [
      'Suburban yard simplification with lower irrigation demand',
      'Heat-ready planting plans for long western and southern exposure',
      'Cleaner material transitions across wider frontages and side yards',
    ],
    localNotes: [
      'Broader yards usually benefit from clearer edges and less fragmentation.',
      'Heat resilience matters as much as aesthetics in the hottest months.',
      'A restrained material palette keeps larger sites feeling calm.',
    ],
    nearbyCities: ['Covina', 'Walnut', 'Baldwin Park'],
    ctaTitle: 'Need a lower-maintenance West Covina plan?',
    ctaText:
      'Use the contractor directory to compare polished sample profiles for suburban yards, irrigation refreshes, and warm-climate planting.',
    metaDescription:
      'Generic West Covina city page for suburban turf replacement, drought-tolerant planting, and efficient landscape planning.',
  },
  {
    slug: 'glendora',
    name: 'Glendora',
    headline: 'Foothill-meets-suburban lots where structure, drainage, and planting rhythm all matter.',
    intro:
      'Glendora yards often need a water-wise plan that responds to slope, sun shifts, and a desire for a composed foothill look.',
    narrative: [
      'Glendora sits at an edge where many yards feel more open, more sloped, or more exposed than central SGV lots. That often changes the project from a straightforward lawn swap into a broader site-planning exercise involving drainage, circulation, and how to make a yard feel anchored.',
      'Low-water does not need to mean stark here. In fact, foothill-adjacent properties usually look best when the palette has enough layering to soften grade changes and enough structure to hold up during the driest part of the year.',
    ],
    commonNeeds: [
      'Slope-aware planting and ground-plane planning',
      'Foothill-style yard refreshes with gravel, native texture, and stronger edges',
      'Irrigation zoning for lots with mixed exposure and grade',
    ],
    localNotes: [
      'Grade and runoff deserve attention early in the planning process.',
      'Foothill lots often look best with layered, regionally appropriate planting.',
      'Stronger hardscape edges can make complex sites feel more composed.',
    ],
    nearbyCities: ['San Dimas', 'Covina', 'Azusa'],
    ctaTitle: 'Looking for a Glendora-appropriate approach?',
    ctaText:
      'Review sample profiles that fit foothill conditions, drainage-aware design, and layered drought-smart planting.',
    metaDescription:
      'Generic Glendora guide for foothill-friendly xeriscaping, slope-aware landscape updates, and SGV turf replacement.',
  },
  {
    slug: 'san-dimas',
    name: 'San Dimas',
    headline: 'Edge-of-valley properties with more sun, more grade changes, and a stronger connection to foothill planting.',
    intro:
      'San Dimas landscapes usually need durable drought-smart planning that can handle exposure while still feeling residential and welcoming.',
    narrative: [
      'San Dimas projects often combine suburban yard size with foothill climate pressures. That means turf replacement decisions are tied to drainage, sun intensity, and how to keep the site looking finished through dry months without overcomplicating maintenance.',
      'A lot of homeowners here want planting that feels regional and resilient, but not austere. The best direction is usually a balanced one: gravel or DG where it helps, low-water planting where it adds softness, and enough evergreen structure to keep the yard grounded year-round.',
    ],
    commonNeeds: [
      'Heat-tolerant front-yard redesigns with strong year-round structure',
      'DG, gravel, or stone surfaces that support slope and drainage needs',
      'Planting palettes that feel regional without looking too sparse',
    ],
    localNotes: [
      'Exposure and grade shifts can drive both drainage and plant choice.',
      'Homeowners often want a foothill sensibility with a polished suburban finish.',
      'Evergreen structure helps drought-smart yards feel complete in every season.',
    ],
    nearbyCities: ['Glendora', 'La Verne', 'Claremont'],
    ctaTitle: 'Comparing ideas for San Dimas properties?',
    ctaText:
      'Explore sample contractor profiles built around foothill heat, drainage-aware planning, and durable water-wise materials.',
    metaDescription:
      'Generic San Dimas landscaping guide for foothill-edge turf replacement, low-water planting, and practical xeriscape planning.',
  },
];

export const cityOptions = cities.map((city) => city.name);
