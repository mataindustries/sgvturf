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
const source = files.map((file) => readFileSync(file, 'utf8')).join('\n');

const required = [
  'Illustrative planning archetype — not a contractor or business.',
  'SGVTurf is preparing a limited paid ChatGPT Ads beta test, pending platform approval.',
  'homeowner_project_brief',
  'contractor_partner_application',
  'project_brief_submit_success',
  'contractor_application_submit_success',
];
for (const value of required) if (!source.includes(value)) throw new Error(`Missing required readiness content: ${value}`);

const forbidden = [
  '$750 to $3,500',
  '$600 to $2,800',
  '$400 to $2,400',
  'Upper SGV Regional District Programs',
  'Valley County Water District',
  'Suggested Contractor Profiles',
  '6 contractor profiles',
  'href="/#quote"',
];
for (const value of forbidden) if (source.includes(value)) throw new Error(`Found retired or unsupported content: ${value}`);

console.log(`Validated required trust, funnel, analytics, and rebate content across ${files.length} source files.`);
