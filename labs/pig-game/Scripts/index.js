/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, dice, winScore, gamePlaying;

$(document).ready(function () {
    init();

    //---Roll Dice Click Event---------------------------------------------------------------
    document.querySelector('.btn-roll').addEventListener('click', function(){
        if (gamePlaying) {
            //1. Generate Random Number
            var dice = Math.floor((Math.random() * 6)) + 1; 

            //2. Display the Result
            var diceDOM = document.querySelector('.dice'); //Reference the dice
            diceDOM.src = '../../Images/dice-' + dice + '.png'; //Set the dice image
            diceDOM.style.display = 'block'; //Show the hidden dice

            //3. Update the round score if the rolled number was not a 1
            if (dice !== 1) {
                //Set current score
                roundScore += dice;
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

            //Check if player won the game
            if (score[activePlayer] >= winScore) {
                document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

                //Hide dice
                document.querySelector('.dice').style.display = 'none';

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


    function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        //Set current scores to 0
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;        

        //Toggle the active css player display
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //Hide the Dice image
        document.querySelector('.dice').style.display = 'none';
    }

    //FUNCTIONS-----------------------------------------------------------------------------------
    function init() {
        score = [0, 0];
        roundScore = 0;
        activePlayer = 0;
        winScore = 100;
        gamePlaying = true;

        //---Hide the Dice image
        document.querySelector('.dice').style.display = 'none';

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
});







