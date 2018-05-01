// TODO: add playerLives

// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * (200 - 50)) + 50;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.    
    // loop the enemies from left side
    if ((this.x >= player.x - 25 && this.x <= player.x + 25) && (this.y >= player.y - 25 && this.y <= player.y + 25)) {
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
// Place the player object in a variable called player
var Player = function() {    
    this.x = 200;
    this.y = 400;
    // lives
    this.lives = 3;
    // starter score
    this.score = 0;
    this.active = true;
    this.sprite = 'images/char-boy.png';
};

// This listens for key presses and movements by keys
Player.prototype.update = function(dt) {
    // up movement
    if (this.pressedKey === 'up' && this.y > 0) {
        this.y = this.y - 90;
    }
    // down movement
    if (this.pressedKey === 'down' && this.y < 400) {
        this.y = this.y + 90;
    }
    // left movement
    if (this.pressedKey === 'left' && this.x > 0) {
        this.x = this.x - 100;
    }
    // right movement
    if (this.pressedKey === 'right' && this.x < 400) {
        this.x = this.x + 100;
    }

    //player move
    this.pressedKey = null;

    //reset the player
    if (this.y < 0) {
        this.score++;
        this.reset();
    }

    // lives
    ctx.font = '2.5em Acme';
    ctx.fillStyle = 'blue';
    ctx.clearRect(0, 0, 505, 50);
    ctx.fillText('Lives: ' + this.lives, 10, 40);

    // score
    ctx.fillStyle = 'lime';
    ctx.fillText('Score: ' + this.score, 300, 40);
};

// Draw the player on canvas-Player prototype function
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
allEnemies.push(new Enemy(0, 50));
allEnemies.push(new Enemy(0, 140));
allEnemies.push(new Enemy(0, 230));

// Place the player object in a variable called player
var player = new Player();


// function(e)
Player.prototype.handleInput = function(e) {
    this.pressedKey = e;
};

// reset
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
    if (this.lives === 0) {
        this.active = false;
    }
};

// default event listener for arrow keys
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
// Player.handleInput() method.
    player.handleInput(allowedKeys[e.keyCode]);
});
