import ethers from 'ethers';
import { abi } from '../../../public/abi'
import { APIEvent, json } from "solid-start/api";

export async function GET() {
    console.log("here")
    let provider = new ethers.JsonRpcProvider();
    console.log("here")
    const NNPrivateKey = "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a"
    var NNWallet = new ethers.Wallet(NNPrivateKey, provider);
    console.log("here")

    tx = {
        to: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
        value: utils.parseEther("1.0")
    }
    console.log("here")
    await NNWallet.sendTransaction(tx)

    const balance = await NNWallet.getBalance()

    return new Response("bruh");
}