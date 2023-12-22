import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: 'Googlebot',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://nomade.finance/sitemap.xml',
  }
}