'use strict';

let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

console.log('How many coins do you want to flip?');
rl.setPrompt('Number: ');
rl.prompt();


var flipCoin = () => {
	let coin = Math.random();
	coin *= 2;
	coin = Math.floor(coin);
	return coin;
};
let done = false;
rl.on('line', (line) => {
	if (done) {
		process.exit(0);
	}
	line = Number(line);
	if (line !== line) {
		console.log('Your input did not evaluate to a number');
		rl.prompt();
		return;
	}

	let heads = 0; // 0 is heads
	let tails = 0; // 1 is tails
	for (var i = 0, len = line; i < len; i += 1) {
		let coin = flipCoin();
		if (coin) {
			tails += 1;
		} else {
			heads += 1;
		}
	}

	console.log('A ' + line + ' number of coins were flipped');
	console.log('');
	console.log(heads + ' number of heads');
	console.log(tails + ' number of tails');
	done = true;
	rl.setPrompt('Press enter to exit...');
	rl.prompt();
}).on('close', () => {
	process.exit(0);
});