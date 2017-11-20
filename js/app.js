$(document).foundation()

var navItems = document.getElementsByClassName("nav-item");

for(var i = 0; i < navItems.length; i++){
	navItems[i].addEventListener("mouseover", function(){
		this.style.borderTop = "5px solid white";
		this.getElementsByTagName('span')[0].style.fontWeight = 'bold';
	});
}

for(var i = 0; i < navItems.length; i++){
	navItems[i].addEventListener("mouseout", function(){
		this.style.borderTop = "5px solid black";
		this.getElementsByTagName('span')[0].style.fontWeight = 'normal';
	});
}


var t = $("#top").addClass('fondo');
t.on("mouseover", function(){
	t.removeClass("fondo").addClass("image");
});
t.on("mouseout", function(){
	t.removeClass("image");
	t.addClass("fondo");
});


//The following script is for the page exam.html
var hide_temporal = $(".temp-hide");
var button_show = $(".unhide");
hide_temporal.hide();
button_show.on('click', function(){
	hide_temporal.show(); //Show information
	button_show.hide();  //Hide the button once it is pressed
});




// End of script used in exam.html

//The following code was retrieved from http://www.coffeecup.com/forums/foundation-framer/adding-a-scroll-transition-to-a-link-on-same-page/

$(document).ready(function(){
// Add smooth scrolling to all links
$("a").on('click', function(event) {

// Make sure this.hash has a value before overriding default behavior
if (this.hash !== "") {
// Prevent default anchor click behavior
event.preventDefault();

// Store hash
var hash = this.hash;

// Using jQuery's animate() method to add smooth page scroll
// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
$('html, body').animate({
scrollTop: $(hash).offset().top
}, 800, function(){

// Add hash (#) to URL when done scrolling (default click behavior)
window.location.hash = hash;
});
} // End if
});
});