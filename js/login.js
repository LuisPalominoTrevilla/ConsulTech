$(document).foundation()

var isPswd = true;

$("#show-password").click(function(){
	if(isPswd){
		$(".input-password").attr("type", "text");
		isPswd = false;
	}else{
		$(".input-password").attr("type", "password");
		isPswd= true;
	}
});
