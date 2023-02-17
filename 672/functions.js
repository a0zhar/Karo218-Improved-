// Initialize the passcount and failcount in localStorage
localStorage.passcount = localStorage.passcount || 0;
localStorage.failcount = localStorage.failcount || 0;

function setupDateElements() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  document.getElementById("date").innerHTML = `${day}/${month}/${year}`;

  setTimeout(function () {
    let hours = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
    document.getElementById("clock").innerHTML = `${hours}:${minutes}`;
  }, 1000);

  updateClock();
}

function setupEventListeners() {
  // The parent node, element with id of MyItems
  // Selects All Elements with the pl-info attribute added
  // loops trough all of them
  document
    .getElementById("MyItems")
    .querySelectorAll("[pl-info]")
    .forEach((plElm) => {
      // When cursor is on one of the payload buttons, show its info.
      plElm.addEventListener("mouseover", () => {
        msgs2.innerHTML = plElm.getAttribute("pl-info");
      });
      // When cursor isn't on the button anymore, reset msgs2 text.
      plElm.addEventListener("mouseout", () => {
        msgs2.innerHTML = "waiting for payload selection";
      });
    });
}

setupEventListeners();
setupDateElements();

// Show the caching progress
window.applicationCache.addEventListener("progress", ({ loaded, total }) => {
  let progress = Math.round((loaded / total) * 100);
  ScrOverlay.style.display = "block";
  cacheUPDtxt.innerHTML = `Installing Offline Cache: ${progress}%`;
  CacheBar.style.width = `${progress}%`;
});
window.applicationCache.addEventListener("cached", () => {
  cacheUPDtxt.innerHTML = "Page is Cached";
});
window.applicationCache.addEventListener("updateready", () => {
  cacheUPDtxt.innerHTML = "Page is Cached";
});
window.applicationCache.addEventListener("error", () => {
  cacheUPDtxt.innerHTML = "Error Installing Cache";
});

function addScript(src) {
  let head = document.getElementsByTagName("head")[0];
  let existingScript = document.getElementById("expload");

  // If it has already been added before...
  if (existingScript) head.removeChild(existingScript);

  let script = document.createElement("script");
  script.src = src;
  script.id = "expload";
  head.appendChild(script);
}

function loadBinFile(element) {
  LoadedMSG = element.getAttribute("pl-loadedmsg");
  PLfile = `bin/${element.getAttribute("pl-file")}`;

  if (PLfile.includes("hen")) {
    document.getElementById("msgs2").innerHTML = "Jailbreaking, please wait";
    setTimeout(jailbreak, 500);
  }

  setTimeout(() => {
    addScript("../common/loader.js");
  }, 2000);
}
