import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/verification', '/situations', '/cases', '/privacy-policy', '/public-offer'].map(
    (path) => ({ url: new URL(path, 'https://docexpert.company').href }),
  );
}
