const car = {
    speedometer: 0,

    setSpeed(speed) {
        this.speedometer = speed;
        return this;
    },

    getSpeed() {
        return this.speedometer;
    },

    clearSpeed() {
        this.speedometer = 0;
        return this;
    }
};

document.getElementById('setSpeedButton').addEventListener('click', function () {
    car.setSpeed(300);
    document.getElementById('output').innerText = `Speed set to: ${car.getSpeed()}`;
});

document.getElementById('getSpeedButton').addEventListener('click', function () {
    document.getElementById('output').innerText = `Current speed: ${car.getSpeed()}`;
});

document.getElementById('clearSpeedButton').addEventListener('click', function () {
    car.clearSpeed();
    document.getElementById('output').innerText = `Speed cleared. Current speed: ${car.getSpeed()}`;
});