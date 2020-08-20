jQuery( document ).ready(function($) {
	$('.sliderouter').slick({
		prevArrow: $('.prev'),
        nextArrow: $('.next'),
        appendArrows: $('.outer.menu'),
	}) 
})



var hamburger = document.querySelector(".hamburger");
var nav = document.getElementById("navigation");
var body = document.getElementsByTagName("body")[0];

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
	if (hamburger.classList.contains("is-active")) {
		nav.style.display = "block";
		body.style.overflow = "hidden";
	} else {
		nav.style.display = "none";
		body.style.overflow = "scroll";
	}
});