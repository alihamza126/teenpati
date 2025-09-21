import siteMetadata from './src/lib/siteMetaData'


export default function manifest() {
  return {
    name: siteMetadata.title,
    short_name: siteMetadata.title,
    description: siteMetadata.description,
    start_url: siteMetadata.siteUrl,
    display: 'standalone',
    background_color: '#111827',
    theme_color: '#fff',
    icons: [
      {
        // src: '/logo.png',
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon-16x16.png',
        // src: '/logo.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        // src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512',
        // src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}