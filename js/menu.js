$(document).foundation()

var firstTop = $('.side').offset().top;

$(window).scroll(function(){
 		var pTop = $(window).scrollTop();
    	if(pTop >= firstTop){
    	    $('.side').css({'position':'fixed', "top": 0});
    	}else{
    	    $('.side').css({'position':'relative'});
    	}
});