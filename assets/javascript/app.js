$(document).ready(function(){

	var intervalId;
	var time = 30;

	$("#start").click(question);

	var q1 = {
		question: "Who is Aragorn's father?",
		answer1: "Arathorn",
		answer2: "Elrond",
		answer3: "Gandalf",
		answer4: "Faramir",
		correctAnswer: "Arathorn"
	}

	var questions = [q1];

	function question(){
		$("#board").html("<div id='question'>");

		$("#question").append("Time remaining: ");

		$("#question").append("<span id='time'>" + time);


		intervalId = setInterval(function() {
			$("#time").text(time);
			time--;

			if(time < 0){
				clearInterval(intervalId);
			}
		}, 1000);

		$("#question").append("<div id='questions'>" + questions[0].question);
		$("#questions").append("<p value='questions[0].answer1'>" + questions[0].answer1);
		$("#questions").append("<p value='questions[0].answer2'>" + questions[0].answer2);
		$("#questions").append("<p value='questions[0].answer3'>" + questions[0].answer3);
		$("#questions").append("<p value='questions[0].answer4'>" + questions[0].answer4);

		$("p").click(function(){
			if($(this).text() == questions[0].correctAnswer){
				alert("Correct!");
			}
			else{
				alert("Incorrect!");
			}
		});


	}
	
 











});