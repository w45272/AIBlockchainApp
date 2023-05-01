import ethers from 'ethers';

export async function GET() {
    let provider = new ethers.JsonRpcProvider();
    const NNPrivateKey = "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a"
    var NNWallet = new ethers.Wallet(NNPrivateKey, provider);

    await NNWallet.sendTransaction({
        to: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
        value: ethers.parseEther("2.0")
    })

    const balance = await provider.getBalance("0x70997970C51812dc3A010C7d01b50e0d17dc79C8")
    const ret = ethers.formatEther(balance)
    
    return new Response(ret);
}