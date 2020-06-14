var $ = function(elt) {
	return document.querySelector(elt);
}
var _ = function(elt, command, fn) {
	return elt.addEventListener(command, fn);
}

_($("#enableSahaaya"), "click", function() {
	$(".disabled").style.display = "none";
	$(".enabled").style.display = "block";
	$("body").classList.add("on");
});
_($("#disableSahaaya"), "click", function() {
	$(".disabled").style.display = "block";
	$(".enabled").style.display = "none";
	$("body").classList.remove("on");
});