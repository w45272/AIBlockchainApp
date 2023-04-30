import ethers from 'ethers';
import { abi } from '../../../public/abi'

export async function GET() {
    let provider = new ethers.JsonRpcProvider();
    const contractAddress = "0x663f3ad617193148711d28f5334ee4ed07016602";
  
    const deployerPrivateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
    var deployerWallet = new ethers.Wallet(deployerPrivateKey, provider);
    const titanicContract = new ethers.Contract(contractAddress, abi, deployerWallet);

    const sendPromise = titanicContract.createGame();
    sendPromise.then((transaction) => {
        console.log(transaction);
    });
    
    return new Response("OK");
}