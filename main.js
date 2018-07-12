// moveup : 38
// movedown : 40
// moveleft : 37
// moveright : 39
// z : 90
// s : 83 
// q : 81
// d : 68

function Player(x, y, name) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.winner = false;
    this.speedX = 1;
    this.speedY = 1;
    this.isDead = false;
    this.count = 0;
    this.active = false;
}



Player.prototype.moveUp = function () {
    map.listEnemies.forEach((element, index) => {
        console.log(map.listEnemies[index].eating)
        if (map.listEnemies[index].eating === true) {
            return this.y += 0;
        } else if (theMaze[this.x][this.y + 1] === 0) {
            return this.y += 0;

        }
    })
    if (theMaze[this.x][this.y + 1] !== 0) {
        this.y += this.speedY; this.superPower(); console.log(map.playerOne)
        map.listEnemies[0] != undefined ? map.listEnemies[0].collision() : console.log('ok')
        map.listEnemies[1] != undefined ? map.listEnemies[1].collision() : console.log('ok')
        map.listEnemies[2] != undefined ? map.listEnemies[2].collision() : console.log('ok')
        map.listEnemies[3] != undefined ? map.listEnemies[3].collision() : console.log('ok')
    }
}



Player.prototype.moveDown = function () {
    map.listEnemies.forEach((element, index) => {
        console.log(map.listEnemies[index].eating)
        if (map.listEnemies[index].eating === true) {
            return this.y += 0;
        } else if (theMaze[this.x][this.y - 1] === 0) {
            return this.y += 0;
        } else {

        }
    })
    if (theMaze[this.x][this.y - 1] !== 0) {
        this.y -= this.speedY; this.superPower(); console.log(map.playerOne)
        map.listEnemies[0] != undefined ? map.listEnemies[0].collision() : console.log('ok')
        map.listEnemies[1] != undefined ? map.listEnemies[1].collision() : console.log('ok')
        map.listEnemies[2] != undefined ? map.listEnemies[2].collision() : console.log('ok')
        map.listEnemies[3] != undefined ? map.listEnemies[3].collision() : console.log('ok')
    }
}


Player.prototype.moveLeft = function () {
    map.listEnemies.forEach((element, index) => {
        console.log(map.listEnemies[index].eating)
        if (map.listEnemies[index].eating === true) {
            return this.x += 0;
        } else if (theMaze[this.x - 1][this.y] === 0) {
            return this.x += 0;
        }
    })
    if (theMaze[this.x - 1][this.y] !== 0) {
        this.x -= this.speedY; this.superPower(); console.log(map.playerOne)
        map.listEnemies[0] != undefined ? map.listEnemies[0].collision() : console.log('ok')
        map.listEnemies[1] != undefined ? map.listEnemies[1].collision() : console.log('ok')
        map.listEnemies[2] != undefined ? map.listEnemies[2].collision() : console.log('ok')
        map.listEnemies[3] != undefined ? map.listEnemies[3].collision() : console.log('ok')
    }
}

Player.prototype.moveRight = function () {
    map.listEnemies.forEach((element, index) => {
        console.log(map.listEnemies[index].eating)
        if (map.listEnemies[index].eating === true) {
            return this.x += 0;
        } else if (theMaze[this.x - 1][this.y] === 0) {
            return this.x += 0;
        }
    })
    if (theMaze[this.x + 1][this.y] !== 0) {
        return this.x += this.speedY; this.superPower(); console.log(map.playerOne)
        map.listEnemies[0] != undefined ? map.listEnemies[0].collision() : console.log('ok')
        map.listEnemies[1] != undefined ? map.listEnemies[1].collision() : console.log('ok')
        map.listEnemies[2] != undefined ? map.listEnemies[2].collision() : console.log('ok')
        map.listEnemies[3] != undefined ? map.listEnemies[3].collision() : console.log('ok')
    }
}

// à faire 
Player.prototype.superPower = function () {
    if (theMaze[this.x][this.y] === 5) {
        console.log(map.listEnemies)
        theMaze[this.x][this.y] = 2;
        this.active = true;
        setTimeout(() => {
            this.active = false;

        }, 10000);

    }
    if (this.active === true && map.playerOne.x === map.playerTwo.x && map.playerTwo.y === map.playerOne.y) {
        this.winner = true;
        clearInterval(this.intervalId)
        swal(
            `${this.name} won`,
            'success'
        )
    }
    map.listEnemies.forEach((element, index) => {
        if (element.x === this.x && element.y === this.y && this.active === true) {
            map.listEnemies.splice(index, 1); console.log(map.listEnemies)
            this.count += 10;
        }
    })
}


function Chronometer() {
    this.currentTime = 90;
    this.minute = "01";
    this.second = "30";
}

Chronometer.prototype.startTime = function () {
    this.intervalId = setInterval(() => {
        this.currentTime -= 1;
        this.setTime();
        map.listEnemies[0] != undefined ? map.listEnemies[0].moving() : console.log('ok')
        map.listEnemies[1] != undefined ? map.listEnemies[1].moving() : console.log('ok')
        map.listEnemies[2] != undefined ? map.listEnemies[2].moving() : console.log('ok')
        map.listEnemies[3] != undefined ? map.listEnemies[3].moving() : console.log('ok')
        map.drawing();
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
        win()
    }
    map.listEnemies.forEach((element, index) => {
        if (map.listEnemies[index].eating === true) {
            clearInterval(this.intervalId);
        }
    })
}

function Map(maze) {
    this.ctx = document.getElementById('canvas').getContext('2d');
    this.limit = maze;
    this.playerOne = new Player(2, 1, "Player One");
    this.playerTwo = new Player(13, 13, "Player Two");
    this.chronometer = new Chronometer();
    this.chronometer.startTime();
    this.listEnemies = [new Enemies(10, 14, this.ctx), new Enemies(9, 8, this.ctx), new Enemies(13, 2, this.ctx), new Enemies(4, 6, this.ctx)]
}

Map.prototype.update = function () {
    this.drawing();
    if (theMaze[map.playerOne.x][map.playerOne.y] === 1) {
        theMaze[map.playerOne.x][map.playerOne.y] = 2;
        map.playerOne.count += 1;
        countPlayerOne()
    } else if (theMaze[map.playerTwo.x][map.playerTwo.y] === 1) {
        theMaze[map.playerTwo.x][map.playerTwo.y] = 2;
        map.playerTwo.count += 1;
        countPlayerTwo()
    }

}

Map.prototype.drawing = function () {
    this.ctx.clearRect(0, 0, 1000, 1000);
    for (var i = 0; i < theMaze.length; i++) {
        for (var j = 0; j < theMaze[i].length; j++) {
            if (theMaze[i][j] === 0) {
                this.ctx.fillStyle = "black";
                this.ctx.fillRect(j * 30 - 10, i * 30 + 60, 30, 30);
            } else if (theMaze[i][j] === 1 || theMaze[i][j] === 2) {
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

    this.firstPlayer = new Image()
    this.firstPlayer.src = './images/pacman.png';
    this.firstPlayer.onload = () => {
        this.ctx.drawImage(this.firstPlayer, map.playerOne.y * 30 - 10, map.playerOne.x * 30 + 60, 20, 20)
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

    this.secondPLayer = new Image();
    this.secondPLayer.src = './images/pacman-green.png'
    this.secondPLayer.onload = () => {
        this.ctx.drawImage(this.secondPLayer, map.playerTwo.y * 30 - 10, map.playerTwo.x * 30 + 60, 20, 20)
    }
    map.listEnemies.forEach(element => {
        element.draw()
    });
}

function Enemies(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.direction = Math.floor((Math.random() * 3) + 1)
    this.eating = false;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = './images/Stickeroid.png';

}
Enemies.prototype.draw = function () {
    this.ctx.drawImage(this.image, this.y * 30 - 10, this.x * 30 + 60, 20, 20);
}

Enemies.prototype.moving = function () {
    switch (this.direction) {
        case 1:
            theMaze[this.x + 1][this.y] === 0 ? this.direction = Math.floor((Math.random() * 3) + 1) : this.x += 1;
            break;
        case 2:
            theMaze[this.x - 1][this.y] === 0 ? this.direction = Math.floor((Math.random() * 3) + 1) : this.x -= 1;
            break;
        case 3:
            theMaze[this.x][this.y + 1] === 0 ? this.direction = Math.floor((Math.random() * 3) + 1) : this.y += 1;
            break;
        case 4:
            theMaze[this.x][this.y - 1] === 0 ? this.direction = Math.floor((Math.random() * 3) + 1) : this.y -= 1;
            break;
    }
}

Enemies.prototype.collision = function () {
    if ((this.x === map.playerOne.x && this.y === map.playerOne.y && map.playerOne.active === false)) {
        map.playerOne.isDead = true;
        map.playerTwo.winner = true;
        this.eating = true;
        suppression()
        swal(
            'Player Two won',
            'Player One is the looser !',
            'success'
        )
    } else if ((this.x === map.playerTwo.x && this.y === map.playerTwo.y && map.playerTwo.active === false)) {
        this.eating = true;
        map.playerTwo.isDead = true;
        map.playerOne.winner = true;
        suppression()
        swal(
            'Player One Won',
            'Player Two is the looser !',
            'success'
        )
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

        swal(
            'Player One : Use the arrows to move, You\'re the yellow player',
            'Player Two : Use Z - Q - S - D to move. You\'re the green player!',
            '',
        );

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
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 5, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 3, 1, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 5, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];