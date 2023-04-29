export default async function PassengerPost(Passenger) {
    const response = await fetch('http://localhost:3000/api/randomPassengers');
    const text = await response.text();
    let passengerFields = text.split(",");
    Passenger.class = passengerFields[1];
    Passenger.sex = passengerFields[3];
    Passenger.age = passengerFields[4];
    Passenger.ssAboard = passengerFields[5];
    Passenger.pcAboard = passengerFields[6];
    Passenger.fare = passengerFields[7];

    return Passenger;
}