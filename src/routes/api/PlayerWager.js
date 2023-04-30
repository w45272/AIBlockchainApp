import ethers from 'ethers';
import { abi } from '../../../public/abi'

export async function GET() {
    let provider = new ethers.JsonRpcProvider();
    const contractAddress = "0x663f3ad617193148711d28f5334ee4ed07016602";
  
    const playerPrivateKey = "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"
    var playerWallet = new ethers.Wallet(playerPrivateKey, provider);
    const titanicContract = new ethers.Contract(contractAddress, abi, playerWallet);

    const sendPromise = titanicContract.createGame();
    sendPromise.then((transaction) => {
        console.log(transaction);
    });
    
    return new Response("OK");
}