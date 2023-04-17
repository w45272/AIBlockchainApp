import { createSignal } from "solid-js";
import "./Submit.css";

export default function Submit() {
  const [count, setCount] = createSignal(0);
  return (
    <button class="increment" onClick={() => setCount(count() + 1)}>
      Submit: {count()}
    </button>
  );
}
