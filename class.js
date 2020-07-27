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
// NEW WORK FOR EXTENDED:

class Doctor extends Traveler {
    constructor(name, food, isHealthy) {
        super (name, food, isHealthy)//Food is not defined
          
    }
    heal(traveler) {
        if (traveler.isHealthy === false) {
            traveler.isHealthy = true
        }
    }
}
class Hunter extends Traveler {
    constructor(name, isHealthy) {
        super (name, isHealthy)
        this.food = 2
    }
    hunt() {
        this.food += 5
    }
    eat(){
        // this.food - 2
        if (this.food >=2) {
            this.food -= 2
        }
        else {
            this.isHealthy = false
            this.food = 0
        }

    }
    giveFood(traveler, numOfFoodUnits){
        if(this.food >= numOfFoodUnits){
            this.food -=numOfFoodUnits
            traveler.food += numOfFoodUnits
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
      
        let q = this.passengers.some(traveler => traveler.isHealthy === false)
        return q
    }    //- Returns true if there is at least one unhealthy person in the wagon. Return false if not.

    totalFood() {
            let foodCount = 0
            for(let i = 0; i <  this.passengers.length; i ++){
                    foodCount += this.passengers[i].food 
            }
        return foodCount
        console.log(foodCount)
    }}//- Returns the total amount of food among all passengers in the wagon
    