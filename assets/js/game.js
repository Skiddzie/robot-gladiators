var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;
}

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
        var damage = randomNumber(playerAttack - 3, playerAttack);

        enemyHealth = Math.max(0, enemyHealth - damage);
        
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + " for " + damage + " damage. " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        var damage = randomNumber(enemyAttack - 3, enemyAttack);

        playerHealth = Math.max(0, playerHealth - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + " for " + damage + " damage. " + playerName + " now has " + playerHealth + " health remaining."
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
var shop = function() {
    var shopOptionPrompt = prompt("would you like to refill your health, upgrade your attack, or leave?");
    switch (shopOptionPrompt) {
        case "refill":
            if (playerMoney >= 7){
            window.alert("refilling player's health by 20 for 7 dollars");

            playerHealth += 20;
            playerMoney -= 7;
            break;
            }
        case "upgrade":
            if (playerMoney >= 7){
            window.alert("upgrading player's attack by 6 for 7 dollars");

            playerAttack += 6;
            playerMoney -= 7;
            break;
            }
        case "leave":
            window.alert("leaving the store");

            break;
        default:
            window.alert("please choose a valid option");

            shop();
            break;

    }
}
var startGame = function() {

    for(var i = 0; i < enemyNames.length; i++) {
        console.log(i);
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round: " + (i+1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40, 60);
            fight(pickedEnemyName);

            if (playerHealth > 0 && i < enemyNames.length - 1){
                
                var shopConfirm = window.confirm("would you like to visit the shop");
                
                if (shopConfirm) {
                    shop();
                }
            }
        }
        else {
            alert("You have lost your robot in battle! Game Over");
            break;
        }
    }
    endGame();
};

startGame();


// fight();