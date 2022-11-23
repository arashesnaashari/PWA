const casheName = "v1";

const casheAssets = [
  "sw/index.html",
  "sw/about.html",
  "sw/css/style.css",
  "sw/main.js",
];

//call instal event
self.addEventListener("install", (e) => {
  console.log("Service worker installed");
  e.waitUntil(
    caches
      .open(casheName)
      .then((cashe) => {
        console.log("Service worker : cashing files");
        cashe.addAll(casheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

//activate event
self.addEventListener("activate", (e) => {
  console.log("Service worker activate");
  //remove unwanted cashes
  e.waitUntil(
    caches.keys().then((casheNames) => {
      return Promise.all(
        casheNames.map((cache) => {
          if (cache !== casheName) {
            console.log("Service worker: clearing old cash");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

//call fetch event
self.addEventListener("fetch", (e) => {
  console.log("Service worker : Fetching");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
