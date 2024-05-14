const version = 'v1.0';
const CACHE_NAME = `STATIC_CACHE_${version}`;
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/style.css',
        '/css/sectionStyles.css',
        '/css/1024_styles.css',
        '/css/768_styles.css',
        '/script/app.js',
        '/images/me_light.JPG',
        '/images/me_dark.JPG',
        '/images/favicon.png',
        'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((allCaches) => {
      return Promise.all(
        allCaches.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response;
      else {
        return fetch(event.request).then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      }
    })
  );
});
