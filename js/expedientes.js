
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
    /* El siguiente pedazo de codigo puede ser usado para pasar parámetro POST*/
    //console.log(selectedUser.childNodes[0].innerText);
    selectedUser = null;
		window.open(arrayItem.id + ".html", "_self");
	};
});

var vm = new Vue({
				el: "#app",
				data: {
					records: [
  {
    numero: 37,
    name: "Elena Barlow"
  },
  {
    numero: 29,
    name: "Calhoun Potter"
  },
  {
    numero: 28,
    name: "Violet Benjamin"
  },
  {
    numero: 27,
    name: "Pearson West"
  },
  {
    numero: 29,
    name: "Margarita Farley"
  },
  {
    numero: 30,
    name: "Fuentes Oconnor"
  },
  {
    numero: 31,
    name: "Casandra Mcintosh"
  },
  {
    numero: 29,
    name: "Parker Mann"
  },
  {
    numero: 36,
    name: "Miriam Crawford"
  },
  {
    numero: 21,
    name: "Dalton Ochoa"
  },
  {
    numero: 23,
    name: "Bertha Blackburn"
  },
  {
    numero: 40,
    name: "Valerie Kent"
  }
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
    // se seleccionó un paciente
    $("#checked").attr("id", "");
		arrayItem.id = "checked";
		selectedUser = arrayItem;
    $(".user-id").attr("value", selectedUser.childNodes[0].innerText);
    $(".user-options").css("cursor", "pointer");
	};
});

// Default
$(".user-options").css("cursor", "not-allowed");