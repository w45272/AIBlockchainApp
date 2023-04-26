import { createSignal } from "solid-js";
import "./Submit.css";

export default function Submit(props) {
  return (
    <button class="increment" onClick={() => {props.setModalState(!props.modalState())}}>
      Submit
    </button>
  );
}
