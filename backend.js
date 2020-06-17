var startService = function() {
	chrome.storage.sync.get({
		serviceStatus: ""
	}, function(items) {
		if (items.serviceStatus == "start") {
			chrome.tabs.executeScript(null, {file: "insert.js"});
		} else {
			chrome.tabs.executeScript(null, {file: "remove.js"});
		}
	});
}

window.addEventListener("storage", startService, false);
document.addEventListener("DOMContentLoaded", function() {
	startService();
	function install_notice() {
		if (localStorage.getItem('install_time'))
			return;

		var now = new Date().getTime();
			localStorage.setItem('install_time', now);
			chrome.tabs.create({url: "settings.html"});
		}
	install_notice();
});
chrome.tabs.onActivated.addListener(function() {
	startService();
});
chrome.tabs.onUpdated.addListener(function() {
	startService();
});