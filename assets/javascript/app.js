$(document).ready(function(){

	var intervalId;
	var time = 30;

	var numCorrect = 0;
	var numIncorrect = 0;

	$("#start").click(question);

	var currentQ = 0;

	var q1 = {
		question: "Who is Aragorn's father?",
		answer1: "Arathorn",
		answer2: "Elrond",
		answer3: "Gandalf",
		answer4: "Faramir",
		correctAnswer: "Arathorn",
		correctImg: "https://i.pinimg.com/originals/ea/82/68/ea8268f7d33be6b98cacce82589944b7.gif",
		incorrectImg: "https://i.pinimg.com/originals/40/cc/f9/40ccf93c17fad8c719947c07f4566e9a.gif"
	}

	var q2 = {
		question: "Who was the creator of the One Ring?",
		answer1: "Saruman",
		answer2: "Sauron",
		answer3: "Frodo",
		answer4: "Bilbo",
		correctAnswer: "Sauron"
	}

	var q3 = {
		question: "What is another name Gandalf is commonly called?",
		answer1: "Radagast",
		answer2: "Saruman",
		answer3: "Mithrandir",
		answer4: "Lothlorien",
		correctAnswer: "Mithrandir"
	}

	var questions = [q1, q2, q3];

	function question(){
		$("#board").html("<div id='question'>");

		

		


		intervalId = setInterval(function() {
			$("#time").text(time);
			time--;

			if(time < 0){
				result("");
			}
		}, 1000);

		$("#question").append("<div id='questions'>" + questions[currentQ].question + "<br />");
		$("#questions").append("<a value='questions[currentQ].answer1'>" + questions[currentQ].answer1 + "<br />");
		$("#questions").append("<a value='questions[currentQ].answer2'>" + questions[currentQ].answer2 + "<br />");
		$("#questions").append("<a value='questions[currentQ].answer3'>" + questions[currentQ].answer3 + "<br />");
		$("#questions").append("<a value='questions[currentQ].answer4'>" + questions[currentQ].answer4 + "<br />");

		$("#question").append("<span>  Time remaining: </span>");
		$("#question").append("<span id='time'>" + time);

		$("a").click(function(){
			clearInterval(intervalId);
			result($(this).text());
		});


	}
	
	function result(answer){
		clearInterval(intervalId);

		if (answer == questions[currentQ].correctAnswer){
			$("#board").html("<h1>  Correct! </h1>");

			var img = $("<img>")
			img.attr("src", questions[currentQ].correctImg);
			$("#board").append(img);

			numCorrect++;
		}
		else{
			$("#board").html("<h1> Incorrect! </h1>");

			var img = $("<img>")
			img.attr("src", questions[currentQ].incorrectImg);
			$("#board").append(img);

			numIncorrect++;
		}

		currentQ++;
		if(currentQ == questions.length){
			setTimeout(reset, 4000);
		}
		else{
			time = 30;
			setTimeout(question, 4000);
		}
		

	}

	function reset(){
		$("#board").empty();
		$("#board").html("<h1> Game over! <h1>");
		var d = $("<div>");
		d.attr("id", "wins-losses");
		currentQ = 0;

		d.text("Wins: " + numCorrect + " Losses: " + numIncorrect);

		numCorrect = 0;
		numIncorrect = 0;

		$("#board").append(d);

		var button = $("<button class='start-again'>");

		button.text("Play again!");

		$("#board").append(button);

		button.on("click", question);

	}


});