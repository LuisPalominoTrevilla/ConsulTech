
var array = $(".sub-menu").children();
var miniMenu = $(".nuevo-nav").children();
var previous;
var selectedUser;

array = [].slice.call(array);
miniMenu = [].slice.call(miniMenu);

/* hides the current container and displays the selected one*/
array.forEach( function(arrayItem){
	arrayItem.onclick = function(){
		if(arrayItem.id === "abrir" || arrayItem.id === "actualizar" || arrayItem.id === "baja"){
			if(selectedUser == null){
				window.alert("Seleccione un paciente");
				return;
			}
		}
		disselect();
		$("#visible").hide();
		$("#visible").attr("id", "");
		$("." + arrayItem.id +"-container").attr("id", "visible");
		if(previous != null){
			$("#"+previous).attr("class", "");
		}
		$("#" + arrayItem.id).attr("class", "current-submenu");
		previous = arrayItem.id;
		dissapearMiniMenuContainers();
		
	};
});

/* Returns to the default-container */
$(".salir").click(function(){
	$("#visible").hide();
	if(previous != null){
			$("#"+previous).attr("class", "");
		}
	$("#visible").attr("id", "");
	$(".default-container").attr("id", "visible");
});


var vm = new Vue({
				el: "#app",
				data: {
					records: [
						 { 	numero: 1,
						 	nombre: "Guillermo Herrera"},
				         { 	numero: 2, 
				         	nombre: "Luis Palomino"},
				         { 	numero: 3,
				         	nombre: "Samantha Alatorre"},
				         { 	numero: 4,
				         	nombre: "Raul Gonzales"}
					]
				},
				methods: {
					algo: function(){
						this.hora = 0;
						this.minuto = 0;
						this.segundo = 0;
					},
					eliminar: function(){
						this.artistas.pop();
					},
					agregar: function(nombre){
						this.artistas.push(nombre);
					}
				}
});

var arr = $(".pacientes").toArray();
arr.forEach(function(arrayItem){
	
	arrayItem.onclick = function(){
		arrayItem.id = "checked";
		selectedUser = arrayItem;
		arr.forEach(function(arrayItem2){

			if(arrayItem2 != arrayItem){
				arrayItem2.id = "";
			}
		});
	};
});

// Ocultar tabs innecesarias
$(".nuevo-container").hide();
$(".abrir-container").hide();
$(".actualizar-container").hide();
$(".baja-container").hide();

function disselect(){
	miniMenu.forEach(function(arrayItem){
		arrayItem.className = "nuevo-item";
	});
}

function dissapearMiniMenuContainers(){
	$(".Identificacion").show();
	
	miniMenu[0].className = "nuevo-item current-miniItem";
	miniMenu[2].className = "nuevo-item current-miniItem";
	miniMenu[9].className = "nuevo-item current-miniItem";
	$(".Antecedentes").hide();
	$(".Visitas").hide();
	$(".Estudios-Lab").hide();
	$(".Resultados").hide();
	$(".Hospitalizacion").hide();
	$(".Imagenes").hide();
	/* Modifies selection in mini menu */
	miniMenu.forEach(function(arrayItem){
		arrayItem.onclick = function(){
			$("." + $(".current-miniItem").html()).hide();
			$(".current-miniItem").attr("class", "nuevo-item");
			arrayItem.className = "nuevo-item current-miniItem";
			$("." + arrayItem.innerHTML).show();
		};
	});
}

dissapearMiniMenuContainers();