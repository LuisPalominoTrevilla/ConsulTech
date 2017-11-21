$(document).foundation()

var firstTop = $('.side').offset().top;
var consultaActiva = false;
var directorioActivo = false;
var persActivo = false;
var herraActiva = false;
var array = $(".side-nav").children();

//$(window).scroll(function(){
// 		var pTop = $(window).scrollTop();
//    	if(pTop >= firstTop){
//    	    $('.side').css({'position':'fixed', "top": 0});
//    	}else{
//    	    $('.side').css({'position':'relative'});
//    	}
//});

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