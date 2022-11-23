// const casheName = "v2";

// //call instal event
// self.addEventListener("install", (e) => {
//   console.log("Service worker installed");
// });

// //activate event
// self.addEventListener("activate", (e) => {
//   console.log("Service worker activate");
//   //remove unwanted cashes
//   e.waitUntil(
//     caches.keys().then((casheNames) => {
//       return Promise.all(
//         casheNames.map((cache) => {
//           if (cache !== casheName) {
//             console.log("Service worker: clearing old cash");
//             return caches.delete(cache);
//           }
//         })
//       );
//     })
//   );
// });

// //call fetch event
// self.addEventListener("fetch", (e) => {
//   console.log("Service worker : Fetching");
//   e.respondWith(
//     fetch(e.request)
//       .then((res) => {
//         //make copy/clone of response
//         const resClone = res.clone();
//         //Open cahce
//         caches.open(casheName).then((cache) => {
//           //Add response to cahse
//           cache.put(e.request, resClone);
//         });
//         return res;
//       })
//       .catch((err) => caches.match(e.request).then((res) => res))
//   );
// });
