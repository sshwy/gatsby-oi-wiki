/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "44b62796ec4238521e5a76a1a0f47812"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "35f9e375141e8f3e94a379bd30696f14"
  },
  {
    "url": "page-data/math/page-data.json",
    "revision": "1fccacd9979a34e7beaf9b127fe847cd"
  },
  {
    "url": "page-data/math/poly/div-mod/page-data.json",
    "revision": "a63000ac286e3cda147d6cdd1f947e22"
  },
  {
    "url": "page-data/math/poly/fft/page-data.json",
    "revision": "5cac0b5385a0afbc7697c3c0ce4a126d"
  },
  {
    "url": "page-data/math/poly/fwt/page-data.json",
    "revision": "a47e6c52413366c58e8467cf221d80b5"
  },
  {
    "url": "page-data/math/poly/intro/page-data.json",
    "revision": "e8d29112814e4f55880f038869d948d5"
  },
  {
    "url": "page-data/math/poly/inv-tri-func/page-data.json",
    "revision": "50a92d2b615e9303c57474f1e28df598"
  },
  {
    "url": "page-data/math/poly/inv/page-data.json",
    "revision": "32334628da0fa3f2d9e1a00ff2fdb6a3"
  },
  {
    "url": "page-data/math/poly/lagrange/page-data.json",
    "revision": "fb42d98151d00c58d6afeb1c4f257022"
  },
  {
    "url": "page-data/math/poly/ln-exp/page-data.json",
    "revision": "67ec344d8cadadf320eda48d2367eacd"
  },
  {
    "url": "page-data/math/poly/multipoint-eval-interpolation/page-data.json",
    "revision": "860475fdc14ca6b67b85520e31f68289"
  },
  {
    "url": "page-data/math/poly/newton/page-data.json",
    "revision": "a624103f7a2d1ee7b1c9343230b4b71a"
  },
  {
    "url": "page-data/math/poly/ntt/page-data.json",
    "revision": "d327678a7c5a2f0b3f4d0a8fd761c600"
  },
  {
    "url": "page-data/math/poly/sqrt/page-data.json",
    "revision": "1b14f2bd61a0bf7904b11354c97ce4a3"
  },
  {
    "url": "page-data/math/poly/tri-func/page-data.json",
    "revision": "3b73b0578bf67249f61f66ef60a3318b"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/pages/page-data.json",
    "revision": "b018b9ee50d4103f36387ad3c2fcca11"
  },
  {
    "url": "page-data/search/page-data.json",
    "revision": "3bde0c154ca8ce7fbed4926b729b38fd"
  },
  {
    "url": "page-data/settings/page-data.json",
    "revision": "c09f7f413cb329bcf7211e4955ddcfa1"
  },
  {
    "url": "page-data/tags/animals/page-data.json",
    "revision": "c5174fae8be6c6231409c4c7bfdc03fa"
  },
  {
    "url": "page-data/tags/chicago/page-data.json",
    "revision": "3d0c07ac2a40f7e34efb2b262c411b6a"
  },
  {
    "url": "page-data/tags/chinese/page-data.json",
    "revision": "6429deb47a7f828940ee7d3a22795df7"
  },
  {
    "url": "page-data/tags/math/page-data.json",
    "revision": "be3a4764af2feec3ac03588908c0dcf3"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "668b7da83ba79d703e347ae3219cb37f"
  },
  {
    "url": "page-data/tags/polynomial/page-data.json",
    "revision": "2c560cc9f86a1d37be80bb3225cccc1b"
  },
  {
    "url": "page-data/tags/test/page-data.json",
    "revision": "f1de0b026c0e6181dac0d2e76324d0d8"
  },
  {
    "url": "page-data/tags/zoos/page-data.json",
    "revision": "fd3b2b8fc9c78c0f712f2b88a0acd67e"
  },
  {
    "url": "page-data/tags/中文/page-data.json",
    "revision": "0cdc4458160bc5f8cd9c7fe47d975ef3"
  },
  {
    "url": "page-data/test/page-data.json",
    "revision": "29066c03780fe0d91f4fb5ea375a5831"
  },
  {
    "url": "15-eef4694b8e7202e55a29.js"
  },
  {
    "url": "17757bf87520686e179ce312b80d666e25b65c83-3e11b6d0a2cd704f5a02.js"
  },
  {
    "url": "5de1d9917bc7801582665e1533c183f2d7fd2157-df12d9133adc216e4bf7.js"
  },
  {
    "url": "app-b02c09aefaf28aa437f8.js"
  },
  {
    "url": "bab4896a-e8ff0456cc9378fbff15.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e00da1ea3e7fe3ae77e6.js"
  },
  {
    "url": "component---src-pages-404-js-9da7e1ba8bb35545444d.js"
  },
  {
    "url": "component---src-pages-pages-js-411ac4c6fbe4d080b920.js"
  },
  {
    "url": "component---src-pages-search-js-2668c4713a46d965190f.js"
  },
  {
    "url": "component---src-pages-settings-tsx-7621c61f27a4065ca3aa.js"
  },
  {
    "url": "component---src-pages-tags-js-a942c18722879f5970a7.js"
  },
  {
    "url": "component---src-templates-doc-js-0d075537d6e628563a0c.js"
  },
  {
    "url": "component---src-templates-tags-js-ec9f7d58ec38e4486cb2.js"
  },
  {
    "url": "framework-6bf65813ef0f9943b78c.js"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "styles-d3259afcef90844d6efd.js"
  },
  {
    "url": "webpack-runtime-2f15614ed96bcaab2cad.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4a62e6a313c3f620a5dc69c0e5189a1d"
  },
  {
    "url": "styles.1c5aaac32b2e86deff0f.css"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a64367b2f20302a9d6f214569017f012"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(json)$/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(woff|woff2)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff)$/, new workbox.strategies.NetworkOnly(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-b02c09aefaf28aa437f8.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
