self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/main.css',
        '/css/nav.css',
        '/script.js',
        '/png/f1.png',
        '/png/f2.png',
        '/png/f3.png',
        '/png/f4.png',
        '/png/f5.png',
        '/png/f6.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});