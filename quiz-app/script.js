// Mockup datas
const questions = [{
    question: "Which is the animal in the land?",
    anwsers: [
        {
            text: 'Shark', correct: false
        },
        {
            text: 'Blue whale', correct: false
        }, {
            text: 'Dolphin', correct: false
        }, {
            text: 'Giraffe', correct: true
        }
    ]
},
{
    question: "Which is the learet animal in the world?",
    anwsers: [
        {
            text: 'Blue whale', correct: true
        },
        {
            text: 'Elephant', correct: false
        },
        {
            text: 'Shark', correct: false
        },
        {
            text: 'Giraffe', correct: false
        }
    ]
},
{
    question: "Which is the smallest continent in the world ?",
    anwsers: [
        {
            text: 'Australia', correct: true
        },
        {
            text: 'Asia', correct: false
        },
        {
            text: 'Arctic', correct: false
        },
        {
            text: 'Afria', correct: false
        }
    ]
},
];

const questionElement = document.getElementById('question');
const answersButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
let currentQuestionIndex = 0;
let scrore = 0;
function strartQuiz() {
    currentQuestionIndex = 0;
    scrore = 0;
    showQuestion()
}
function showQuestion() {
    resetState()
    let currnetQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. '
        + currnetQuestion.question;
    currnetQuestion.anwsers.forEach(awnser => {
        let button = document.createElement('button');
        button.innerHTML = awnser.text;
        button.classList.add('btn');
        answersButton.appendChild(button);
        if (awnser.correct) {
            button.dataset.correct = awnser.correct;
        }
        button.addEventListener("click", selectAwnser)
    })
}
function resetState() {
    nextButton.style.display = "none";
    while (answersButton.firstChild) {
        answersButton.removeChild(answersButton.firstChild);
    }
}
function selectAwnser(e) {
    const selectButton = e.target;
    const isCorrect = selectButton.dataset.correct === "true";
    if (isCorrect) {
        selectButton.classList.add('correct')
        scrore++;
    } else {
        selectButton.classList.add('incorrect')
        Array.from(answersButton.children).forEach(element => {
            if (element.dataset.correct === 'true') {
                element.classList.add('correct');
            }
        })
    }
    nextButton.style.display = "block";
}
function showScrore(params) {
    resetState();
    questionElement.innerHTML = `You scored ${scrore} out of ${questions.length}`
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}
function handNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScrore()
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handNextButton()
    } else {
        strartQuiz()
    }
})

strartQuiz()