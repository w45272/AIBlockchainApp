import ethers from 'ethers';
import abi from '../../../public/abi'

export async function GET() {
    let provider = new ethers.JsonRpcProvider();
    const signer = provider.getSigner()
    const address = "0x663f3ad617193148711d28f5334ee4ed07016602";
    // var abi = require('../../../public/abi.json');
    // console.log(abi)

    // const abi = [
    //     {
    //         "inputs": [],
    //         "name": "AlreadyCommitted",
    //         "type": "error"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "AlreadyPaidWager",
    //         "type": "error"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "AnswerDoesntMatch",
    //         "type": "error"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "GameDoesntExist",
    //         "type": "error"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "GameFull",
    //         "type": "error"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "HostCannotWager",
    //         "type": "error"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "MustBeHost",
    //         "type": "error"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "MustWaitForCommits",
    //         "type": "error"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "MustWaitForWagers",
    //         "type": "error"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "NonParticipant",
    //         "type": "error"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "NotEnoughValue",
    //         "type": "error"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "TooMuchValue",
    //         "type": "error"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "_gameID",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "internalType": "bytes32",
    //                 "name": "_commit",
    //                 "type": "bytes32"
    //             }
    //         ],
    //         "name": "commit",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "createGame",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "_gameID",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "payWager",
    //         "outputs": [],
    //         "stateMutability": "payable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "_gameID",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "_answer",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "reveal",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     }
    // ]

    const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
    var wallet = new ethers.Wallet(privateKey, provider);
    const contract = new ethers.Contract(address, abi, wallet);

    const sendPromise = contract.createGame();
    sendPromise.then((transaction) => {
        console.log(transaction);
    });
    
    return new Response("OK");
}