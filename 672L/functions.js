window.addEventListener("load", function () {
  function DLProgress(e) {
    document.getElementById("ScrOverlay").style.display = "block";
    var Percent = Math.round((e.loaded / e.total) * 100);
    document.getElementById("cacheUPDtxt").innerHTML =
      "Installing Offline Cache: " + Percent + "%";
    document.getElementById("CacheBar").style.width = Percent + "%";
  }
  function DisplayCacheProgress() {
    setTimeout(function () {
      document.getElementById("cacheUPDtxt").innerHTML =
        "Page Cached successfully, reloading....";
    }, 1000);
  }
  if (window.confirm("Do you want to cache the site?")) {
    window.applicationCache.addEventListener("progress",function (e) {DLProgress(e);},false);
    window.applicationCache.addEventListener("cached", DisplayCacheProgress);
    window.applicationCache.addEventListener("updateready",DisplayCacheProgress);
    window.applicationCache.addEventListener("error", function () {
      document.getElementById("cacheUPDtxt").innerHTML =
        "Error Installing Cache";
    });
  }
  var dt = new Date();
  document.getElementById("date").innerHTML =
    dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
  setInterval(() => {
    var hrs = dt.getHours();
    var min = dt.getMinutes();
    document.getElementById("clock").innerHTML = (hrs < 10 ? "0" + hrs : hrs) + ":" + (min < 10 ? "0" + min : min);
  }, 0);
  if (localStorage.passcount == null) {
    localStorage.passcount = 0;
  }
  if (localStorage.failcount == null) {
    localStorage.failcount = 0;
  }
});
document.getElementById("passCounter").innerHTML = localStorage.passcount;
document.getElementById("failCounter").innerHTML = localStorage.failcount;
document.querySelectorAll("[data-myinfo]").forEach((e) => {
  e.addEventListener("mouseover", function () {
    document.getElementById("msgs2").innerHTML = e.getAttribute("data-myinfo");
  });
  e.addEventListener("mouseout", function () {
    document.getElementById("msgs2").innerHTML = "status";
  });
});
function addScript(path) {
  const head = document.head;
  const existingScript = document.getElementById("expload");
  if (existingScript) head.removeChild(existingScript);

  const script = document.createElement("script");
  script.src = path;
  script.id = "expload";
  head.appendChild(script);
}

function load_hen(x) {
  PLfile = "BinFiles/" + x;
  msgs2.innerHTML = "Jailbreaking please wait";
  LoadedMSG = "Payload Loaded";
  setTimeout(function () {
    addScript("common/exp_loader.js");
  }, 3000);
  setTimeout(jailbreak, 500);
}
function load_Pl(x) {
  PLfile = "BinFiles/" + x;
  msgs2.innerHTML = "Payload loading... please wait";
  LoadedMSG = "Payload Loaded";
  addScript("common/exp_loader.js");
}

var current = false;
var elm = document.getElementById("logarea"),
  closebtn = document.getElementById("closelogs"),
  showbtn = document.getElementById("showbtn");
function showlogs() {
  current = !current;
  elm.style.display = current ? "block" : "none";
  showbtn.style.display = current ? "none" : "block";
  document.getElementById("mainarea").style.display = current
    ? "none"
    : "block";
}
closebtn.addEventListener("click", showlogs);
showbtn.addEventListener("click", showlogs);
const toastLiveExample = document.getElementById("liveToast");
const toast = new bootstrap.Toast(toastLiveExample);
toast.show();
var englishMessages = {
  GoldHenV212: "GoldHen v2.1.2 By SiSTRO",
  GoldHenV224: "GoldHen v2.2.4 By SiSTRO",
  Hen_v213: "HEN 2.1.3 By SiSTRO",
  Hen_v213b: "HEN 2.1.3 By SiSTRO & Leeful",
  CheatCopy: "Copy json and shn files from USB to PS4",
  BinLoader: "Loads a bin file sent to the PS4 IP address on port 9021",
  FTP: "A full access FTP server for the PS4",
  WebRTE: "A large collection of trainers for your PS4 games",
  PS4debug: "Save Data Mounter",
  OrbisToolbox: "Orbis Toolbox Loader Alfa 1190",
  App2USB: "Move installed games to an external USB drive",
  DisableUpdate: "Creates dummy files in the PS4 update folder",
  EnableUpdate: "Removes the dummy files in the PS4 update folder",
  HistoryBlocker:
    "Disable the auto opening of the last page used in the PS4 WebBrowser",
  ToDex: "unlocks some debug features available on testkit",
  DumpG: "Dump Game only to a USB drive to be able to create fpkg files",
  DumpU: "Dump Update Game only to a USB drive to be able to create fpkg files",
  DumpGU: "Dump Game+Update to a USB drive to be able to create fpkg files",
  DumpGUM:
    "Dump Game+Update Merged to a USB drive to be able to create fpkg files",
};
var russianMessages = {
  GoldHenV212: "GoldHen v2.1.2 By SiSTRO",
  GoldHenV224: "GoldHen v2.2.4 By SiSTRO",
  Hen_v213: "HEN 2.1.3 By SiSTRO",
  Hen_v213b: "HEN 2.1.3 By SiSTRO & Leeful",
  CheatCopy: "Копирование json и shn файлов с USB на PS4",
  BinLoader: "Загружает bin-файл, отправленный на IP-адрес PS4 по порту 9021",
  FTP: "FTP-сервер с полным доступом для PS4",
  WebRTE: "Большая коллекция трейнеров для ваших игр PS4",
  PS4debug: "Save Data Mounter",
  OrbisToolbox: "Orbis Toolbox Loader Alfa 1190",
  App2USB: "Перемещение установленных игр на внешний USB-накопитель",
  DisableUpdate: "Создает фиктивные файлы в папке обновлений PS4",
  EnableUpdate: "Удаляет фиктивные файлы в папке обновлений PS4",
  HistoryBlocker:
    "Отключение автоматического открытия последней используемой страницы в веб-браузере PS4",
  ToDex: "Разблокирует некоторые функции отладки, доступные на testkit",
  DumpG:
    "Сбрасывать игру только на USB-накопитель, чтобы иметь возможность создавать файлы fpkg",
  DumpU:
    "Сбрасывать обновление игры только на USB-накопитель, чтобы иметь возможность создавать fpkg-файлы",
  DumpGU:
    "Сбросить игру+обновление на USB-накопитель, чтобы иметь возможность создавать fpkg-файлы",
  DumpGUM:
    "Слить игру+обновление слитно на USB-накопитель, чтобы иметь возможность создавать fpkg-файлы",
};
document.getElementById("lang_en").addEventListener("click", function () {
  document.querySelectorAll("[data-msgname]").forEach((e) => {
    var arrind = e.getAttribute("data-msgname");
    e.setAttribute("data-myinfo", englishMessages[arrind]);
  });
  document.getElementById("langbar").innerHTML = "English";
  document.getElementById("thankslbl").innerHTML =
    "Super Special Thanks to Karo Sharifi, Sleirsgoevy, SiSTRo";
  document.getElementById("speciallbl").innerHTML =
    "and ps4krar for being the first to fork my repo";
});
document.getElementById("lang_ru").addEventListener("click", function () {
  document.querySelectorAll("[data-msgname]").forEach((e) => {
    var arrind = e.getAttribute("data-msgname");
    e.setAttribute("data-myinfo", russianMessages[arrind]);
  });
  document.getElementById("langbar").innerHTML = "Russian";
  document.getElementById("thankslbl").innerHTML =
    "Отдельное спасибо Karo Sharifi, Sleirsgoevy, SiSTRo";
  document.getElementById("speciallbl").innerHTML =
    "и ps4krar за то, что первым форкнул мое репо.";
});
