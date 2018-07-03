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
    if (theMaze[map.playerOne.x][map.playerOne.y + 2] === 0) {
        console.log(map.playerOne, true)
        return map.playerOne.y += 0
    } else {
        console.log(map.playerOne)
        return map.playerOne.y += 2;
    }

}

Player.prototype.moveDown = function () {
    if (theMaze[map.playerOne.x][map.playerOne.y - 2] === 0) {
        console.log(map.playerOne, true)
        return map.playerOne.y += 0;
    } else {
        console.log(map.playerOne)
        return map.playerOne.y -= 2;
    }
}

Player.prototype.moveLeft = function () {
    if (theMaze[map.playerOne.x - 2][map.playerOne.y] === 0) {
        console.log(map.playerOne, true)
        return map.playerOne.x += 0;
    } else {
        console.log(map.playerOne)
        return map.playerOne.x -= 2;
    }
}

Player.prototype.moveRight = function () {
    if (theMaze[map.playerOne.x + 2][map.playerOne.y] === 0) {
        console.log(map.playerOne, true)
        return map.playerOne.x += 0;
    } else {
        console.log(map.playerOne);
        return map.playerOne.x += 2;

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
        map.firstEnemies.moving()
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

function Map(maze) {
    this.limit = maze;
    this.playerOne = new Player(3, 10);
    this.playerTwo = new Player(3, 13);
    this.chronometer = new Chronometer();
    this.chronometer.startTime();
    this.firstEnemies = new Enemies(8, 8)
}

function Enemies(x, y) {
    this.x = x;
    this.y = y;
    this.direction = Math.floor((Math.random() * 3) + 1)

}

Enemies.prototype.moving = function () {
    switch (this.direction) {
        case 1:
            theMaze[this.x + 1][this.y] === 0 ? this.direction = Math.floor((Math.random() * 3) + 1) : map.firstEnemies.x += 1;
            console.log(map.firstEnemies)
            break;
        case 2:

                theMaze[this.x - 1][this.y] === 0 ? this.direction = Math.floor((Math.random() * 3) + 1) : map.firstEnemies.x -= 1;
                console.log(map.firstEnemies)
       
            break;
        case 3:
                theMaze[this.x][this.y + 1] === 0 ? this.direction = Math.floor((Math.random() * 3) + 1) : map.firstEnemies.y += 1;
                console.log(map.firstEnemies)
            break;
        case 4:
                theMaze[this.x][this.y - 1] === 0 ? this.direction = Math.floor((Math.random() * 3) + 1) : map.firstEnemies.y -= 1;
                console.log(map.firstEnemies)
            break;
    }
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