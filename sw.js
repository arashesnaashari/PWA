self.addEventListener("install", e => {
    e.waitUntill(
        caches.open("static").then(
            cache => {
                return cache.addAll([
                    "./","./src/master.css","./images/logo192.png"]);
            })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(res => {
            return res || fetch(e.request);
        })
    );
})