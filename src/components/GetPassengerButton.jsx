import { createSignal } from "solid-js";
// import "./Submit.css";
import PassengerRequest from "./PassengerRequest";
import { Passenger } from "./Passenger";

export default function GetPassengerButton(props) {
    async function handler() {
        console.log(props.passenger().age);
        let newPassenger = await PassengerRequest(props.passenger());
        console.log(props.passenger())
        props.setPassenger(newPassenger);
        console.log(props.passenger().age);
    }
    return (
        <button class="increment" onClick={handler}>
            Get Passenger
        </button>
    );
}
