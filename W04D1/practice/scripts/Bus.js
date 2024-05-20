export class Bus {
    constructor(id, direction, stations, seats, passengers, last_station) {
        this.id = id;
        this.direction = direction;
        this.stations = stations;
        this.seats = seats;
        this.passangers = passengers;
        this.lastStation = last_station
    }

    current() {
        return this.stations[this.lastStation]
    }

    next() {
        if (this.lastStation + 1 < this.stations.length) {
            return this.stations[this.lastStation + 1]
        } else {
            return this.stations[this.stations.length - 1]
        }
    }

    move() {
        this.lastStation + 1 < this.stations.length ?
            this.lastStation++ : this.lastStation = this.stations.length - 1
    }

    board(count) {
        this.seats >= count ?
            this.passangers += count : this.passangers = this.seats
        return this.passangers
    }

    deboard(count) {
        this.passangers >= count ?
            this.passangers -= count : this.passangers = 0
        return this.passangers
    }

}