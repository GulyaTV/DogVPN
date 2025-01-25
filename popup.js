// Элементы интерфейса
const proxyModeSelect = document.getElementById("proxy-mode");
const applyProxyButton = document.getElementById("apply-proxy");
const disableProxyButton = document.getElementById("disable-proxy");
const statusText = document.getElementById("status");

// Адрес прокси-сервера
const proxyServer = "f1.aurorix.net:21379";

// Применить прокси
applyProxyButton.addEventListener("click", () => {
  const mode = proxyModeSelect.value;
  let config;

  switch (mode) {
    case "http":
      config = {
        mode: "fixed_servers",
        rules: {
          singleProxy: {
            scheme: "http",
            host: "f1.aurorix.net",
            port: 21379,
          },
        },
      };
      break;
  }

  // Настройка прокси
  chrome.proxy.settings.set({ value: config, scope: "regular" }, () => {
    statusText.textContent = `DogVPN включен`;
  });
});

// Отключить прокси
disableProxyButton.addEventListener("click", () => {
  chrome.proxy.settings.clear({ scope: "regular" }, () => {
    statusText.textContent = "DogVPN отключен";
  });
});
