// TODO: add playerLives

// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * (200 - 50)) + 50;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.    
    // loop the enemies from left side
    if ((this.x >= player.x - 25 && this.x <= player.x +25) && (this.y >= player.y - 25 && this.y <= player.y +25)) {
        //add the player lives
        player.lives--;
        // reset the player
        player.reset();
    }
    if (this.x <= 505) {
        this.x += this.speed * dt;
    } else {
        this.x = 0;
    }
};

// Draw the enemy on the screen and draw the image
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Own player class

const Player = function () {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
    // lives
    this.lives = 3;
    // starter score
    this.score = 0;
    this.active = true;
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [];
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
