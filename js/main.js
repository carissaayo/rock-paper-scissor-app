const scoreValue = document.getElementById('score-value')
const options = document.querySelectorAll('.option-btn')
const choices= ['paper','scissors','rock'];
const resultCon = document.getElementById("result-con");
const gameCon = document.getElementById("game-con");
const playAgain = document.getElementById('play-again');
const winnerText = document.querySelector('.show-winner> h1 >span');
const rulesBtn = document.querySelector('#rules-btn');
const rulesCon = document.querySelector('.rules-con');
const closeBtn = document.querySelector('#close-btn');
let userChoice = '';
let score = 0;
const getRandomChoice = ()=> choices[Math.floor(Math.random()*choices.length)];



const showScore= (value)=>{
    score+= value;
    scoreValue.innerText = score
}
 
const  result = ()=>{
    const houseChoice = getRandomChoice()
    if(userChoice === 'rock' && houseChoice ==='scissors' || userChoice === 'paper' && houseChoice ==='rock' || userChoice === 'scissors' && houseChoice ==='paper'){
            showScore(1)
        winnerText.innerText = 'Win';

            
    }
    else if(userChoice === houseChoice){
        winnerText.innerText = "Draw";
    }
    else{
     
        winnerText.innerText = "Lose"
    }
     resultCon.style.display = "block";
     gameCon.style.display ='none'
}
options.forEach((option) => {
  option.addEventListener(
    "click",
    () => {
        userChoice = option.getAttribute("data-option");
        result();
    }
  );
});
playAgain.addEventListener('click',()=>{
    resultCon.style.display = "none";
    gameCon.style.display = "flex";
})

rulesBtn.addEventListener("click", () => rulesCon.classList.add("show-rules"));

closeBtn.addEventListener('click',()=>rulesCon.classList.remove('show-rules'))