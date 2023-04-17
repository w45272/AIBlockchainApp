import { createSignal } from "solid-js";
import "./Submit.css";
import PassengerRequest from "./PassengerRequest";
import { Passenger } from "./Passenger";

export default function getPassengerButton() {
    let passenger = Passenger();
    function handler() {
        PassengerRequest(passenger);
    }
    return (
        <button class="increment" onClick={handler}>
            Get Passenger
        </button>
    );
}
