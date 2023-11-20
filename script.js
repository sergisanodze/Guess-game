const min = 1;
const max = 10;

const button = document.getElementsByClassName('button')[0];
const hearts = document.getElementsByClassName('fa-heart');
const score = document.createElement("h1");
const scoreNumber = document.createElement("h1");
const refreshButton = document.querySelector('.refresh-button');
score.classList.add("score");
scoreNumber.classList.add("score-number");

let remainingHearts = hearts.length;
let scores = 0;

document.body.appendChild(score);
score.textContent="Score:"
document.body.appendChild(scoreNumber);
scoreNumber.textContent=`${scores}`

const refreshPage = () => {
  location.reload();
}
refreshButton.addEventListener('click', refreshPage)

button.addEventListener('click',()=>{
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    const user = prompt("Guess the number from 1 to 10");

    if(user == randomNum){
        alert("You've got it! :)");
        scores += 1;
        scoreNumber.textContent = `${scores}`;
        for (const heart of hearts){
            while(remainingHearts !== 10){
                remainingHearts++;
            }
            heart.style.color = "red";
        }
    }else if(user < 1 || user > 10){
        alert("please enter a number from 1 to 10");
    }else{
        alert("Nope :(");
        if (remainingHearts > 0) {
            remainingHearts--;
            hearts[remainingHearts].style = "color:white;animation: play 1s ease;";
        }
        if (remainingHearts === 0) {
            alert("You've run out of hearts! Game over.");
            button.disabled = true;
            refreshButton.style.display = "block";
            button.style.display = "none";
        }
    }
});