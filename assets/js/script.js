const questionElement = document.getElementById("question");
const answerButtonElement= document.getElementById("answerButtons");

var shuffledQuestions, currentQuestionIndex

//count down timer start
document.addEventListener('DOMContentLoaded',() =>{
var timerEl = document.getElementById("secondsLeft");
var startbutton = document.getElementById("startButton");
var secondsLeft =questions.length *12 //TODO: change the time  

function startQuiz(){
    countDown(); 
    console.log('started');
    startbutton.classList.add('hide');
    shuffledQuestions= questions.sort(()=>Math.random( -.5 ));
    currentQuestionIndex= 0
    questionCard.classList.remove('hide');
    instructionsCard.classList.add('hide')
    setQuestion();
}

function countDown(){
    var timerInterval= setInterval(function() {
        secondsLeft--;
        timerEl.textContent =secondsLeft
        if (secondsLeft === 0) {
            clearInterval(timerInterval)
        }
    }, 1000)
    }
startbutton.addEventListener("click", startQuiz)
})

function setQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText =question.question;
    
    question.answers.forEach(answer  => {    
        var button= document.createElement ('button')
        button.innerText=answer.text //this makes the text be the inner homework
        button.value = answer.correct
        button.addEventListener("click", checkQuestion )
        button.classList.add('answerOptions')
        console.log(answer);     
        answerButtonElement.appendChild(button)
        })
    }

function checkQuestion (e){ //targets the event, but with different functionallity 
    // e.target.value; console.log(e.target.value)
    if (e.target.value){ //checking if it is true or false
        console.log ("true")
    } else {
        console.log("false")
        timerInterval -= 5;//if the time is  1 it ends
        }
        nextQuestion(); // pulls the new question ie takes the currentquestion and adds 1 to pull the next one
        clearQuestion(); //clears the list of answer options which are showing in the answer button options
        setQuestion(); //showQuestion(shuffledQuestions[currentQuestionIndex])
    }

function nextQuestion () {
    currentQuestionIndex ++ 
    console.log(currentQuestionIndex)
    if (shuffledQuestions[currentQuestionIndex] === question.length) {
        endQuiz ();
    } 
}

//variables used to end the game    
var initialsEl = document.querySelector ("#name");
var time = question.length * 15;

function endQuiz(){
    clearInterval(setInterval);
    var scoresPageEl= document.getElementById("scoresPage");
    scoresPageEl.removeAttribute("class");
    questionCard.classList.add('hide');
    secondsLeftCard.classList.add('hide');
    backButton.classList.add('hide');
    clearScore.classList.add('hide');
}

var submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", scoresPage) 
    
    //TODO: this needs work to show on HTML correctly 
    var finalScoreEl= document.getElementById("finalScore");
    finalScoreEl.textContent = secondsLeft; 


//when the submit button is pressed the scores page is supposed to pull up 
function scoresPage (){
    submitButton.classList.add('hide');
    highScores.classList.remove('hide');
    questionCard.classList.add('hide');
    backButton.classList.remove('hide');
    clearScore.classList.remove('hide');
    initials.classList.add('hide');
    finalScore.classList.add('hide');
    saveHighScore()
    
}

function saveHighScore() {
    var initials =initialsEl.value.trim();

    if (initials !== " "){
        var highscores= JSON.pars(window.localStorage.getItem("highscores")) || [];

        var newScore= {
            score: secondsLeft, 
            initials: initials
        };

        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        window.location.href= "score.html"
        
    }
}


function clearQuestion () {
    answerButtonElement.innerHTML=""
}
function answerChoice(e) {}

