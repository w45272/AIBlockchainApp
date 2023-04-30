import ethers from 'ethers';
import { abi } from '../../../public/abi'

export async function GET() {
    let provider = new ethers.JsonRpcProvider();
    const signer = provider.getSigner()
    const address = "0x663f3ad617193148711d28f5334ee4ed07016602";
  
    const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
    var wallet = new ethers.Wallet(privateKey, provider);
    const contract = new ethers.Contract(address, abi, wallet);

    const sendPromise = contract.createGame();
    sendPromise.then((transaction) => {
        console.log(transaction);
    });
    
    return new Response("OK");
}