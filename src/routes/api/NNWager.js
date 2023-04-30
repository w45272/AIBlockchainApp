import ethers from 'ethers';
import { abi } from '../../../public/abi'

export async function GET() {
    let provider = new ethers.JsonRpcProvider();
    const contractAddress = "0x663f3ad617193148711d28f5334ee4ed07016602";
  
    const NNPrivateKey = "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a"
    var NNWallet = new ethers.Wallet(NNPrivateKey, provider);
    const titanicContract = new ethers.Contract(contractAddress, abi, NNWallet);

    const sendPromise = await titanicContract.payWager();
    
    return new Response("OK");
}