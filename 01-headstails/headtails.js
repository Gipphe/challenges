"use strict";

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const tossCoin = require('./tossCoin');
const checkForQ = require('./checkLine').bind(null, 'q');

const promptUser = function() {
	console.log('Enter any key to flip a coin');
	console.log('Enter "q" to quit');	
};
promptUser();
rl.setPrompt('#: ');
rl.prompt();

rl.on('line', (line) => {
	if (checkForQ(line)) {
		process.exit(0);
	} else {
		const coin = tossCoin();
		console.log('');
		console.log(coin);
		console.log('');
		promptUser();
		rl.prompt();
	}
}).on('close', () => {
	process.exit(0);
});