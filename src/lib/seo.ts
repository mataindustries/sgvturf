import {
  defaultDescription,
  defaultOgDescription,
  defaultOgTitle,
  defaultSocialImage,
  siteName,
  siteRegionName,
  siteTagline,
} from '../data/site';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export type StructuredData = Record<string, unknown>;

const toSiteUrl = (site?: URL | string | null) => {
  if (!site) {
    return undefined;
  }

  return site instanceof URL ? site : new URL(site);
};

export const toAbsoluteUrl = (value: string, site?: URL | string | null) => {
  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  const siteUrl = toSiteUrl(site);

  if (!siteUrl) {
    return value;
  }

  return new URL(value, siteUrl).toString();
};

export const toCanonicalUrl = (value: string, site?: URL | string | null) => {
  const siteUrl = toSiteUrl(site);

  if (!siteUrl) {
    return undefined;
  }

  return toAbsoluteUrl(value, siteUrl);
};

export const toJsonLd = (entries: StructuredData | StructuredData[] | undefined) => {
  if (!entries) {
    return [];
  }

  return Array.isArray(entries) ? entries : [entries];
};

export const createOrganizationSchema = (site?: URL | string | null): StructuredData => {
  const siteUrl = toSiteUrl(site);
  const baseUrl = siteUrl?.toString();

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    ...(baseUrl ? { '@id': `${baseUrl}#organization`, url: baseUrl } : {}),
    name: siteName,
    description: siteTagline,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: siteRegionName,
    },
  };
};

export const createWebsiteSchema = (site?: URL | string | null): StructuredData => {
  const siteUrl = toSiteUrl(site);
  const baseUrl = siteUrl?.toString();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    ...(baseUrl ? { '@id': `${baseUrl}#website`, url: baseUrl } : {}),
    name: siteName,
    description: defaultDescription,
  };
};

interface ServiceSchemaInput {
  name: string;
  description: string;
  serviceType: string;
  path: string;
  areaServed: string | string[];
  areaType?: 'AdministrativeArea' | 'City';
}

export const createServiceSchema = (
  { name, description, serviceType, path, areaServed, areaType = 'City' }: ServiceSchemaInput,
  site?: URL | string | null,
): StructuredData => {
  const siteUrl = toSiteUrl(site);
  const baseUrl = siteUrl?.toString();
  const serviceAreas = Array.isArray(areaServed) ? areaServed : [areaServed];

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    ...(baseUrl ? { '@id': `${toAbsoluteUrl(path, siteUrl)}#service`, url: toAbsoluteUrl(path, siteUrl) } : {}),
    name,
    description,
    serviceType,
    provider: baseUrl
      ? {
          '@id': `${baseUrl}#organization`,
        }
      : {
          '@type': 'Organization',
          name: siteName,
        },
    areaServed: serviceAreas.map((areaName) => ({
      '@type': areaType,
      name: areaName,
    })),
    audience: {
      '@type': 'Audience',
      audienceType: 'Homeowners',
    },
  };
};

interface ArticleSchemaInput {
  headline: string;
  description?: string;
  path: string;
  datePublished: string;
  image?: string;
  category?: string;
  keywords?: string[];
}

export const createArticleSchema = (
  {
    headline,
    description = defaultDescription,
    path,
    datePublished,
    image = defaultSocialImage,
    category,
    keywords = [],
  }: ArticleSchemaInput,
  site?: URL | string | null,
): StructuredData => {
  const siteUrl = toSiteUrl(site);
  const baseUrl = siteUrl?.toString();
  const articleUrl = siteUrl ? toAbsoluteUrl(path, siteUrl) : path;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    ...(baseUrl
      ? {
          mainEntityOfPage: articleUrl,
          author: { '@id': `${baseUrl}#organization` },
          publisher: { '@id': `${baseUrl}#organization` },
        }
      : {
          author: { '@type': 'Organization', name: siteName },
          publisher: { '@type': 'Organization', name: siteName },
        }),
    image: toAbsoluteUrl(image, siteUrl),
    datePublished,
    dateModified: datePublished,
    ...(category ? { articleSection: category } : {}),
    ...(keywords.length > 0 ? { keywords } : {}),
  };
};

export const createBreadcrumbSchema = (
  items: BreadcrumbItem[],
  site?: URL | string | null,
): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(item.path, site),
  })),
});

export const pageMetaDefaults = {
  title: undefined,
  description: defaultDescription,
  ogTitle: defaultOgTitle,
  ogDescription: defaultOgDescription,
  socialImage: defaultSocialImage,
};
