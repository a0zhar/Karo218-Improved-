// Initialize the passcount and failcount in localStorage
localStorage.passcount = localStorage.passcount || 0;
localStorage.failcount = localStorage.failcount || 0;

function setupDateElements() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  document.getElementById("date").textContent = `${day}/${month}/${year}`;

  const updateClock = () => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    document.getElementById("clock").textContent = `${hours}:${minutes}`;
    setTimeout(updateClock, 1000);
  };

  updateClock();
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
      msgs2.textContent = button.getAttribute("pl-info");
    });
    // When cursor isn't on the button anymore, reset msgs2 text.
    button.addEventListener("mouseout", () => {
      msgs2.textContent = "waiting for payload selection";
    });
  });
} 

setupEventListeners();
setupDateElements();

// Show the caching progress
window.applicationCache.addEventListener("progress", (e) => {
  ScrOverlay.style.display = "block";
  cacheUPDtxt.textContent = `Installing Offline Cache: ${Math.round((e.loaded / e.total) * 100)}%`;
  CacheBar.style.width = `${Math.round((e.loaded / e.total) * 100)}%`;
});
window.applicationCache.addEventListener("cached", () => {
  cacheUPDtxt.textContent = "Page is Cached";
});
window.applicationCache.addEventListener("updateready", () => {
  cacheUPDtxt.textContent = "Page is Cached";
});
window.applicationCache.addEventListener("error", () => {
  cacheUPDtxt.innerHTML = "Error Installing Cache";
});


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

