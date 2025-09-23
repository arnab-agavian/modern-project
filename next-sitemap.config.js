/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.themoderncircle.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: './public',
  // exclude: [
  //   '/employers-dashboard/**',
  //   '/candidates-dashboard/**',
  //   '/privacypolicy',
  // ],
  transform: async (config, url) => {
    let priority = 0.7;
    if (url === '/') priority = 1.0;
    if (url.startsWith('/blog')) priority = 0.8;

    return {
      loc: url,
      changefreq: 'weekly',
      priority,
      lastmod: new Date().toISOString(),
    };
  },

};
