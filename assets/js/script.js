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