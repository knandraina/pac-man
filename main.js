// moveup : 38
// movedown : 40
// moveleft : 37
// moveright : 39
// z : 90
// s : 83 
// q : 81
// d : 68

function PlayerOne() {
    this.x = 0;
    this.y = 40;

}

PlayerOne.prototype.moveUp = function() {
    console.log(this.y);
    return this.y += 2; 
}

PlayerOne.prototype.moveDown = function(){
    console.log(this.y);
    return this.y -= 2;
}

PlayerOne.prototype.moveLeft = function() {
    console.log(this.x);
    return this.x -= 2;
}

PlayerOne.prototype.moveRight = function() {
    console.log(this.x);
    return this.x += 2;
}

function PlayerTwo(){
    this.x = 800;
    this.y = 40;
}

PlayerTwo.prototype.moveUp = function() {
    console.log(this.y);
    return this.y += 2; 
}

PlayerTwo.prototype.moveDown = function(){
    console.log(this.y);
    return this.y -= 2;
}

PlayerTwo.prototype.moveLeft = function() {
    console.log(this.x);
    return this.x -= 2;
}

PlayerTwo.prototype.moveRight = function() {
    console.log(this.x);
    return this.x += 2;
}

window.onload = function () {
    document.getElementById('start-button').onclick = function () {
        start();
    }
    function start() {

         this.playerOne = new PlayerOne();
         this.playerTwo = new PlayerTwo()

        document.onkeydown = function (e) {
            switch (e.keyCode) {
                case 38: playerOne.moveUp(); break;
                case 40: playerOne.moveDown(); break;
                case 37: playerOne.moveLeft(); break;
                case 39: playerOne.moveRight(); break;
                case 90 : playerTwo.moveUp(); break;
                case 83 : playerTwo.moveDown(); break;
                case 81 : playerTwo.moveLeft(); break;
                case 68: playerTwo.moveRight(); break;
            }
        }
    }
}
