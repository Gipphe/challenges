'use strict';

let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

console.log('What do you want to convert FROM?');
console.log('Fahrenheit (F) or Celcius (C)');

let fromTemp;
let toTemp;
let state = 0;

let invalidInput = () => {
	rl.setPrompt('Invalid input. Try again: ');
	rl.prompt();
};

rl.setPrompt('>: ');
rl.prompt();

rl.on('line', function(line) {
	if (typeof line === 'string') {
		console.log(typeof line);
		line = line.toLowerCase();
		if (state === 0) {
			if (line === 'c' || line === 'f') {
				fromTemp = line;
				console.log('To temperature: ' + line.toUpperCase());
				console.log('');
				console.log('Input temperature to convert.');
				state += 1;
				rl.setPrompt('>: ');
				rl.prompt();
			} else {
				invalidInput();
			}
		} else if (state === 1) {
			let temp = Number(line);
			if (temp !== temp) {
				invalidInput();
				return;
			}
			let toTemp = (fromTemp === 'c' ? 'F' : 'C');
			let newTemp;
			if (fromTemp === 'c') {
				newTemp = (temp * 1.8) + 32;
			} else if (fromTemp === 'f') {
				newTemp = (temp - 32) / 1.8;
			}
			newTemp = Math.round(newTemp * 10) / 10;
			console.log(temp + ' ' + fromTemp.toUpperCase() + ' is ' + newTemp + ' ' + toTemp);
			process.exit(0);
		} else {
			console.log('Something has gone wrong');
			console.log('Restarting the cycle...');
			state = 0;
			fromTemp = '';
			toTemp = '';
			rl.setPrompt('>: ');
			rl.prompt();
		}
	} else {
		invalidInput();
	}
}).on('close', function() {
	process.exit(0);
});