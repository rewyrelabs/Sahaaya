if (document.querySelectorAll("#sahaayaSheet").length > 0) {
	var externalSheet = document.querySelector("#sahaayaSheet");
	document.querySelector("head").removeChild(externalSheet);
}