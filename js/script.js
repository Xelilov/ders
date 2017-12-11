var divs=$("div")
for(i=0;i<divs.length;i++){
	if(i>=8){
		$("div").find("div").eq(i).hide(1)
	}
	else{
		$("div").find("div").eq(i).show(500)
	}
}



$(".down").click(function(event){

	for(i=0;i<divs.length;i++){
		if(i<8){
			$("div").find("div").eq(i).hide(500)
		}
		else{
			$("div").find("div").eq(i).show(500)
		}
	}
})
$(".up").click(function(event){

	for(i=0;i<divs.length;i++){
		if(i<8){
			$("div").find("div").eq(i).show(500)
		}
		else{
			$("div").find("div").eq(i).hide(500)
		}
	}
})