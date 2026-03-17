import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const lines = ['User-agent: *', 'Allow: /', 'Disallow: /thanks/'];

  if (site) {
    lines.push('', `Sitemap: ${new URL('/sitemap-index.xml', site).toString()}`);
  } else {
    lines.push('', '# Set PUBLIC_SITE_URL to emit an absolute sitemap URL.');
  }

  return new Response(lines.join('\n'), {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
    },
  });
};
