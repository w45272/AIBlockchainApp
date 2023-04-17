export default async function PassengerRequest(Passenger) {
    let response = await fetch('http:localhost:3000/api/randomPassengers');
    console.log(response);
}