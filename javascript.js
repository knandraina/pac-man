function printMinutes() {
    minDec.innerHTML = map.chronometer.minute[0];
    minUni.innerHTML = map.chronometer.minute[1];
}

function printSeconds() {
    secDec.innerHTML = map.chronometer.second[0];
    secUni.innerHTML = map.chronometer.second[1];
}

function countPlayerOne() {
    pointplayerone.innerHTML = map.playerOne.count;
}

function countPlayerTwo() {
    pointplayertwo.innerHTML = map.playerTwo.count;
}

function win () {
    if (this.currentTime === 0 && map.countPlayerOne > map.countPlayerTwo) {
        swal(
            'Player One Won' + map.countPlayerOne + "vs" + map.countPlayerTwo,
            'Player Two is the looser !',
            'success'
          )
    } else {
        swal(
            'Player Two Won with' + map.countPlayerTwo + "vs" + map.countPlayerOne,
            'Player One is the looser !',
            'success'
          )
    }
}

function winner () {
    if (this.winner === true) {
        swal(
            `${this} won`,
            'Player One is the looser !',
            'success'
          )
    }
}

function suppression () {
    map.listEnemies.splice(0)
}
function clear () {
    clearInterval(map.chronometer.intervalId)
}

function noMove() {
    map.playerOne.speedX = 0;
    map.playerTwo.speedY = 0;
    map.playerOne.speedY = 0;
    map.playerTwo.speedX = 0;
}
