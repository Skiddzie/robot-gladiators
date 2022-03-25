var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        if (confirmSkip){
            alert("player has chosen to skip the fight");
            playerMoney -= 2;
            console.log("Player Money: " + playerMoney);
            break;
        }
        else {
            fight();
        }
    }
        

        
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth -= playerAttack; 
        
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth -= enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        }
        else {
            window.alert (playerName + " still has " + playerHealth + " health left.");
        }
    }
  };


var endGame = function() {
    if (playerHealth > 0) {
        alert("good job you win");
    }
    else {
        alert("you lost dude");
    }

    var playerAgainConfirm = window.confirm("would you like to play again?");

    if (playerAgainConfirm) {
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;
        startGame();
    }
    else {
        alert("thanks for playing!");
    }
}
var startGame = function() {

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round: " + (i+1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        }
        else {
            alert("You have lost your robot in battle! Game Over");
            break;
        }
        startGame();
    }
    endGame();
};
startGame();
// fight();