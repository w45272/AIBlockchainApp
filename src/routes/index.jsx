import { Title } from "solid-start";
import Submit from "~/components/Submit";
import Table from "~/components/Table";

export default function Home() {

  return (
    <main>
      <Title>AI Blockchain</Title>
      <h1>Compete Against a Neural Network</h1>
      <p>In this application you will be competing against a neural network to see who is the better predictor of whether or not a passenger
        survived the titanic disater. Look at each data point carefully and choose whether or not you believe that passenger survived. Once
        you have chosen, hit submit and win ETH if you beat the neural network!
      </p>
      <Submit />
      <Table />
    </main>
  );
}
