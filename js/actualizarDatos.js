
var array = $(".sub-menu").children();
var miniMenu = $(".nuevo-nav").children();

array = [].slice.call(array);
miniMenu = [].slice.call(miniMenu);

array.forEach( function(arrayItem){
	arrayItem.onclick = function(){
		window.open(arrayItem.id + ".html", "_self");
	};
});

/* Returns to the default-container */
$(".salir").click(function(){
	window.open("expedientes.html", "_self");
});

$("#Antecedentes").hide();
$("#Imagenes").hide();

miniMenu.forEach(function(arrayItem){
	arrayItem.onclick = function(){
		$("#" + $("#current-miniItem").html()).hide();
		$("#current-miniItem").attr("id", "");
		arrayItem.id = "current-miniItem";
		$("#" + arrayItem.innerHTML).show();
	};
});