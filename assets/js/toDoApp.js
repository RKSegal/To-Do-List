//check off specific items by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");	
});

//click on X to delete item
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		var todoText = $(this).val();
		$(this).val(""); //acts as a setter
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});



//longer alternative for first function
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none",
	// 	});
	// } 
	// else {
	// 	$(this).css({
	// 	color: "gray",
	// 	textDecoration: "line-through",
	// 	});
	// }