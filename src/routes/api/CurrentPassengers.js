export default class CurrentPassengers {
    static passengers;

    constructor() {
        this.passengers = []
    }
    
    addPassenger(passenger){
        passengers.push(passenger);
    }

    get getCurrentPassengers() {
        return passengers;
    }
}