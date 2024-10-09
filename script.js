// om de keuze van de computer te krijgen.
function getComputerChoice() {
     word = Math.floor(Math.random()* 3);

     if (word === 0) {
        return "rock"
     }if (word === 1) {
        return "paper"
     } else {
        return "scissors"
     }
}

//console.log(getComputerChoice())



//keuze van de mens
function getHumainChoice() {
    choice = prompt("choose between paper, rock or scissors");
    //choice.toLowerCase();
    
    if (choice === "paper"|| choice === "rock" || choice === "scissors"){
          return choice;
    }else{
      return " Wrong choise choose again"
    }
   return choice
}

//console.log(getHumainChoice())

let humanScore = 0;
let computerScore = 0;


