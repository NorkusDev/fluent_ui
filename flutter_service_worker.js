'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"main.dart.js_28.part.js": "abf5f93336c828d90954e111a6592b7a",
"main.dart.js_22.part.js": "6086fe618479ac232ad85544b3cee4a3",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"main.dart.js_14.part.js": "f7931b668b7ad4a617c8449cac94919a",
"main.dart.js_6.part.js": "3ebde0779bdfad0ede3932c74fc732cd",
"main.dart.js_13.part.js": "05be77b8068598e93d08967f74c71163",
"main.dart.js_26.part.js": "e610794e2edc032ed2fded5df6c302b2",
"manifest.json": "1e04e819df5e7720a7659fb598692f21",
"main.dart.js_2.part.js": "a9dc7e18d4f7706ea7d160793a90c8d0",
"icons/Icon-192.png": "ef3b512b1c79d917c832c8c8c75ced88",
"icons/Icon-maskable-512.png": "2650274e44ece6729a43d7ee130fdfbd",
"icons/Icon-maskable-192.png": "ef3b512b1c79d917c832c8c8c75ced88",
"icons/Icon-512.png": "2650274e44ece6729a43d7ee130fdfbd",
"main.dart.js": "6634598fe12bc4c1ffecf3fa86576f9e",
"version.json": "ff966ab969ba381b900e61629bfb9789",
"main.dart.js_3.part.js": "4d17096a695456690646cd60c1cf8c35",
"main.dart.js_1.part.js": "b7edf451ebe68cb190ee7ecd8f345b07",
"main.dart.js_27.part.js": "3e4cfdd13f75429d141bec11b5611bd5",
"main.dart.js_18.part.js": "e585e6a07c9016210b43954b68f7e385",
"assets/NOTICES": "88202b36c449159dc03f895247d0f407",
"assets/fonts/MaterialIcons-Regular.otf": "bda2b48a6329d4ccfc68b2287bca28e6",
"assets/AssetManifest.json": "37ec56a07961aa133f9e2b822ec05915",
"assets/FontManifest.json": "4775101f09c3d30f577c10949e516877",
"assets/AssetManifest.bin.json": "8cf6cc98d947cef6e92744b3b8d9522b",
"assets/AssetManifest.bin": "503fb250ebe6cfbf185f1519bb7cde59",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/fluent_ui/fonts/SegoeIcons.ttf": "5c053a34db297a1a533e62815a9b8827",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"flutter_bootstrap.js": "c599897074b97db4c62386aec09e4486",
"main.dart.js_19.part.js": "0cbb48c9cc7c4758195953b23ee4a064",
"splash/style.css": "1404a5cdf67c618f89467983c828bd26",
"splash/img/light-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/img/light-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/img/dark-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/img/light-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/img/light-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/img/dark-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/img/dark-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/img/dark-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"main.dart.js_17.part.js": "dcc853c752ef5b96c8f3bbab4fc3e269",
"main.dart.js_25.part.js": "b1c4d78884ceb0ac83815e1b603e3ba7",
"main.dart.js_8.part.js": "5962a1ec3107d031e113997a9045ff95",
"main.dart.js_4.part.js": "2c64a6d71bb4f0752408626f91324402",
"main.dart.js_7.part.js": "f46dde4d6f67d8b447eefc97863fb362",
"main.dart.js_15.part.js": "58e6c7cd6fddad39d6d96ea01bb8458c",
"main.dart.js_16.part.js": "eb4a92ff46a0b8267e92be1652dfecdf",
"main.dart.js_21.part.js": "c6a8a7d5dc09afcba84c3ce380067ac6",
"main.dart.js_24.part.js": "0f378ae8d1f9713ab22f37caa9f571eb",
"main.dart.js_20.part.js": "da6ab92d3ab485eef7585821571da6a6",
"main.dart.js_5.part.js": "a5fc544f5dfecdad25fa601443403af9",
"main.dart.js_10.part.js": "89d61a442920f704d287238a123d41d2",
"favicon.png": "aa55c22e0c7bce9da0110b3035be5332",
"main.dart.js_23.part.js": "0513e1c4875c00b1eb4ca04fd2b7b8d0",
"index.html": "d35491eb5c55aa207c01d0a5f3fc4be2",
"/": "d35491eb5c55aa207c01d0a5f3fc4be2",
"main.dart.js_9.part.js": "87b7090ee72e1912a0d98fca493a76f7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
