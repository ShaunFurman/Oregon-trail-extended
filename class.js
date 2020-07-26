class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        this.food += 2

    }
    eat() {

        if (this.food === 0) {
            this.isHealthy = false
        }
        else {
            this.food -= 1
        }

    }
}
class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []

    }
    getAvailableSeatCount() {

        const availableSeats = this.capacity - this.passengers.length
        return availableSeats
        console.log(availableSeats)
    } //– Returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
            console.log(traveler)
        }
    }
    shouldQuarantine() {
        // if (this.passengers.some(this.isHealthy) === false) {
        //     return true
        // } else {
        //     return false
      
        let q = this.passengers.some(traveler => this.passengers.food)
        return true
    }    //- Returns true if there is at least one unhealthy person in the wagon. Return false if not.

    totalFood() {
            let foodCount = 0
            for(let i = 0; i <  this.passengers.length; i ++){
                    foodCount += this.passengers[i].food 
            }
        return foodCount
        console.log(foodCount)
    }}//- Returns the total amount of food among all passengers in the wagon
    