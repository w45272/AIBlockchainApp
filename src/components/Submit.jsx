import "./Submit.css";

export default function Submit(props) {

  async function handler(){
    const response = await fetch('http://localhost:3000/api/tx')
    props.setBalance(await response.text())
    
  }

  return (
    <button class="increment" onClick={handler}>
      Submit
    </button>
  );
}
