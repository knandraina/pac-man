// moveup : 38
// movedown : 40
// moveleft : 37
// moveright : 39
// z : 90
// s : 83 
// q : 81
// d : 68

function Player(x, y) {
    this.x = x;
    this.y = y;

}

Player.prototype.moveUp = function () {
    console.log(this.y);
    return this.y += 2;
}

Player.prototype.moveDown = function () {
    console.log(this.y);
    return this.y -= 2;
}

Player.prototype.moveLeft = function () {
    console.log(this.x);
    return this.x -= 2;
}

Player.prototype.moveRight = function () {
    console.log(this.x);
    return this.x += 2;
}


function Chronometer() {
    this.currentTime = 300;
    this.minute = "05";
    this.second = "00";
}

Chronometer.prototype.startTime = function () {
    this.intervalId = setInterval(() => {
        this.currentTime -= 1;
        this.setTime();
        this.endGame();
    }, 1000);
}

Chronometer.prototype.minutes = function () {
    return Math.floor(this.currentTime / 60);
}

Chronometer.prototype.seconds = function () {
    return (this.currentTime < 60) ? this.currentTime : (this.currentTime % 60);
}

Chronometer.prototype.twoDigitsNumber = function (value) {
    if (value < 10) {
        return "0" + value;
    } else {
        return value.toString()
    }
};

Chronometer.prototype.setTime = function () {
    this.minute = this.twoDigitsNumber(this.minutes());
    this.second = this.twoDigitsNumber(this.seconds());
}

Chronometer.prototype.endGame = function () {
    if (this.currentTime === 0) {
        clearInterval(this.intervalId);
    }
}

function Map() {
    this.limit = [400, 800];
    this.playerOne = new Player(0,40);
    this.playerTwo = new Player(0, 80);
    this.chronometer = new Chronometer();
    this.chronometer.startTime();
}

Map.prototype.limitPlayerOne = function (x, y) {
    if (x > this.limit[0]) {
        map.playerOne.x = 400;
    } if (x < 0) {
        map.playerOne.x = 0;
    } if (y > this.limit[0]){
        map.playerOne.y = 800;
    } if (y < 0) {
        map.playerOne.y = 0;
    }
}

Map.prototype.limitPlayerTwo = function (x, y) {
    if (x > this.limit[0]) {
        map.playerTwo.x = 400;
    } if (x < 0) {
        map.playerTwo.x = 0;
    } if (y > this.limit[0]){
        map.playerTwo.y = 800;
    } if (y < 0) {
        map.playerTwo.y = 0;
    }
}

window.onload = function () {
    document.getElementById('start-button').onclick = function () {
        start();
    }
    function start() {

        this.map = new Map()

        document.onkeydown = function (e) {
            switch (e.keyCode) {
                case 38: map.playerOne.moveUp(); map.limitPlayerOne(map.playerOne.x, map.playerOne.y); break;
                case 40: map.playerOne.moveDown(); map.limitPlayerOne( map.playerOne.x, map.playerOne.y); break;
                case 37: map.playerOne.moveLeft(); map.limitPlayerOne(map.playerOne.x, map.playerOne.y);  break;
                case 39: map.playerOne.moveRight(); map.limitPlayerOne(map.playerOne.x, map.playerOne.y);  break;
                case 90: map.playerTwo.moveUp(); map.limitPlayerOne(playerTwo.x, playerTwo.y); break;
                case 83: map.playerTwo.moveDown(); map.limitPlayerOne(playerTwo.x, playerTwo.y); break;
                case 81: map.playerTwo.moveLeft(); map.limitPlayerOne(map.playerTwo.x, map.playerTwo.y); break;
                case 68: map.playerTwo.moveRight(); map.limitPlayerOne(map.playerTwo.x, map.playerTwo.y); break;
            }
        }
    }
}
