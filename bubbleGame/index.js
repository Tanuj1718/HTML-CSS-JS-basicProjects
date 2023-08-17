var makeBubble = function makeBubble(){
    var clutter = ""
    for(var i = 1; i<=96;i++){
        var rn = (parseInt(Math.random()*96))
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector(".bpanel").innerHTML = clutter
}

var timer = 60;
function timeInterval(){
   let timerint = setInterval(function(){
        if(timer>=0){
        document.querySelector("#time").textContent = timer;
        timer--;
        }
        else{
            clearInterval(timerint)
            document.querySelector(".bpanel").innerHTML = `<h1 id = "GameOver">Game Over</h1>`
            document.querySelector("#hitval").textContent = "0"

            StarNewGame()
        }

    }, 1000)
}

var rvalue = 0;
function getNewHit(){
    rvalue = parseInt(Math.random()*10)
   document.querySelector("#hitval").textContent = rvalue
   
}

var score = 0
var clickNum;
function increaseScore(){
    score += 10
    document.querySelector("#scoreval").textContent = score

}
document.querySelector(".bpanel").addEventListener("click", function(dets){
    var clickNum = Number(dets.target.textContent)
    if(clickNum == rvalue){
        increaseScore();
        makeBubble();
        getNewHit();
        }
 })

function StarNewGame(){
setTimeout(function(){
const newGameText = document.querySelector(".panel").innerHTML = `<h1 id="newGame">Start New Game</h1>`
},2000)
}

timeInterval();
makeBubble();
getNewHit();