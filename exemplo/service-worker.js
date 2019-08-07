self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Installer');
});

self.addEventListener('activate', (e) => {
  console.log('[ServiceWorker] Activate');
});

self.addEventListener('fetch', (e) => {
  console.log('[ServiceWorker] Fetch', e.request.url);
});
