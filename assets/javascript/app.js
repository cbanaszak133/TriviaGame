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
		correctImg: "../TriviaGame/assets/images/aragornSmiling.gif",
		incorrectImg: "../TriviaGame/assets/images/aragornOops.gif"
	}

	var q2 = {
		question: "Who was the creator of the One Ring?",
		answer1: "Saruman",
		answer2: "Sauron",
		answer3: "Frodo",
		answer4: "Bilbo",
		correctAnswer: "Sauron",
		correctImg: "../TriviaGame/assets/images/sauronCorrect.gif",
		incorrectImg: "../TriviaGame/assets/images/sauronIncorrect.gif"
		
	}

	var q3 = {
		question: "What is another name Gandalf is commonly called?",
		answer1: "Radagast",
		answer2: "Saruman",
		answer3: "Mithrandir",
		answer4: "Lothlorien",
		correctAnswer: "Mithrandir",
		correctImg: "../TriviaGame/assets/images/gandalfSmiling.gif",
		incorrectImg: "../TriviaGame/assets/images/gandalfCage.gif "
	}

	var q4 = {
		question: "The Fellowship of the Ring is forced to travel through which mine?",
		answer1: "Mines of Friendship",
		answer2: "Mines of Moria",
		answer3: "Mines of Helms Deep",
		answer4: "Mines of Rohan",
		correctAnswer: "Mines of Moria",
		correctImg: "../TriviaGame/assets/images/moriaCorrect.gif",
		incorrectImg: "../TriviaGame/assets/images/moriaIncorrect.gif"
	}

	var q5 = {
		question: "The forest where Merry and Pippin meet Treebeard and the ents is called:",
		answer1: "Lothlorien",
		answer2: "Mirkwood",
		answer3: "Fangorn",
		answer4: "Pelennor Fields",
		correctAnswer: "Fangorn",
		correctImg: "../TriviaGame/assets/images/treebeardCorrect.gif",
		incorrectImg: "../TriviaGame/assets/images/treebeardIncorrect.gif"
	}

	var questions = [q1, q2, q3, q4, q5];

	function question(){
		$("#board").html("<div id='question'>");

		

		


		intervalId = setInterval(function() {
			$("#time").text(time);
			time--;

			if(time < 0){
				result("");
			}
		}, 1000);

		$("#question").append("<h2>" + questions[currentQ].question + "<br />" );

		$("#question").append("<a value='questions[currentQ].answer1'>" + questions[currentQ].answer1 + "<br />");
		$("#question").append("<a value='questions[currentQ].answer2'>" + questions[currentQ].answer2 + "<br />");
		$("#question").append("<a value='questions[currentQ].answer3'>" + questions[currentQ].answer3 + "<br />");
		$("#question").append("<a value='questions[currentQ].answer4'>" + questions[currentQ].answer4 + "<br />" + "<br />");

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
		else if(answer == ""){
			$("#board").html("<h1> Time's up! </h1>");

			var correctAns = $("<h2>")
			correctAns.text("The correct answer was: " + questions[currentQ].correctAnswer);
			$("#board").append(correctAns);

			var img = $("<img>")
			img.attr("src", questions[currentQ].incorrectImg);
			$("#board").append(img);

			numIncorrect++;
		}
		else{
			$("#board").html("<h1> Incorrect! </h1>");

			var correctAns = $("<h2>")
			correctAns.text("The correct answer was: " + questions[currentQ].correctAnswer);
			$("#board").append(correctAns);

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
		time = 30;

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