$(".bgSlider").find("div").find("div").eq(0).css({"top":"0","left":"0"});
$(".bgSlider").find("div").find("div").eq(1).css({"top":"0","left":"205px"});
$(".bgSlider").find("div").find("div").eq(2).css({"top":"0","left":"410px"});
$(".bgSlider").find("div").find("div").eq(3).css({"top":"0","left":"615px"});
$(".bgSlider").find("div").find("div").eq(4).css({"top":"205px","left":"0"});
$(".bgSlider").find("div").find("div").eq(5).css({"top":"205px","left":"205px"});
$(".bgSlider").find("div").find("div").eq(6).css({"top":"205px","left":"410px"});
$(".bgSlider").find("div").find("div").eq(7).css({"top":"205px","left":"615px"})


$(".secondRow").find("div").eq(0).css({"top":"0","left":"0"});
$(".secondRow").find("div").eq(1).css({"top":"0","left":"205px"});
$(".secondRow").find("div").eq(2).css({"top":"0","left":"410px"});
$(".secondRow").find("div").eq(3).css({"top":"0","left":"615px"});
$(".secondRow").find("div").eq(4).css({"top":"205px","left":"0"});
$(".secondRow").find("div").eq(5).css({"top":"205px","left":"205px"});
$(".secondRow").find("div").eq(6).css({"top":"205px","left":"410px"});
$(".secondRow").find("div").eq(7).css({"top":"205px","left":"615px"})







$(".secondRow").find("div").hide(1)

$(".down").click(function(event){
	$(".firstRow").find("div").hide(500);
	$(".secondRow").find("div").show(500);
})

$(".up").click(function(event){
	$(".firstRow").find("div").show(500);
	$(".secondRow").find("div").hide(500);
})






// var divs=$("div")
// for(i=0;i<divs.length;i++){
// 	if(i>=8){
// 		$("div").find("div").eq(i).hide(1)
// 	}
// 	else{
// 		$("div").find("div").eq(i).show(500)
// 	}
// }



// $(".down").click(function(event){

// 	for(i=0;i<divs.length;i++){
// 		if(i<8){
// 			$("div").find("div").eq(i).hide(500)
// 		}
// 		else{
// 			$("div").find("div").eq(i).show(500)
// 		}
// 	}
// })
// $(".up").click(function(event){

// 	for(i=0;i<divs.length;i++){
// 		if(i<8){
// 			$("div").find("div").eq(i).show(500)
// 		}
// 		else{
// 			$("div").find("div").eq(i).hide(500)
// 		}
// 	}
// })