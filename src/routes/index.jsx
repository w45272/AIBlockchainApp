import { Title } from "solid-start";
import Submit from "~/components/Submit";
import GetPassengerButton from "~/components/GetPassengerButton";
import Table from "~/components/Table";
import Modal from "~/components/Modal";
import { Passenger } from "~/components/Passenger";
import { createSignal } from "solid-js";

export default function Home() {
  const [modalState, setModalState] = createSignal(true);

  const [passenger0, setPassenger0] = createSignal(new Passenger(), { equals: false });
  const [passenger1, setPassenger1] = createSignal(new Passenger(), { equals: false });
  const [passenger2, setPassenger2] = createSignal(new Passenger(), { equals: false });
  const [passenger3, setPassenger3] = createSignal(new Passenger(), { equals: false });
  const [passenger4, setPassenger4] = createSignal(new Passenger(), { equals: false });
  const [passenger5, setPassenger5] = createSignal(new Passenger(), { equals: false });
  const [passenger6, setPassenger6] = createSignal(new Passenger(), { equals: false });
  const [passenger7, setPassenger7] = createSignal(new Passenger(), { equals: false });
  const [passenger8, setPassenger8] = createSignal(new Passenger(), { equals: false });
  const [passenger9, setPassenger9] = createSignal(new Passenger(), { equals: false });

  return (
    <>
    <div id='topline'/>
    <main>
      <Title>AI Blockchain</Title>
      <h1>Compete Against a Neural Network</h1>
      <p>In this application you will be competing against a neural network to see who is the better predictor of whether or not a passenger
        survived the titanic disater. Look at each data point carefully and choose whether or not you believe that passenger survived. Once
        you have chosen, hit submit and win ETH if you beat the neural network!
      </p>
      <Modal modalState={modalState} setModalState={setModalState}/>
      <Submit modalState={modalState} setModalState={setModalState} />
      <GetPassengerButton
        passenger0={passenger0} setPassenger0={setPassenger0}
        passenger1={passenger1} setPassenger1={setPassenger1}
        passenger2={passenger2} setPassenger2={setPassenger2}
        passenger3={passenger3} setPassenger3={setPassenger3}
        passenger4={passenger4} setPassenger4={setPassenger4}
        passenger5={passenger5} setPassenger5={setPassenger5}
        passenger6={passenger6} setPassenger6={setPassenger6}
        passenger7={passenger7} setPassenger7={setPassenger7}
        passenger8={passenger8} setPassenger8={setPassenger8}
        passenger9={passenger9} setPassenger9={setPassenger9} />
      <Table
        passenger0={passenger0}
        passenger1={passenger1}
        passenger2={passenger2}
        passenger3={passenger3}
        passenger4={passenger4}
        passenger5={passenger5}
        passenger6={passenger6}
        passenger7={passenger7}
        passenger8={passenger8}
        passenger9={passenger9} />
    </main>
    <div id='waterline'/>
    </>
  );
}
