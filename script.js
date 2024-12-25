let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const choices = document.querySelectorAll(".choice");
let res= document.querySelector("#msg")

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
       // console.log(userChoice,"was clicked");
        playGame(userChoice)
    })
})

const GenComp =()=>{
    //rock,paper,scissor
    const options = ["rock","paper","scissor"]
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx];
}

const playGame =(userChoice)=>{
    console.log("user choice was",userChoice);
    const compChoice = GenComp();
    console.log("computer choice was",compChoice);

    if(userChoice===compChoice){
        console.log("game was draw");
        res.innerText=`Game was draw, both chosen ${userChoice}`;
        res.style.backgroundColor="#081b31";
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false :true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice === "scissor" ? false :true;
        }
        else{
            userWin = compChoice === "rock" ? false :true;
        }
        showWinner(userWin,compChoice,userChoice);
    }
}

const showWinner=(userWin,compChoice,userChoice)=>{
    if(userWin===true){
    userScore++; 
    userScorePara.innerText = userScore;   
    res.innerText=`You win, Your ${userChoice} beats ${compChoice}`;
    res.style.backgroundColor="green";

    }
    else{
    compScore++;  
    compScorePara.innerText = compScore;  
    res.innerText=`You lose, ${compChoice} beats Your ${userChoice}`;  
    res.style.backgroundColor="red"; 
    }
}
