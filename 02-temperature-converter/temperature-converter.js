'use strict';

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

console.log('What do you want to convert FROM?');
console.log('Fahrenheit (F) or Celcius (C)');

const invalidInput = function() {
	rl.setPrompt('Invalid input. Try again: ');
	rl.prompt();
};
const close = function() {
	process.exit(0);
};

let fromTemp;
let toTemp;
let state = 0;

rl.setPrompt('>: ');
rl.prompt();

rl.on('line', function(line) {
	if (typeof line === 'string') {
		if (line.length > 1) {
			invalidInput();
		}
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
			let toTemp = fromTemp === 'c' ? 'F' : 'C';
			let newTemp;
			if (fromTemp === 'c') {
				newTemp = temp * 1.8 + 32;
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
}).on('close', close);
