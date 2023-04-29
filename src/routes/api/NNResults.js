import ethers from 'ethers';

export async function POST() {
    const daiAddress = "0x663f3ad617193148711d28f5334ee4ed07016602";

    // The ERC-20 Contract ABI, which is a common contract interface
    // for tokens (this is the Human-Readable ABI format)
    const abi = [
        // Some details about the token
        "function name() view returns (string)",
        "function symbol() view returns (string)",

        // Get the account balance
        "function balanceOf(address) view returns (uint)",

        // Send some of your tokens to someone else
        "function transfer(address to, uint amount)",

        // An event triggered whenever anyone transfers to someone else
        "event Transfer(address indexed from, address indexed to, uint amount)"
    ];

    // The Contract object
    const daiContract = new ethers.Contract(daiAddress, abi, provider);
}