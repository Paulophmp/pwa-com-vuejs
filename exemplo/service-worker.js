const cacheName = 'conhecendo-service-workers';
const filesToCacahe = [
  '/',
  'index.html',
  'style.css',
];

self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Installer');
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCacahe);
    }),
  );
});

self.addEventListener('activate', (e) => {
  console.log('[ServiceWorker] Activate');
});

self.addEventListener('fetch', (e) => {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => {
      console.log('[ServiceWorker] Get cache for', e.request.url);
      return response || fetch(e.request);
    }),
  );
});
