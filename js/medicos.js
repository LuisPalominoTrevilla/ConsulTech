
var array = $(".sub-menu").children();
var selectedMedic;

array = [].slice.call(array);

array.forEach( function(arrayItem){
	arrayItem.onclick = function(){
		if(arrayItem.id === "eliminarMedico" || arrayItem.id === "modificarMedico"){
			if(selectedMedic == null){
				window.alert("Seleccione un medico");
				return;
			}
      return;
		}
		window.open(arrayItem.id + ".html", "_self");
	};
});

$(".salir").click(function(){
	window.open("medicos.html", "_self");
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
				}
});

var arr = $(".medicos").toArray();
arr.forEach(function(arrayItem){
	
	arrayItem.onclick = function(){
    $("#checked").attr("id", "");
		arrayItem.id = "checked";
		selectedMedic = arrayItem;
	};
});