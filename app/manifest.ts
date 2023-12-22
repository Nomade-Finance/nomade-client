import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nomade Finance',
    short_name: 'NomadeFi',
    description: 'Accédez aux cryptos en toute simplicité',
    start_url: '/',
    display: 'standalone',
    background_color: '#123463',
    theme_color: '#123463',
    icons: [
      {
        "src": "/favicons/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
    },
    {
        "src": "/favicons/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
    },
    {
      "src": "/favicons/safari-pinned-tab.svg",
      "sizes": "any",
      "type": "image/svg+xml",
      "purpose": "maskable"
    }
    ],
  }
}