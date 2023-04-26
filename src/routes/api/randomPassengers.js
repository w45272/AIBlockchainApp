import fs from 'node:fs';
import readline from 'node:readline';
import CurrentPassengers from './CurrentPassengers';

export async function GET() {
    let passenger = await returnPassengerPromise();
    return new Response(passenger);
}

function returnPassengerPromise() {
    return new Promise((resolve) => {
        readLineFromFile(generateRandomNumber(1, 887),
        "public/titanic.csv", 
        resolve)
    });
}

function generateRandomNumber(lower, upper){
    return Math.floor(Math.random() * upper) + lower;
}

function readLineFromFile(randomLineNumber, fileName, resolve) {
    const fileStream = fs.createReadStream(fileName);
    const rl = readline.createInterface({input: fileStream, crlfDelay: Infinity});
    var currentLineNumber = 0;

    function callback(line){
        resolve(line);
    }

    rl.on('line', (line) => {
        if(currentLineNumber === randomLineNumber){
            callback(line);
        }
        currentLineNumber++;
    });
}