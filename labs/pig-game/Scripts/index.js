/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

CODING CHALLENGE:
1. A player  looses his entire score when he rolls two 6 in a row. After that, it's the next player's turn.
(Hint: Always save the previous dice roll in seperate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read the value with .value property in Javascript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. 
(Hint: you will need the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, dice, gamePlaying;
var lastRoll, winningScore;

$(document).ready(function () {
    init();
    
    //---Roll Dice Click Event---------------------------------------------------------------
    document.querySelector('.btn-roll').addEventListener('click', function(){
        if (gamePlaying) {
            //1. Generate Random Number
            var dice1 = Math.floor((Math.random() * 6)) + 1; 
            var dice2 = Math.floor((Math.random() * 6)) + 1; 

            //2. Display the Result
            document.getElementById('dice-1').src = '../../Images/dice-' + dice1 + '.png'; //Set the dice1 image
            document.getElementById('dice-2').src = '../../Images/dice-' + dice2 + '.png'; //Set the dice2 image
            document.getElementById('dice-1').style.display = 'block'; //Show the hidden dice1        
            document.getElementById('dice-2').style.display = 'block'; //Show the hidden dice2

            if (dice1 !== 1 && dice2 !== 1) {
                //Set current score
                roundScore += (dice1 + dice2);
                document.getElementById('current-' + activePlayer).textContent = roundScore;
            } else {
                //Next player
                nextPlayer();
            }        
        }
    });
    
    //---Hold Click Event---------------------------------------------------------------------
    document.querySelector('.btn-hold').addEventListener('click', function(){
        if (gamePlaying) {
            //Add Current Score to Global Score
            score[activePlayer] += roundScore;

            //Update User Interface
            document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

            setWinningScore();

            //Check if player won the game
            if (score[activePlayer] >= winningScore) {
                document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

                //Hide dice
                document.getElementById('dice-1').style.display = 'none';   
                document.getElementById('dice-2').style.display = 'none'; 

                //Add the Winner css to the Player Panel Class
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

                //Remove the Active css from the Player Panel Class
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

                //Set the State variable
                gamePlaying = false;
            } else {
                //Next Player
                nextPlayer();
            }
        }
    });

    //---New Game Click Event--------------------------------------------------------------------
    document.querySelector('.btn-new').addEventListener('click', init);    
});

//---Final Score Keypress Event--------------------------------------------------------------
function onKeyPress(obj, evt) {
    var keyCode = parseInt(evt.keyCode);

    if (keyCode >= 48 && keyCode <= 57) {
        return true;
    } else {
        return false;
    }
}

//FUNCTIONS----------------------------------------------------------------------------------
function init() {
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    winningScoreScore = 100;
    gamePlaying = true;
    lastRoll = 0;

    //---Hide the Dice image
    document.getElementById('dice-1').style.display = 'none';   
    document.getElementById('dice-2').style.display = 'none'; 

    //---Set the scores to 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';    

    //Set the Player names
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    //Remove the Winner class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    //Remove the Active class
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    //Set Active player
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    lastRoll = 0;

    //Set current scores to 0
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;        

    //Toggle the active css player display
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //Hide the Dice image
    document.getElementById('dice-1').style.display = 'none';   
    document.getElementById('dice-2').style.display = 'none'; 
}

function setWinningScore () {
    winningScore = document.querySelector(".final-score").value;    
    if (winningScore == "") {
        winningScore = 100;    
    } else {
        winningScore = parseInt(winningScore);
    }
}

//////////////////////////////////////////////////////////
// Lecture: DOM Manipulation Get & Set                  //
//////////////////////////////////////////////////////////
/*
//1.---Set the plain element text
document.querySelector('#current-' + activePlayer).textContent = dice;

//2.---Set the element text with html tags (e.q. Set the current score in italic)
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//3.---Get the element text value (e.g. Get the Global score)
var x = document.querySelector('#score-1').textContent;
console.log(x);

//4.---Manipulate the css class of an element (e.q. hide the Dice image)
document.querySelector('.dice').style.display = 'none';
*/


//////////////////////////////////////////////////////////
// Lecture: DOM Manipulation Get & Set                  //
//////////////////////////////////////////////////////////
//1.---Create an event listener with a callback function
/*
function roll (){
    //Do something
    console.log('Roll Dice is clicked, with callback function.');
}

document.querySelector('.btn-roll').addEventListener('click', roll);
*/

//2.---Create an event listener with an anonymous function
/*
document.querySelector('.btn-roll').addEventListener('click', function(){
    //Do something
    console.log('Roll dice is clicked, with anonymous function');
});
*/

//3.---Referencing an element with a variable (Way 1 using class)
//var rollDOM = document.querySelector('.btn-roll');
//console.log(rollDOM);

//4.---Referencing an element with a variable (Way 2 using id)
//var scoreDOM = document.getElementById('score-1');
//console.log(scoreDOM);

//5.---Removing a css class reference from an Element
//document.querySelector('.player-0-panel').classList.remove('active');

//6.---Adding a css class reference to an Element
//document.querySelector('.player-0-panel').classList.add('active');

//7.---Remove a css class if it already defined and Add it if not (by using Toggle)
//document.querySelector('.player-0-panel').classList.toggle('active');
//document.querySelector('.player-1-panel').classList.toggle('active');











