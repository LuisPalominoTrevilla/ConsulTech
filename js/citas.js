
var array = $(".sub-menu").children();

array = [].slice.call(array);

array.forEach( function(arrayItem){
	arrayItem.onclick = function(){
		//window.open(arrayItem.id + ".html", "_self");
	};
});

var arr = $(".citas").toArray();
arr.forEach(function(arrayItem){
	
	arrayItem.onclick = function(){
		$("#checked").attr("id", "");
		arrayItem.id = "checked";
	};
});