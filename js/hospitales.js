
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
		$("#checked").attr("id", "");
		arrayItem.id = "checked";
		selectedUser = arrayItem;
	};
});