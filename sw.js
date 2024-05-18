const version = 'v1.1';
const CACHE_NAME = `STATIC_CACHE_${version}`;
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/css/1024_styles.css',
        '/css/768_styles.css',
        '/css/sectionStyles.css',
        '/css/style.css',
        '/images/favicon.png',
        '/images/me_dark.JPG',
        '/images/me_light.JPG',
        '/script/app.js',
        'https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&display=swap',
        'https://fonts.gstatic.com/s/comicneue/v8/4UaErEJDsxBrF37olUeD_wHL8pxULilENlY.woff2',
        'https://fonts.gstatic.com/s/comicneue/v8/4UaErEJDsxBrF37olUeD_xHM8pxULilENlY.woff2',
        'https://fonts.gstatic.com/s/comicneue/v8/4UaHrEJDsxBrF37olUeD96rp57F2IwM.woff2',
        'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
        'https://use.fontawesome.com/releases/v5.8.1/webfonts/fa-brands-400.woff2',
        'https://use.fontawesome.com/releases/v5.8.1/webfonts/fa-regular-400.woff2',
        'https://use.fontawesome.com/releases/v5.8.1/webfonts/fa-solid-900.woff2',
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
