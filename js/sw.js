event.waitUntil (
  caches.open(staticCacheName).then(function(cache){
    return cache.addAll([
      'skeleton',
      'js/main.js',
      'css/main.css',
      'img/icon.jpg']);
    })
  );

self.addEventListener('fetch', function(event){
  var requestURL = new URL(event.request.url);

  if (requestURL.origin === location.origin) {
    if (requestURL.pathname ==='/'){
      event.respondWith(caches.match('/skeleton'));
      return;
    }
  }
})
self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request));
});