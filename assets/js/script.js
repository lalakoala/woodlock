jQuery( document ).ready(function($) {
	$('.sliderouter').slick({
		prevArrow: $('.prev'),
        nextArrow: $('.next'),
        appendArrows: $('.outer.menu'),
	}) 

if ($(document).width() > $(window).width()) {
    console.log("test", $(document).width(), $(window).width());
}

})



var hamburger = document.querySelector(".hamburger");
var nav = document.getElementById("navigation");
var body = document.getElementsByTagName("body")[0];

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
	console.log(document.body.clientWidth, document.documentElement.clientWidth, window.innerWidth);
	if (hamburger.classList.contains("is-active")) {
		nav.style.display = "block";
		body.style.overflow = "hidden";
	} else {
		nav.style.display = "none";
		body.style.overflow = "scroll";
	}
});




	
