var Enemy = function(y) {

    this.sprite = 'images/enemy-bug.png',
	this.x = 0,
	this.y = y,
	this.speed = Math.random()*800;
	
};

// Updating the enemy's position
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
  	this.x += this.speed * dt;
	if(this.x > 550) {
		this.x = 0;
	}
	
//Check the collision with player:

	if (this.x < player.x + 60 &&
    this.x + 60 > player.x &&
    this.y < player.y + 60 &&
    60 + this.y > player.y) {
		//Return player to the start position:
		
		player.x = 0;
		player.y = 405;
	}
};

// Draw the enemy on the screen, required method for game:

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

const Player = function(){
	this.sprite = 'images/char-cat-girl.png',
	this.x = 0,
	this.y = 405;
}
 
 Player.prototype.update = function() {
	 // Checking if player reach the water:
	 if (this.y == -45) {
		alert ('You win!');
	//and reset the position to the starting one:
		this.x = 0;
		this.y = 405;
	}
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Changing the position of a player:

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


// This listens for key presses and sends the keys to
// Player.handleInput() method

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
