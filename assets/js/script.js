const questionElement = document.getElementById("question")
const answerButtonElement= document.getElementById("answerButtons")

var shuffledQuestions, currentQuestionIndex

//count down timer start
document.addEventListener('DOMContentLoaded',() =>{
var timeLeftDisplay = document.querySelector("#secondsLeft")
var startbutton = document.querySelector("#startButton")
var secondsLeft =10 //TODO: change the time 


function startQuiz(){
    countDown(); 
    console.log('started')
    startbutton.classList.add('hide')
    shuffledQuestions= questions.sort(()=>Math.random( -.5 ))
    currentQuestionIndex= 0
    questionCard.classList.remove('hide')

    setQuestion()
}

function countDown(){
    setInterval(function() {
        if (secondsLeft <= 0) {
            clearInterval(secondsLeft = 0)
        }
        timeLeftDisplay.innerHTML = secondsLeft
        secondsLeft -= 1
    }, 1000)
    }
//when start button is clicked the timer starts the count down
startbutton.addEventListener("click", startQuiz)
})
//countdown timer end 


function setQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText =question.question
    
    question.answers.forEach(answer  => {    
        var button= document.createElement ('button')
        button.innerText=answer.text
        button.value = answer.correct
        button.addEventListener("click", checkQuestion )
        button.classList.add('answerOptions')
        console.log(answer);     
        answerButtonElement.appendChild(button)
        })
    }

function checkQuestion (e){ //targets the event, but with different functionallity 
    e.target.value; console.log(e.target.value)
    if (e.target.value){ //checking if it is true or false
        console.log("correct")
        clearQuestion()
        nextQuestion()
        setQuestion()
        noMoreQuestions()
    } else { console.log("incorrect")
            secondsLeft -=1
            clearQuestion() //clears the list of options 
            nextQuestion() // pulls the new question
            setQuestion()
            noMoreQuestions()
        } 
    }

function noMoreQuestions(){
    
}

function nextQuestion () {
    currentQuestionIndex ++ 
    console.log(currentQuestionIndex)
}

function clearQuestion () {
    answerButtonElement.innerHTML=""
}
function answerChoice(e) {}


//Questions start
const questions =[
    {
        question : "A very useful tool used during development and debugging for pirinting content to be debugger is:",
        answers: [
            {text: "Javascript", correct: false},
            {text: "terminal/bash", correct: false},
            {text: "forloops", correct: true},
            {text: "console.log", correct: false} 
        ]
    }, 
    {
        question: "Commonly used data types DO NOT include:", 
        answers: [
            {text:"strings", correct: false},
            {text: "booleans", correct: false},
            {text: "alerts", correct: true},
            {text: "numbers", correct: false}, 
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store _______.", 
        answers: [
            {text:"numbers and strings", correct: false}, 
            {text:"other arrays", correct: false}, 
            {text:"booleans", correct: false}, 
            {text: "all of the above", correct: true },
        ]
    },
        {
        question: "String values must be enclosed within_______ when being assigned to variables.",
        answers: [
            {text:"commas", correct: false},  
            {text:" curly brackets", correct: false},  
            {text:" quotes", correct: true },
            {text:" parentheses", correct: false}, 
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed within __________.",
        answers: [
            {text:"quotes", correct: false},             
            {text:"curly brackets", correct: true }, 
            {text:"parentheses", correct: false},
            {text: "square brackets", correct: false},
        ]
    }
]

//Questions end
