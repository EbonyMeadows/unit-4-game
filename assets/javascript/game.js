var gem1= Math.floor(Math.random()* 11)+20;
var gem2= Math.floor(Math.random()* 17)+3;
var gem3= Math.floor(Math.random()* 32)+12;
var gem4= Math.floor(Math.random()* 11)+40;
var userTotal=0;
var wins=0;
var losses=0;
var computerTotal = Math.floor(Math.random()* 100)+50;
console.log(computerTotal);


$("#computerScore").text(computerTotal);

function displayScore(score){
    $("#playerScore").text(score);
}
//checks the score and logs wins and losses
function checkScore(score){
    if(computerTotal === score){
        console.log("You Win!");
        wins++;
        $("#wins").text(wins);
        gameReset();
    }
    else if(score > computerTotal){
        console.log("Loser!");
        losses++;
        $("#losses").text(losses);
        gameReset();
    }
}

$("#gem1").click(function(){
    userTotal += gem1;
    console.log(userTotal);
    displayScore(userTotal);
    checkScore(userTotal);
});

$("#gem2").click(function(){
    userTotal += gem2;
    console.log(userTotal);
    displayScore(userTotal);
    checkScore(userTotal);
});

$("#gem3").click(function(){
    userTotal += gem3;
    console.log(userTotal);
    displayScore(userTotal);
    checkScore(userTotal);
});

$("#gem4").click(function(){
    userTotal += gem4;
    console.log(userTotal);
    displayScore(userTotal);
    checkScore(userTotal);
});

//need start game function

// need reset game function

function gameReset(){
    computerTotal = Math.floor(Math.random()* 100)+50;
    userTotal = 0;
    $("#computerScore").text(computerTotal);
    displayScore(0);
    gem1= Math.floor(Math.random()* 11)+20;
    gem2= Math.floor(Math.random()* 17)+3;
    gem3= Math.floor(Math.random()* 32)+12;
    gem4= Math.floor(Math.random()* 11)+40;
}
console.countReset();