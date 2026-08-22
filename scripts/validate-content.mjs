import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const sourceRoot = new URL('../src/', import.meta.url).pathname;
const files = [];
const walk = (directory) => {
  for (const name of readdirSync(directory)) {
    const path = join(directory, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(astro|ts)$/.test(name)) files.push(path);
  }
};
walk(sourceRoot);

const sourceByFile = new Map(files.map((file) => [file, readFileSync(file, 'utf8')]));
const source = [...sourceByFile.values()].join('\n');
const required = [
  'Simpler yard care for SGV homeowners',
  'Less lawn. Better yard.',
  'Build My Free Yard Brief',
  'Replace your SGV lawn without guessing.',
  'Planning example — not a real business.',
  'Founding SGV Contractor Test',
  'Free placement for the initial 30-day traffic test',
  'homeowner',
  'contractor',
  'landing_view',
  'primary_cta_click',
  'project_form_start',
  'project_form_success',
  'contractor_cta_click',
  'contractor_form_start',
  'contractor_form_success',
  'form_delivery_error',
  'landingPage',
  'referrer',
  'term',
];
for (const value of required) {
  if (!source.includes(value)) throw new Error(`Missing required paid-traffic content: ${value}`);
}

const forbidden = [
  ['$', '99'].join(''),
  ['6', 'Contractor Profiles'].join(' '),
  ['6', 'contractor profiles'].join(' '),
  'Suggested Contractor Profiles',
  'Ditch the lawn. Build a better SGV yard.',
  ['This repository', 'contains no verified'].join(' '),
  ['No separate public email or phone', 'is verified in this repository'].join(' '),
  'href="/#quote"',
];
for (const value of forbidden) {
  if (source.includes(value)) throw new Error(`Found retired or unsupported content: ${value}`);
}

const exampleNames = [
  'Foothill Dryscape Studio',
  'Citrus Belt Landscape Atelier',
  'Mission Garden Works',
  'Arroyo Outdoor Edit',
  'Canyon Line Xeriscapes',
  'Valley Ground Plan',
];
for (const [file, contents] of sourceByFile) {
  if (file.endsWith('/data/contractors.ts') || file.includes('/project-style-guides/')) continue;
  for (const name of exampleNames) {
    if (contents.includes(name)) throw new Error(`Planning example leaked outside style-guide content: ${name} in ${file}`);
  }
}

const homepage = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
for (const retiredComponent of ['SearchStrip', 'CitiesStrip', 'LeadForm', 'ContractorPricing']) {
  if (homepage.includes(retiredComponent)) throw new Error(`Homepage still includes out-of-scope section: ${retiredComponent}`);
}

console.log(`Validated conversion copy, honest directory state, founder offer, forms, and measurement across ${files.length} source files.`);
