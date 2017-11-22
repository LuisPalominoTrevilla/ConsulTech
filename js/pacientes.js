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