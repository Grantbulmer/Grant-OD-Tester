// Grant OS v2.8.3 Friend Tester Render Stability service worker
// Network-first and clears older cached builds so GitHub Pages/PWA installs do not keep stale code.
const GRANT_OS_CACHE_VERSION = 'grant-os-v2-8-3-friend-tester-render-stability';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(() => caches.match('./index.html')));
    return;
  }

  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});
