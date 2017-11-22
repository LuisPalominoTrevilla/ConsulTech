var array = $(".sub-menu").children();
array = [].slice.call(array);

array.forEach( function(arrayItem){
	arrayItem.onclick = function(){
		window.open(arrayItem.id + ".html", "_self");
	};
});

/* Returns to the default-container */
$(".salir").click(function(){
	window.open("expedientes.html", "_self");
});