import ethers from 'ethers';

export async function GET() {
    let provider = new ethers.JsonRpcProvider();
    const signer = provider.getSigner()
    const add = "0x663f3ad617193148711d28f5334ee4ed07016602";

    const Abi = [
        {
            "inputs": [],
            "name": "getNumber",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "increment",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "number",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "newNumber",
                    "type": "uint256"
                }
            ],
            "name": "setNumber",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]


    const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
    var wallet = new ethers.Wallet(privateKey, provider);
    const contract = new ethers.Contract(add, Abi, wallet);
    // console.log(contract)
    const sendPromise = contract.setNumber(100);
    sendPromise.then((transaction) => {
        console.log(transaction);
    });
    console.log("here")
    
    return new Response("OK");
}