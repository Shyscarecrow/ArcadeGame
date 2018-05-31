var Enemy = function(y) {
	

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png',
	this.x = 0,
	this.y = y,
	this.speed = Math.random()*500;
	
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x += this.speed * dt;
	if(this.x > 550) {
		this.x = 0;
	}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

const Player = function(){
	this.sprite = 'images/char-boy.png',
	this.x = 0,
	this.y = 405
}
 
 Player.prototype.update = function() {
	 for (let enemy in allEnemies) {
		if ((this.x - enemy.x >= 100) && (this.y - enemy.y >= 100)) {
			this.x = 0;
			this.y = 0;
		}
	 }
	 if (this.y == -45) {
		alert ('You win!');
		this.x = 0;
		this.y = 405;
	}
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(move) {
	switch(move){
		case 'left': if (this.x != 0) {this.x -= 100};
		break;
		case 'right': if (this.x != 400) {this.x += 100};
		break;
		case 'up': if (this.y != -45 ) {this.y -= 90};
		break;
		case 'down': if (this.y != 405){this.y += 90};
		break;
	}

};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let player = new Player();
const coordinateY = [63, 146, 228];
let allEnemies = [];
	for (i = 0; i<3; i++){
		let enemy = new Enemy(coordinateY[i]);
		allEnemies.push(enemy);
	}


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
