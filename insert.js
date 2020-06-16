chrome.storage.sync.get({
	serviceStatus: ""
}, function(items) {
	if (items.serviceStatus == "start") {
		if (document.querySelectorAll("#sahaayaSheet").length <= 0) {

			var externalSheet = document.createElement("link");
			externalSheet.setAttribute("href", "https://sahaaya.xyz/style1.css");
			externalSheet.setAttribute("rel", "stylesheet");
			externalSheet.setAttribute("type", "text/css");
			externalSheet.setAttribute("id", "sahaayaSheet");
			document.querySelector("head").appendChild(externalSheet);

			var readingMode = document.createElement("button");
			readingMode.innerHTML = "Reading Mode";
			readingMode.classList.add("readingMode");
			document.querySelector("body").appendChild(readingMode);

		}
	}
});