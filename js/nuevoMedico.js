
var array = $(".sub-menu").children();
var miniMenu = $(".nuevo-nav").children();

array = [].slice.call(array);
miniMenu = [].slice.call(miniMenu);

array.forEach( function(arrayItem){
	arrayItem.onclick = function(){
		if(arrayItem.id === "eliminarMedico" || arrayItem.id === "modificarMedico"){
			if(selectedMedic == null){
				window.alert("Seleccione un medico");
				return;
			}
		}
		window.open(arrayItem.id + ".html", "_self");
	};
});

$(".salir").click(function(){
	window.open("medicos.html", "_self");
});

$("#Consultorios").hide();

miniMenu.forEach(function(arrayItem){
	arrayItem.onclick = function(){
		$("#" + $("#current-miniItem").html()).hide();
		$("#current-miniItem").attr("id", "");
		arrayItem.id = "current-miniItem";
		$("#" + arrayItem.innerHTML).show();
	};
});