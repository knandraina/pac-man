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
    this.winner = false;
    this.speedX = 1;
    this.speedY = 1;
    this.isDead = false;
}

Player.prototype.moveUp = function () {
    if (theMaze[this.x][this.y + 1] === 0 || map.firstEnemies.eating === true || map.secondEnemies.eating === true || map.thirdEnemies.eating === true || map.fourthEnemies.eating === true) {
        console.log(map.playerOne, map.playerTwo, true)
        return this.y += 0
    } else {
        console.log(map.playerOne, map.playerTwo)
        this.y += this.speedY; this.superPower()
    }
}

Player.prototype.moveDown = function () {
    if (theMaze[this.x][this.y - 1] === 0 || map.firstEnemies.eating === true || map.secondEnemies.eating === true || map.thirdEnemies.eating === true || map.fourthEnemies.eating === true) {
        console.log(map.playerOne, map.playerTwo, true)
        return this.y += 0;
    } else {
        console.log(map.playerOne, map.playerTwo)
        this.y -= this.speedY; this.superPower();
    }
}

Player.prototype.moveLeft = function () {
    if (theMaze[this.x - 1][this.y] === 0 || map.firstEnemies.eating === true || map.secondEnemies.eating === true || map.thirdEnemies.eating === true || map.fourthEnemies.eating === true) {
        console.log(map.playerOne, map.playerTwo, true)
        return this.x += 0;
    } else {
        console.log(map.playerOne, map.playerTwo)
        this.x -= this.speedX; this.superPower()
    }
}

Player.prototype.moveRight = function () {
    if (theMaze[this.x + 1][this.y] === 0 || map.firstEnemies.eating === true || map.secondEnemies.eating === true || map.thirdEnemies.eating === true || map.fourthEnemies.eating === true) {
        console.log(map.playerOne, map.playerTwo, true)
        return this.x += 0;
    } else {
        console.log(map.playerOne, map.playerTwo)
        this.x += this.speedX; this.superPower()
    }
}

Player.prototype.superPower = function () {
    if (theMaze[this.x][this.y] === 5) {
        theMaze[this.x][this.y] = 1;
        setTimeout(() => {
            this.speedX = 1;
            this.speedY = 1;

        }, 10000);
        if (map.playerOne.x === map.playerTwo.x && map.playerTwo.y === map.playerTwo.y) {
            this.winner = true;
        }
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
        map.secondEnemies.moving()
        map.thirdEnemies.moving()
        map.fourthEnemies.moving()
        this.endGame();
        map.drawing();
        map.firstEnemies.collision();
        map.secondEnemies.collision();
        map.thirdEnemies.collision();
        map.fourthEnemies.collision();
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
    } else if (this.winner === true) {
        clearInterval(this.intervalId);
    } else if (map.firstEnemies.eating === true || map.secondEnemies.eating === true || map.thirdEnemies.eating === true || map.fourthEnemies.eating === true) {
        clearInterval(this.intervalId);
    }
}

function Map(maze) {
    this.ctx = document.getElementById('canvas').getContext('2d');
    this.limit = maze;
    this.playerOne = new Player(2, 1);
    this.playerTwo = new Player(13, 13);
    this.chronometer = new Chronometer();
    this.chronometer.startTime();
    this.firstEnemies = new Enemies(10, 14)
    this.secondEnemies = new Enemies(9, 8)
    this.thirdEnemies = new Enemies(13, 2)
    this.fourthEnemies = new Enemies(4, 6)
}

Map.prototype.update = function () {
    this.drawing();
}

Map.prototype.drawing = function () {
    this.firstPlayer = new Image()
    this.firstPlayer.src = './images/pacman.png';
    this.firstPlayer.onload = () => {
        this.ctx.drawImage(this.firstPlayer, map.playerOne.y * 30 - 10, map.playerOne.x * 30 + 60, 20, 20)
    }

    this.firstEnemy = new Image();
    this.firstEnemy.src = './images/Stickeroid.png'
    this.firstEnemy.onload = () => {
        this.ctx.drawImage(this.firstEnemy, map.firstEnemies.y * 30 - 10, map.firstEnemies.x * 30 + 60, 20, 20);
    }
    this.secondEnemy = new Image();
    this.secondEnemy.src = './images/Stickeroid.png'
    this.secondEnemy.onload = () => {
        this.ctx.drawImage(this.secondEnemy, map.secondEnemies.y * 30 - 10, map.secondEnemies.x * 30 + 60, 20, 20);
    }

    this.thirdEnemy = new Image();
    this.thirdEnemy.src = './images/Stickeroid.png'
    this.thirdEnemy.onload = () => {
        this.ctx.drawImage(this.thirdEnemy, map.thirdEnemies.y * 30 - 10, map.thirdEnemies.x * 30 + 60, 20, 20);
    }

    this.fourthEnemy = new Image();
    this.fourthEnemy.src = './images/Stickeroid.png'
    this.fourthEnemy.onload = () => {
        this.ctx.drawImage(this.fourthEnemy, map.fourthEnemies.y * 30 - 10, map.fourthEnemies.x * 30 + 60, 20, 20);
    }

    this.ball = new Image()
    this.ball.src = './images/ball.png';
    this.ball.onload = () => {
        for (var i = 0; i < theMaze.length; i++) {
            for (var j = 0; j < theMaze[i].length; j++) {
                if (theMaze[i][j] === 1) {
                    this.ctx.drawImage(this.ball, j * 30 - 10, i * 30 + 60, 10, 10);
                } else if (theMaze[i][j] === 5) {
                    this.ctx.drawImage(this.ball, j * 30 - 10, i * 30 + 60, 20, 20);
                }
            }
        }
    }

    var secondPLayer = new Image();
    secondPLayer.src = './images/pacman-green.png';
    secondPLayer.onload = () => {
        this.ctx.drawImage(secondPLayer, map.playerTwo.y * 30 - 10, map.playerTwo.x * 30 + 60, 20, 20)
    }

    this.ctx.clearRect(0, 0, 1000, 1000);
    for (var i = 0; i < theMaze.length; i++) {
        for (var j = 0; j < theMaze[i].length; j++) {
            if (theMaze[i][j] === 0) {
                this.ctx.fillStyle = "black";
                this.ctx.fillRect(j * 30 - 10, i * 30 + 60, 30, 30);
            } else if (theMaze[i][j] === 1) {
                this.ctx.fillStyle = "red";
                this.ctx.fillRect(j * 30 - 10, i * 30 + 60, 30, 30);
            } else if (theMaze[i][j] === 3) {
                this.ctx.fillStyle = "chartreuse";
                this.ctx.fillRect(j * 30 - 10, i * 30 + 60, 30, 30);
            } else if (theMaze[i][j] === 5) {
                this.ctx.fillStyle = "red";
                this.ctx.fillRect(j * 30 - 10, i * 30 + 60, 30, 30);
            }
        }
    }
}

function Enemies(x, y) {
    this.x = x;
    this.y = y;
    this.direction = Math.floor((Math.random() * 3) + 1)
    this.eating = false;
}

Enemies.prototype.moving = function () {
    switch (this.direction) {
        case 1:
            theMaze[this.x + 1][this.y] === 0 ? this.direction = Math.floor((Math.random() * 3) + 1) : this.x += 1;
            console.log(map.firstEnemies, map.secondEnemies, map.thirdEnemies, map.fourthEnemies)
            break;
        case 2:
            theMaze[this.x - 1][this.y] === 0 ? this.direction = Math.floor((Math.random() * 3) + 1) : this.x -= 1;
            console.log(map.firstEnemies, map.secondEnemies, map.thirdEnemies, map.fourthEnemies)
            break;
        case 3:
            theMaze[this.x][this.y + 1] === 0 ? this.direction = Math.floor((Math.random() * 3) + 1) : this.y += 1;
            console.log(map.firstEnemies, map.secondEnemies, map.thirdEnemies, map.fourthEnemies)
            break;
        case 4:
            theMaze[this.x][this.y - 1] === 0 ? this.direction = Math.floor((Math.random() * 3) + 1) : this.y -= 1;
            console.log(map.firstEnemies, map.secondEnemies, map.thirdEnemies, map.fourthEnemies)
            break;
    }
}

Enemies.prototype.collision = function () {
    console.log(this.x, this.y)
    if ((this.x === map.playerOne.x && this.y === map.playerOne.y)) {
        map.playerOne.isDead = true;
        map.playerTwo.winner = true;
        this.eating = true;
    } else if ((this.x === map.playerTwo.x && this.y === map.playerTwo.y)){
        this.eating = true;
        map.playerTwo.isDead = true;
        map.playerOne.winner = true;
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
        map.drawing()
        document.onkeydown = function (e) {
            switch (e.keyCode) {
                case 38: map.playerOne.moveLeft(); map.update(); break;
                case 40: map.playerOne.moveRight(); map.update(); break;
                case 37: map.playerOne.moveDown(); map.update(); break;
                case 39: map.playerOne.moveUp(); map.update(); break;
                case 90: map.playerTwo.moveLeft(); map.update(); break;
                case 83: map.playerTwo.moveRight(); map.update(); break;
                case 81: map.playerTwo.moveDown(); map.update(); break;
                case 68: map.playerTwo.moveUp(); map.update(); break;
            }
        }
    }
}

var theMaze = [
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];