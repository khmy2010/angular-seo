const path = require('path');
const CreateFileWebpack = require('create-file-webpack');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

const outputDir = path.join(__dirname, '../dist/ng-seo');

const preloadRoutes = [
  '/',
  '/faq',
  '/outlets',
];

const routePriority100 = [''];
const routePriority80 = [
  '/faq',
  '/outlets'
];

console.log('MANA AKU?');

module.exports = {
  plugins: [
    new PrerenderSPAPlugin({
      staticDir: outputDir,
      renderAfterDocumentEvent: 'prerender-ready',
      args: ['--disable-setuid-sandbox', '--no-sandbox'],
      // Automatically block any third-party requests. 
      // (This can make your pages load faster by not loading non-essential scripts, styles, or fonts.))
      skipThirdPartyRequests: true,
      renderer: new Renderer({
        timeout: 0,
        maxConcurrentRoutes: 1,
        navigationParams: {
          timeout: 0
        },
        // renderAfterTime: 10000
        renderAfterDocumentEvent: 'prerender-ready',
        headless: false
      }),
      postProcess(renderedRoute) {
        // Ignore any redirects.
        renderedRoute.route = renderedRoute.originalRoute
        // Basic whitespace removal. (Don't use this in production.)
        renderedRoute.html = renderedRoute.html.split(/>[\s]+</gmi).join('><')
        // Remove /index.html from the output path if the dir name ends with a .html file extension.
        // For example: /dist/dir/special.html/index.html -> /dist/dir/special.html
        if (renderedRoute.route.endsWith('.html')) {
          renderedRoute.outputPath = path.join(__dirname, outputDir, renderedRoute.route)
        }

        return renderedRoute;
      },
      routes: preloadRoutes,
    })
  ]
};