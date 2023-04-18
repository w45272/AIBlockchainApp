import { createSignal } from "solid-js";
import PassengerRequest from "./PassengerRequest";

export default function GetPassengerButton(props) {
    async function handler() {
        let newPassenger0 = await PassengerRequest(props.passenger0());
        props.setPassenger0(newPassenger0);

        let newPassenger1 = await PassengerRequest(props.passenger1());
        props.setPassenger1(newPassenger1);

        let newPassenger2 = await PassengerRequest(props.passenger2());
        props.setPassenger2(newPassenger2);

        let newPassenger3 = await PassengerRequest(props.passenger3());
        props.setPassenger3(newPassenger3);

        let newPassenger4 = await PassengerRequest(props.passenger4());
        props.setPassenger4(newPassenger4);

        let newPassenger5 = await PassengerRequest(props.passenger5());
        props.setPassenger5(newPassenger5);

        let newPassenger6 = await PassengerRequest(props.passenger6());
        props.setPassenger6(newPassenger6);

        let newPassenger7 = await PassengerRequest(props.passenger7());
        props.setPassenger7(newPassenger7);

        let newPassenger8 = await PassengerRequest(props.passenger8());
        props.setPassenger8(newPassenger8);

        let newPassenger9 = await PassengerRequest(props.passenger9());
        props.setPassenger9(newPassenger9);
    }

    return (
        <button class="increment" onClick={handler}>
            Get Passenger
        </button>
    );
}
