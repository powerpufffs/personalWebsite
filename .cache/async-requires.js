// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-fancy-js": () => import("../src/pages/fancy.js" /* webpackChunkName: "component---src-pages-fancy-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-mobile-js": () => import("../src/pages/mobile.js" /* webpackChunkName: "component---src-pages-mobile-js" */),
  "component---src-pages-nice-js": () => import("../src/pages/nice.js" /* webpackChunkName: "component---src-pages-nice-js" */),
  "component---src-pages-testing-js": () => import("../src/pages/testing.js" /* webpackChunkName: "component---src-pages-testing-js" */)
}

