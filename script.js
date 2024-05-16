let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg1");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
        msg.innerText = " Game was Draw. Play Again!!"
        msg.style.backgroundColor = "#5fc9f3";
}

const showWinner = (userWin, compChoice, userChoice) => {
    if(userWin){
        msg.innerText = `You Win!  Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore+=1;
        userScorePara.innerText = userScore;
    }
    else{
        
        compScore+=1;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    const compChoice = getCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ?false:true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ?false:true;
        }
        else{
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin, compChoice, userChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});