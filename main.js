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
    this.playerPos = {
        x: this.x,
        y: this.y
    }
}

Player.prototype.moveUp = function () {
    if (theMaze[map.playerOne.playerPos.x][map.playerOne.playerPos.y + 2] === 0) {
        console.log(this.playerPos)
        return this.playerPos.y += 0
    } else {
        console.log(this.playerPos)
        return this.playerPos.y += 2;
    }

}

Player.prototype.moveDown = function () {
    if (theMaze[map.playerOne.playerPos.x][map.playerOne.playerPos.y - 2] === 0) {
        console.log(this.playerPos)
        return this.playerPos.y += 0;
    } else {
        console.log(this.playerPos)
        return this.playerPos.y -= 2;
    }
}

Player.prototype.moveLeft = function () {
    if (theMaze[map.playerOne.playerPos.x - 2][map.playerOne.playerPos.y] === 0) {
        console.log(this.playerPos)
        return this.playerPos.x += 0;
    } else {
        console.log(this.playerPos)
        return this.playerPos.x -= 2;
    }
}

Player.prototype.moveRight = function () {
    if (theMaze[map.playerOne.playerPos.x + 2][map.playerOne.playerPos.y] === 0){
        console.log(this.playerPos)
        return this.playerPos.x += 0;
    } else {
        console.log(this.playerPos);
        return this.playerPos.x += 2;

    }
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
        popup();
    }
}

function Map(maze) {
    this.limit = maze;
    this.playerOne = new Player(3, 10);
    this.playerTwo = new Player(3, 13);
    this.chronometer = new Chronometer();
    this.chronometer.startTime();
}

// Map.prototype.limitPlayerOne = function (x, y) {
//     if (theMaze[map.playerOne.playerPos.x + 1][map.playerOne.playerPos.y] === 0) {
//         //to be continued
//     } else if (x < 0) {
//         map.playerOne.x = 0;
//     }
//     if (y > this.limit[0]) {
//         map.playerOne.y = 800;
//     } else if (y < 0) {
//         map.playerOne.y = 0;
//     }
// }

// Map.prototype.limitPlayerTwo = function (x, y) {
//     if (x > this.limit[0]) {
//         map.playerTwo.x = 400;
//     } else if (x < 0) {
//         map.playerTwo.x = 0;
//     }
//     if (y > this.limit[0]) {
//         map.playerTwo.y = 800;
//     } else if (y < 0) {
//         map.playerTwo.y = 0;
//     }
// }


function Enemies(x, y) {
    this.x = x;
    this.y = y;
    this.speedX += 1.5;
    this.speedY += 1.5;
}

window.onload = function () {
    document.getElementById('start-button').onclick = function () {
        start();
        setInterval(printMinutes, 1000)
        setInterval(printSeconds, 1000)
    }
    function start() {

        this.map = new Map(theMaze)

        document.onkeydown = function (e) {
            switch (e.keyCode) {
                case 38: map.playerOne.moveUp(); break;
                case 40: map.playerOne.moveDown(); break;
                case 37: map.playerOne.moveLeft(); break;
                case 39: map.playerOne.moveRight(); break;
                case 90: map.playerTwo.moveUp(); break;
                case 83: map.playerTwo.moveDown(); break;
                case 81: map.playerTwo.moveLeft(); break;
                case 68: map.playerTwo.moveRight(); break;
            }
        }
    }
}

var theMaze = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 3, 3, 3, 1, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];