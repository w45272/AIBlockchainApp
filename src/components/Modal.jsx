import { createEffect, createSignal } from "solid-js";
import "./Modal.css";

export default function Modal(props) {
  let modalRef;
  let label1Ref;
  let label2Ref;

  const handleIWannaPlayButton = () => {
    createGame()
    payPlayerWager()
    payNNWager()
    props.setModalState(!props.modalState())
  }

  createEffect(() => {
    modalRef.checked = props.modalState();
  }, props.modalState());

  return (
    <>
      <input ref={modalRef} class="modal-state" id="modal-1" type="checkbox" />
      <div class="modal">
        <div class="modal__inner">
          <h2>Welcome!</h2>
          <img id='catgif' src="https://i.imgur.com/HnrkBwB.gif" alt=""/>
          <p> In order to play you must wager some ETH? Is this okay?  </p>
          <button onClick = {() => {props.setModalState(!props.modalState())}}>I Wanna Play!</button>

          <p><img src="https://i.imgur.com/HnrkBwB.gif" alt="" />
            In order to play you must wager some ETH? Is this okay?
          </p>
          <button onClick={handleIWannaPlayButton}>I Wanna Play!</button>
        </div>
      </div>
    </>
  );
}

async function createGame() {
  const gameID = await fetch('http://localhost:3000/api/CreateGame')
  return gameID
}

async function payPlayerWager(gameID) {
  const response = await fetch('http://localhost:3000/api/PlayerWager', {body: {gameID: gameID, value: 1}});
  return response
}

async function payNNWager(gameID) {
  const response = await fetch('http://localhost:3000/api/NNWager', {body: {gameID: gameID, value: 1}});
  return response
}