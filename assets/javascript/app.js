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
    var timer = 0;
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
        newQuestion()
    }  



    // a) Time Remaining Counter - counting down

    // b) Question user has to answer

    // c) Multiple choice answers to question above

// 3) User clicks on an answer > Brings user to ANSWER SECTION & displays following

    // a) Same Time Remaining Counter - counting down still

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



});

