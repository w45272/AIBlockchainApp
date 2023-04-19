import { createSignal } from "solid-js";
import "./Submit.css";

export default function Submit() {
  return (
    <button class="increment" onClick={() => setCount(count() + 1)}>
      Submit
    </button>
  );
}
