"use strict";

let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

console.log('Enter any key to flip a coin');
console.log('Enter "q" to quit');
rl.setPrompt('#: ');
rl.prompt();

rl.on('line', (line) => {
	if (line.toLowerCase().trim() === 'q') {
		process.exit(0);
	} else {
		let coin = Math.random() * 2;
		coin = Math.floor(coin);
		coin = coin ? 'Heads' : 'Tails';
		console.log('');
		console.log(coin);
		console.log('');
		console.log('Enter any key to flip a coin');
		console.log('Enter "q" to quit');
		rl.prompt();
	}
}).on('close', () => {
	process.exit(0);
});