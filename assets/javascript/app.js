// Pseudo Code
$(document).ready(function() {

// 1) User loads page, START button appears to start game

        //Variable with questions:
    var questions = [{
            //? 1
        question: "Who is Gossip Girl?",
        multChoice: ["Serena", "Blair", "Jenny", "Dan"],
        answer: 3
    }, {
            //? 2
        question: "Who came back from boarding school?",
        multChoice: ["Vanessa", "Chuck", "Serena", "Nate"],
        answer: 2
    }, {
            //? 3
        question: "Where did Blair and Chuck have their first kiss?",
        multChoice: ["Limo", "Eiffel Tower", "Empire State Building", "Empire Hotel"],
        answer: 0
    }, {
            //? 4
        question: "Who blackmails Serena?",
        multChoice: ["Chuck", "Georgina", "Jenny", "Blair"],
        answer: 1
    }, {
            //? 5
        question: "What is made for Serena in the hotel kitchen?",
        multChoice: ["Martini", "Cronut", "Salad", "Grilled Cheese"],
        answer: 3
    }]
        // Answer Counter
    var correctAnswer = 0;
    var incorrectAnswer = 0;

        // Current ? to save from the loop
    var currentQuestion = 0;

        // Selections by user to save
    var unanswered = 0;
    var answered = 0;
    var userSelected = 0;

        // Timers
    var time = 0;
    var seconds = 0;

        // Message screen for RESULTS SECTION
    var results = {
        correct: "Wow, you got it right!",
        incorrect: "I can't believe you got it wrong...",
        timesOver: "You took too long :( ",
        gameOver: "Game is over!"
    }
    

// 2) User clicks START> to get to QUESTION SECTION & displays following


    function startsGame() {
        $("#endMessage").empty();
        $("#correctAnswers").empty();
        $("#incorrectAnswers").empty();
        $("unanswered").empty();
        // Reset counters
        currentQuestion = 0;
        correctAnswer = 0;
        incorrectAnswer = 0;
        unanswered = 0;
        // Get first question
        nextQuestion()
        console.log("game started");
    } 

    // a) Time Remaining Counter - counting down
    function counter() {
        // second for round
        seconds = 15;
        $("#timer").html("<h4>Time left: " + seconds + "</h4>");
        answered = true;
        time = setInterval(showCounter, 1000);
    }

    function showCounter() {
        // second countdown
        seconds--;
        $("#timer").html("<h4>Time left: " + seconds + "</h4>");
        if (seconds < 1) {
            clearInterval(time);
            answered = false;
            answerSection()
        }        
    }

    // b) Question user has to answer
    function nextQuestion() {
        $("#instructions").empty();
        $("#actualAnswer").empty();
        answered = true;
    
        // c) Multiple choice answers to question above
        $("#currentQuestion").html("Question # " + (currentQuestion + 1) + " of " + questions.length);
        $(".question").html("<h2>" + (questions[currentQuestion].question) + "</h2>");
        for (var i = 0; i < 4; i++) {
            var options = $("<div>");
            options.text(questions[currentQuestion].multChoice[i]);
            options.attr({"data-index": i}); // "" or ''??????
            options.addClass("userChoice");
            $(".multipleChoice").append(options);
            console.log("step 2 working");
        }
        // timer to work
        counter();
        console.log("counter works");

// 3) User clicks on an answer > Brings user to ANSWER SECTION & displays following
        $(".multipleChoice").on("click", function() {
            userSelected = $(this).data("index");
            console.log("answer page loading");
            // a) Same Time Remaining Counter - counting down still
            clearInterval(time);
            answerSection()
        });

    }
    // b) "You're Correct/ Wrong !"
    
    // c) "The correct answer was ______"

    // d) **** Potential Gif...****************

// 4) When Time Remaining Counter = 0, give new question & loop though until all ? answered

// 5) When all questions are answered, load RESULTS SECTION & display following

    // a) Time Remaining Counter - continues counting down

    // b) "Games all done, here's how you did..."

    // c) [Results Breakdown] -

        // i) Correct Answers

        // ii) Incorrect Answers 

        // iii) Unanswered

    // d) Start Over Button

// 6) If user clicks Start Over Button, Game starts over//// Page doesn't re-load!!!!!

    $("#startBtn").on("click", function() {
        $(this).hide();
        console.log("works")
        startsGame();
    });

});

