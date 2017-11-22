
var selectedUser;


var vm = new Vue({
				el: "#app",
				data: {
					records: [
            {nombre: "Puerta de Hierro"},
            {nombre: "IMSS Chapalita"}
        ]
		},
});

var arr = $(".hospitales").toArray();
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