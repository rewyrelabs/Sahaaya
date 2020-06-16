var startService = function() {
	chrome.storage.sync.get({
		serviceStatus: ""
	}, function(items) {
		if (items.serviceStatus== "start") {
			chrome.tabs.executeScript(null, {file: "insert.js"});
		} else {
			chrome.tabs.executeScript(null, {file: "remove.js"});
		}
	});
}

window.addEventListener("storage", startService, false);
document.addEventListener("DOMContentLoaded", startService, false);
chrome.tabs.onActivated.addListener(function() {
	startService();
});
chrome.tabs.onUpdated.addListener(function() {
	startService();
});