window.addEventListener("load", function () {
  // Show the caching progress
  window.applicationCache.addEventListener("progress", (e) => {
    let progress = Math.round((e.loaded / e.total) * 100);
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
  // Initialize the passcount and failcount in localStorage
  localStorage.passcount = localStorage.passcount || 0;
  localStorage.failcount = localStorage.failcount || 0;
});

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
}

function setupEventListeners() {
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
function sendAndRunPayload(src) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "arraybuffer";
  xhr.open("GET", src, true);
  xhr.onload = function () {
    let response = xhr.response;
    let payload = new Uint32Array(response);
    let getlength = "0x" + response.byteLength.toString(16);
    window.pl_blob_len = getlength;
    window.pl_blob = malloc(window.pl_blob_len);
    write_mem(window.pl_blob, payload);
    load_payload();
  };
  xhr.send();
}

function loadBinFile(element) {
  LoadedMSG = element.getAttribute("pl-loadedmsg");
  PLfile = `bin/${element.getAttribute("pl-file")}`;

  if (PLfile.includes("hen")) {
    document.getElementById("msgs2").innerHTML = "Jailbreaking, please wait";
    setTimeout(jailbreak, 500);
  }

  setTimeout(function () {
    sendAndRunPayload(PLfile);
  }, 3000);
}
