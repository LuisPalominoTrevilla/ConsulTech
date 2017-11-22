$(document).foundation()

var firstTop = $('.side').offset().top;
var consultaActiva = false;
var directorioActivo = false;
var persActivo = false;
var herraActiva = false;
var array = $(".primary-nav").children();

/**$(window).scroll(function(){
 		var pTop = $(window).scrollTop();

 		console.log("first: " + firstTop + " y " +pTop);
    	if(pTop >= firstTop){
    		console.log("Ya es mayor");
    		$('.ventana').css('margin-left',"16%");
    	    $('.side').css({'position':'fixed', "top": 0});
    	}else{
    		console.log("No es mayor");
    	    $('.side').css({'position':'relative'});
    	    $('.ventana').css('margin-left',"1%");
    	}
});**/

$(".logout").click(function(){
	window.open("index.html", "_self");
});

switch($(".current").html()){
	case $("#consulta").html():
		$("#consulta").css('background-image',"url(img/consult.png)");
		consultaActiva = true;
		break;
	case $("#directorio").html():
		$("#directorio").css('background-image',"url(img/directory.png)");
		directorioActivo = true;
		break;
	case $("#personalizar").html():
		$("#personalizar").css('background-image',"url(img/brush.png)");
		persActivo = true;
		break;
	case $("#herramientas").html():
		$("#herramientas").css('background-image',"url(img/tools.png)");
		herraActiva = true;
		break;	
}

$("#consulta").hover(function(){
	if(consultaActiva) return;
	$("#consulta").css('background-image',"url(img/consult.png)");
}, function(){
	if(consultaActiva) return;
	$("#consulta").css('background-image',"url(img/consultWhite.png");
});

$("#directorio").hover(function(){
	if(directorioActivo) return;
	$("#directorio").css('background-image',"url(img/directory.png)");
}, function(){
	if(directorioActivo) return;
	$("#directorio").css('background-image',"url(img/directoryWhite.png");
});

$("#personalizar").hover(function(){
	if(persActivo) return;
	$("#personalizar").css('background-image',"url(img/brush.png)");
}, function(){
	if(persActivo) return;
	$("#personalizar").css('background-image',"url(img/brushWhite.png");
});

$("#herramientas").hover(function(){
	if(herraActiva) return;
	$("#herramientas").css('background-image',"url(img/tools.png)");
}, function(){
	if(herraActiva) return;
	$("#herramientas").css('background-image',"url(img/toolsWhite.png");
});

array = [].slice.call(array);

array.forEach( function(arrayItem){
	arrayItem.onclick = function(){
		window.open(arrayItem.id + ".html", "_self");
	};
});