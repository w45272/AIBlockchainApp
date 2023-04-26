import ethers from 'ethers';

export async function GET() {
    let provider = new ethers.WebSocketProvider("ws://localhost:8545");
    let yeet = await provider.getBalance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    return new Response(yeet);
}