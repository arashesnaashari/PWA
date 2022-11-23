if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw_cashed_pages.js")
      .then((reg) => console.log("Service worker register"))
      .catch((err) => console.log(`erorr ${err}`));
  });
}
