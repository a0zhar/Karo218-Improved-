window.addEventListener("load", () => {
  const cacheUPDtxt = document.getElementById("cacheUPDtxt");
  const CacheBar = document.getElementById("CacheBar");
  const cacheoverlay = document.getElementById("ScrOverlay");
  const passCounter = document.getElementById("passCounter");
  const failCounter = document.getElementById("failCounter");

  // Prompt the user to cache the page for offline usage
  if (window.confirm("Do you want to cache this page, for offline use?")) {
    // Show the caching progress
    window.applicationCache.addEventListener("progress", (e) => {
      cacheoverlay.style.display = "block";
      cacheUPDtxt.innerHTML = `Installing Offline Cache: ${Math.round((e.loaded / e.total) * 100)}%`;
      CacheBar.style.width = `${Math.round((e.loaded / e.total) * 100)}%`;
    });

    window.applicationCache.addEventListener("cached", () => {
      cacheoverlay.style.display = "none";
      // Show the cache is successfully installed and reload the page
      cacheUPDtxt.innerHTML = "Page Cached successfully, reloading....";
    });

    window.applicationCache.addEventListener("updateready", () => {
      cacheoverlay.style.display = "none";

      // Show the cache is successfully installed and reload the page
      cacheUPDtxt.innerHTML = "Page Cached successfully, reloading....";
    });
    // Show an error message if there was an error installing the cache
    window.applicationCache.addEventListener("error", () => {
      cacheoverlay.style.display = "none";

      cacheUPDtxt.innerHTML = "Error Installing Cache";
    });
    // Set this to true, so that it won't be prompted again unless the website data is cleared on PS4 console
  }

  // Initialize the passcount and failcount in localStorage
  localStorage.passcount = localStorage.passcount || 0;
  localStorage.failcount = localStorage.failcount || 0;

  // Update the pass and fail counters on the page
  passCounter.innerHTML = localStorage.passcount;
  failCounter.innerHTML = localStorage.failcount;

  setupEventListeners();
  setupDateElements();
});
function setupDateElements() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  document.getElementById("date").innerHTML = `${day}/${month}/${year}`;

  setInterval(() => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    document.getElementById("clock").innerHTML = `${
      hours < 10 ? "0" + hours : hours
    }:${minutes < 10 ? "0" + minutes : minutes}`;
  }, 1000);
}

function setupEventListeners() {
  // The parent node, element with id of MyItems
  const parentElement = document.getElementById("MyItems");
  // Selects All Elements with the pl-info attribute added
  const buttons = parentElement.querySelectorAll("button[pl-info]");
  // loops trough all of them
  buttons.forEach((button) => {
    // When cursor is on one of the payload buttons, show its info.
    button.addEventListener("mouseover", () => {
      msgs2.innerHTML = button.getAttribute("pl-info");
    });
    // When cursor isn't on the button anymore, reset msgs2 text.
    button.addEventListener("mouseout", () => {
      msgs2.innerHTML = "waiting for payload selection";
    });
  });
}

function addScript(src) {
  const head = document.getElementsByTagName("head")[0];
  const existingScript = document.getElementById("expload");

  // If it has already been added before...
  if (existingScript) head.removeChild(existingScript);

  const script = document.createElement("script");
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
