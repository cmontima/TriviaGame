

// Timer
var counter = 30;
var timer;

var timer = setInterval(countdown, 1000);

function countdown() {
    counter--;
    $("#timer").html("Time remaining: " + counter);
    if (counter === 0) {
    }
}


// Quiz
var correctAnswers = 0;
var incorrectAnswers = 0;


$(document).ready(function () {

    function quiz() {
        const output = [];

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                    '<label>'
                  + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                  + letter + ': '
                  + currentQuestion[i].answers[letter]
                + '</label>'
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>`
            );
        });

        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll(".answers");

        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;

                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                answerContainers[questionNumber].style.color = "red";
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    const myQuestions = [
        {
            question: "Which side of your brain has more neurons?",
            answers: {
                a: "Right",
                b: "Left",
                c: "Both the same"
            },
            correctAnswer: "b"
        },
        {
            question: "Neurons are the brain cells that do all the work to keep you moving and thinking. How many neurons are there in your brain?",
            answers: {
                a: "100,000",
                b: "100 million",
                c: "100 billion"
            },
            correctAnswer: "c"
        },
        {
            question: "What is the total length of all the nerve fibres in your brain?",
            answers: {
                a: "1 to 2 kilometres",
                b: "3000 to 5000 kilometres",
                c: "150,000 to 180,000 kilometres",
            },
            correctAnswer: "c"
        },
        {
            question: "How fast can information travel in your brain?",
            answers: {
                a: "Up to 120 metres per second",
                b: "Up to 120 metre per minute",
                c: "Up to 120 metres per hour",
            },
            correctAnswer: "a"
        },
        {
            question: "What proportion of the oxygen pumped around your body is used by your brain?",
            answers: {
                a: "5%",
                b: "20%",
                c: "50%",
            },
            correctAnswer: "b"
        }
    ];

    quiz();

    submitButton.addEventListener("click", showResults);
});








// Style the quiz nicely.
//Add a progress bar.
// Let users review answers before submitting.
// Give users a summary of their answers after they submit.
// Update the navigation to let users skip to any question number.
// Create custom messages for each level of results. For example, if someone scores 8/10 or higher, call them a quiz ninja.
// Add a button to share results to social media.
// Save your high scores using localStorage.
// Add a countdown timer to see if people can beat the clock.
