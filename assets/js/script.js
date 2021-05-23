
//count down timer start
document.addEventListener('DOMContentLoaded',() =>{
var timeLeftDisplay = document.querySelector("#secondsLeft")
var startBtn = document.querySelector("#startButton")
let secondsLeft =10 //TODO: change the time 
    
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
startBtn.addEventListener("click", countDown)
})
//countdown timer end 

//Questions start
var questions =[
    {
        prompt: "A very usefull tool used during development and debugging for pirinting content to be debugger is: \n 1. Javascript \n 2. terminal/bash \n 3. for loops \n console.log", 
        answer: "3. for loops"
    }, 
    {
        prompt: "Commonly used data types DO NOT include: \n strings \n booleans \n alerts \n numbers",
        answer: "alerts"
    },
    {
        prompt: "Arrays in JavaScript can be used to store _______. \n numbers and strings \n other arrays \n booleans \n all of the above", 
        answer: "all of the above"
    },
    {
        prompt: "String values must be enclosed within_______ when being assigned to variables. \n commas \n curly brackets \n quotes \n parentheses",
        answer: " quotes"
    },
    {
        prompt: "The condition in an if/else statement is enclosed within __________. \n quotes \n curly brackets \n parentheses \n square brackets",
        answer: "curly brackets"
    }
]
//Questions end

//scoring

