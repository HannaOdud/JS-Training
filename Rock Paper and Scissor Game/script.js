const choises = ["rock", "paper", "scissors"];
let pRezDom = document.getElementById("pRez");
let cRezDom = document.getElementById("cRez");
let movesDom = document.getElementById("moves");
const rockDom = document.getElementById("rock");
const paperDom = document.getElementById("paper");
const scissorsDom = document.getElementById("scissors");
const actorDom = document.getElementById("actor");
const actionDom = document.getElementById("action");

function setup(){
    rockDom.addEventListener("click",()=>{
        let result = choise("rock");
        actorDom.textContent = result;
        playProcess(result);
        
    })
    paperDom.addEventListener("click",()=>{
        let result =  choise("paper");
        actorDom.textContent = result;
        playProcess(result);
    })
    scissorsDom.addEventListener("click",()=>{
        let result =  choise("scissors");
        actorDom.textContent = result;
        playProcess(result);
    })
}

function playProcess(result){
        if ( result == "Player Won"){
            let pRez = Number(pRezDom.textContent);
            pRez++;
            pRezDom.textContent = pRez;
            //moves left
            let moves = Number(movesDom.textContent);
            moves--;
            movesDom.textContent = moves;
        }
        else if( result = "Comp Won" ){
            let cRez = Number(cRezDom.textContent);
            cRez++;
            cRezDom.textContent = cRez;
            let moves = Number(movesDom.textContent);
            moves--;
            movesDom.textContent = moves;
        }
        else if ( result = "Draw!"){
            let moves = Number(movesDom.textContent);
            moves--;
            movesDom.textContent = moves;
        }
        //check if game ended

        if(Number(movesDom.textContent)== 0){
            actionDom.innerHTML = "";
            //winner of the entire game
        let winner ="";
        if(Number(pRezDom.textContent)>Number(cRezDom.textContent)){
            winner = "You Won the Game!"
        }
        else if (Number(pRezDom.textContent) < Number(cRezDom.textContent)){
            winner = "You Lost the Game!"
        }
        else{
            winner = "Draw!"
        }
        const h1 = document.createElement("h1");
        h1.textContent = "GAME OVER";
        actionDom.appendChild(h1);
        const p = document.createElement("p");
        p.textContent = winner;
        actionDom.appendChild(p);
        const button = document.createElement("button");
        button.textContent = "Restart";
        actionDom.appendChild(button);
        button.addEventListener("click",()=>{
            location.reload();
        })
        }
        
}


function choise(selection){
    let compChoice = getRandomInt(0,2);
    let compWord = choises[compChoice];

    if( (selection == "scissors" && compWord == "paper")|| (selection == "rock" && compWord == "scissors" )||( selection == "paper" && compWord == "rock")){
        return "Player Won";
    }
    else if ((selection  == "paper" && compWord == "scissors" )|| (selection == "scissors" && compWord == "rock")||(selection == "rock" && compWord == "paper")){
        return "Comp Won";
    }
    else if (selection == compWord){
        return "Draw!";
    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


window.onload = setup;