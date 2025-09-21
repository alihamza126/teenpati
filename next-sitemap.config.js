// next-sitemap.config.mjs
import siteMetadata from './src/lib/siteMetaData.js'

export default {
  siteUrl: siteMetadata.siteUrl,
  generateRobotsTxt: true,
  outDir: './out', // since you’re using `output: export`
  changefreq: 'daily',
  priority: 0.7,
}
