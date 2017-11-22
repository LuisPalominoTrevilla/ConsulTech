
var array = $(".sub-menu").children();
var selectedUser;

array = [].slice.call(array);

array.forEach( function(arrayItem){
	arrayItem.onclick = function(){
		if(arrayItem.id === "abrir" || arrayItem.id === "actualizar" || arrayItem.id === "baja"){
			if(selectedUser == null){
				window.alert("Seleccione un paciente");
				return;
			}
		}
		window.open(arrayItem.id + ".html", "_self");
	};
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