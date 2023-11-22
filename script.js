const button = document.getElementsByClassName('button')[0];
const hearts = document.getElementsByClassName('fa-heart');
const score = document.createElement("h1");
const scoreNumber = document.createElement("h1");
const refreshButton = document.querySelector('.refresh-button');
const guessButton = document.querySelector('.guess-button');
const answerText = document.createElement("h1");
score.classList.add("score");
scoreNumber.classList.add("score-number");

let remainingHearts = hearts.length;
let scores = 0;
let randomNum;

document.body.appendChild(score);
score.textContent="Score:"
document.body.appendChild(scoreNumber);
scoreNumber.textContent=`${scores}`

const refreshPage = () => {
  location.reload();
}
refreshButton.addEventListener('click', refreshPage)

button.addEventListener('click',() =>{
    const min = 1;
    const max = 20;
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    guessButton.style.display = "block"
    button.style.display = "none"
});

guessButton.addEventListener('click',()=>{
    const user = prompt("Guess the number from 1 to 20");

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
    }else if(user < 1 || user > 20){
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
            guessButton.style.display = "none";
            document.body.appendChild(answerText);
            answerText.style = "display:block;color:white;"
            answerText.textContent = `it was ${randomNum}`
        }
    }
});

/*                     
        -+-
         A
        /=\               /\  /\    ___  _ __  _ __ __    __
      i/ O \i            /  \/  \  / _ \| '__|| '__|\ \  / /
      /=====\           / /\  /\ \|  __/| |   | |    \ \/ /
      /  i  \           \ \ \/ / / \___/|_|   |_|     \  /
    i/ O * O \i                                       / /
    /=========\        __  __                        /_/    _
    /  *   *  \        \ \/ /        /\  /\    __ _  ____  | |
  i/ O   i   O \i       \  /   __   /  \/  \  / _` |/ ___\ |_|
  /=============\       /  \  |__| / /\  /\ \| (_| |\___ \  _
  /  O   i   O  \      /_/\_\      \ \ \/ / / \__,_|\____/ |_|
i/ *   O   O   * \i
/=================\
       |___|

*/