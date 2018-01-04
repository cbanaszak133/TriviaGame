$(document).ready(function(){

	var intervalId;
	var time = 30;

	intervalId = setInterval(function() {
		$("#time").text(time);
		time--;

		if(time < 0){
			clearInterval(intervalId);
		}
	}, 1000)

	
    $("input[type='radio']").on('change', function () {
    	var selectedValue = $("input[name='q1']:checked").val();
    	$("#response1").text(selectedValue);
    });











});