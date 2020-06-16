if (document.querySelectorAll("#sahaayaSheet").length > 0) {
	var externalSheet = document.querySelector("#sahaayaSheet");
	externalSheet.setAttribute("href", "");
	externalSheet.setAttribute("rel", "");
	externalSheet.setAttribute("type", "");
	externalSheet.setAttribute("id", "");
	document.querySelector(".readingMode").style.display = "none";
	document.querySelector(".readingMode").classList.remove("readingMode");
}