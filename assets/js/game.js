var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;
}

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
          this.health += 20;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      },
      upgradeAttack: function() {
        if (this.money >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
          this.attack += 6;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      }
  };
var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
  ];




var fight = function(enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        if (confirmSkip){
            alert("player has chosen to skip the fight");
            playerInfo.money -= 2;
            console.log("Player Money: " + playerInfo.money);
            break;
        }
        else {
            fight(pickedEnemyObj);
        }
    }
        

        
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerInfo.name + " attacked " + enemy.name + " for " + damage + " damage. " + enemy.name + " now has " + enemy.health + " health remaining."
        );
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemy.name + " attacked " + playerInfo.name + " for " + damage + " damage. " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );
        
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            break;
        }
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        }
        else {
            window.alert (playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
  };


var endGame = function() {
    if (playerInfo.health > 0) {
        alert("good job you win");
    }
    else {
        alert("you lost dude");
    }

    var playerAgainConfirm = window.confirm("would you like to play again?");

    if (playerAgainConfirm) {
        playerInfo.reset();
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
        case "REFILL":
            playerInfo.refillHealth();
            break;
        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack();
            break;
        case "leave":
        case "LEAVE":
            window.alert("leaving the store");

            break;
        default:
            window.alert("please choose a valid option");

            shop();
            break;

    }
}
var startGame = function() {

    for(var i = 0; i < enemyInfo.length; i++) {
        console.log(i);
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round: " + (i+1));
            var pickedEnemyObj = enemyInfo[i];

            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);

            if (playerInfo.health > 0 && i < enemyInfo.length - 1){
                
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