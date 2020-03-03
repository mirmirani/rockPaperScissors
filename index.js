const ranPick = () => {
let compChoice = ['Rock', 'Paper', 'Scissors'];
let compPick = compChoice[Math.floor(Math.random()*compChoice.length)];
return compPick; 
};


const userRPS = () => {
let userChoice = ['Rock', 'Paper', 'Scissors'];
let userPick = userChoice[Math.floor(Math.random()*userChoice.length)];
return userPick;
}

const rpsBattle = () => {
    if (ranPick() === userRPS()) {return 'It\'s a draw!'}
    else {return 'User Wins!'};
};















