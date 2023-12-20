const questions = [
    {
        question: "Which of the following attribute is used to provide a unique name to an element?",
        answers: [

            { option: "class", correct: false },
            { option: "type", correct: false },
            { option: "id", correct: true },
            { option: "None of the above", correct: false }
        ]
    },
    {
        question: "What are the types of lists available in HTML?",
        answers: [

            { option: "Ordered , Unordered list", correct: true },
            { option: "Bulleted , Numbered list", correct: false },
            { option: "Named , Unnamed list", correct: false },
            { option: "None of the above", correct: false }

        ]
    },
    {
        question: "Which of the following is the correct syntax to select all paragraph elements in a div element?",
        answers: [

            { option: "div p", correct: true },
            { option: "p", correct: false },
            { option: "div#p", correct: false },
            { option: "div ~ p", correct: false }

        ]
    },
    {
        question: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
        answers: [

            { option: "a {text-decoration : underline;}", correct: false },
            { option: "a {decoration : no-underline;}", correct: false },
            { option: "a {text-decoration : none;}", correct: true },
            { option: "None of the above", correct: false }

        ]
    },
    {
        question: "Are the negative values allowed in padding property?",
        answers: [

            { option: "yes", correct: false },
            { option: "no", correct: true },
            { option: "can\'t say", correct: false },
            { option: "May be", correct: false }

        ]
    },
    {
        question: " Which type of JavaScript language is ___",
        answers: [
            { option: "Object-Oriented", correct: false },
            { option: "Object-Based", correct: true },
            { option: "Assembly-language", correct: false },
            { option: "High-level", correct: false }
        ]
    },

    {
        question: " The \"function\" and \" var\" are known as:",
        answers: [
            { option: "keyword", correct: false },
            { option: "Data type", correct: false },
            { option: "Declaration statements", correct: true },
            { option: "Prototypes", correct: false }
        ]
    },
    {
        question: " Which one of the following also known as Conditional Expression:",
        answers: [
            { option: "Alternative to if-else", correct: false },
            { option: "Switch statement", correct: false },
            { option: "If-then-else statement", correct: false },
            { option: "immediate if", correct: true }
        ]
    },
    {
        question: " When interpreter encounters an empty statements, what it will do:",
        answers: [
            { option: "Shows a warning", correct: false },
            { option: "Prompts to complete the statement", correct: false },
            { option: "Throws an error", correct: false },
            { option: "Ignores the statements", correct: true }
        ]
    },

    {
        question: " Which of the following variables takes precedence over the others if the names are the same?",
        answers: [
            { option: "Global variable", correct: false },
            { option: "Local variable", correct: true },
            { option: "The two of the above", correct: false },
            { option: "None of the above", correct: false }
        ]
    }
]

// get element

let question = document.getElementById("question");
let nextButton = document.getElementById("next");
let answerButtons = document.getElementById("answer-buttons");
let playAgain = document.getElementById("playAgain");
let heading = document.getElementById("heading");
let currentQuestion = 0;
let score = 0;


// show function

function showQuestion() {

    reset();

    if (currentQuestion < questions.length) {

        question.innerHTML = `${currentQuestion + 1}` + ". " + questions[currentQuestion].question;
        for (let i = 0; i < questions[currentQuestion].answers.length; i++) {

            let button = document.createElement('button');
            button.className = "btn";
            button.innerHTML = questions[currentQuestion].answers[i].option;

            answerButtons.appendChild(button);

            if (questions[currentQuestion].answers[i].correct) {
                //set correct as a attribute to the button
                button.dataset.correct = questions[currentQuestion].answers[i].correct;
            }

            button.addEventListener("click", selectAnswer);
        }
    }
    else {  
        showScore();
    }
}

function selectAnswer(elm) {
    let selectedBtn = elm.target;

    if (selectedBtn.dataset.correct == "true") {
        selectedBtn.classList.add("correct");
        score++
    }
    else {
        selectedBtn.classList.add("incorrect");

    }


    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;

    })

    currentQuestion++;

    nextButton.style.display = "block";
}

// the function will remove the previous element from the answerButton parent
function reset() {
    nextButton.style.display = "none";
    playAgain.style.display = "none";
    
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

//function to show score

function showScore() {
    reset();
    heading.innerHTML = "Your score";
    question.innerHTML = `You scored ${score} out of ${questions.length}`;


    playAgain.style.display = "block";
    playAgain.addEventListener('click', function () {
        currentQuestion = 0;
        score = 0;
        heading.innerHTML = "Simple Question";
        showQuestion();
    })
}


console.log(questions.length);


// add eventListener to next Button
nextButton.addEventListener('click', function () {
    showQuestion();
})

showQuestion();
