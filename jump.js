$(document).ready(function() {
	$("#oneway").show();
	$("#roundtrip").hide();

	
	$("#button1").click(function(){		
		$("#oneway").show();
		$("#roundtrip").hide();

	});
	$("#button2").click(function(){
		$("#roundtrip").show();
		$("#oneway").hide();

	});

});