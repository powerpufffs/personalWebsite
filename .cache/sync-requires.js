const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/i537245/code/notgo/personalWebsite/.cache/dev-404-page.js"))),
  "component---src-pages-fancy-js": hot(preferDefault(require("/Users/i537245/code/notgo/personalWebsite/src/pages/fancy.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/i537245/code/notgo/personalWebsite/src/pages/index.js"))),
  "component---src-pages-mobile-js": hot(preferDefault(require("/Users/i537245/code/notgo/personalWebsite/src/pages/mobile.js"))),
  "component---src-pages-nice-js": hot(preferDefault(require("/Users/i537245/code/notgo/personalWebsite/src/pages/nice.js"))),
  "component---src-pages-testing-js": hot(preferDefault(require("/Users/i537245/code/notgo/personalWebsite/src/pages/testing.js")))
}

