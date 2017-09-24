chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.url.indexOf("https://game.energy.ch/") > -1) {
        chrome.tabs.executeScript(tabId, { file: "nrg.js" });
    }
});