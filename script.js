const questions = [
    {
        question: "Which is the largest animal in the world?",
        answer:[
            { test:"Shark", correct: false },
            { test:"Blue whale", correct: true },
            { test:"Elephant", correct: false },
            { test:"Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answer:[
            { test:"Vatican City", correct: true },
            { test:"Bhutan", correct: false },
            { test:"Nepal", correct: false },
            { test:"Shri Lanka", correct: false },
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answer:[
            { test:"Kalhari", correct: false },
            { test:"Gobi", correct: false },
            { test:"Sahara", correct: true },
            { test:"Antarctica", correct: false },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answer:[
            { test:"Asia", correct: false },
            { test:"Australia", correct: true },
            { test:"Arctic", correct: false },
            { test:"Africa", correct: false },
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const next = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){

}

function showQuesstion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;
}