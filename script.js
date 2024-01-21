const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers:[
            { text:"Shark", correct: false },
            { text:"Blue whale", correct: true },
            { text:"Elephant", correct: false },
            { text:"Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers:[
            { text:"Vatican City", correct: true },
            { text:"Bhutan", correct: false },
            { text:"Nepal", correct: false },
            { text:"Shri Lanka", correct: false },
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers:[
            { text:"Kalhari", correct: false },
            { text:"Gobi", correct: false },
            { text:"Sahara", correct: true },
            { text:"Antarctica", correct: false },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers:[
            { text:"Asia", correct: false },
            { text:"Australia", correct: true },
            { text:"Arctic", correct: false },
            { text:"Africa", correct: false },
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    reserState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function reserState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild)
    answerButtons.removeChild(answerButtons.firstChild);

}
startQuiz();