'use strict';
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

console.log('Throw rock, paper or scissor');
console.log('1. Rock');
console.log('2. Paper');
console.log('3. Scissors');

const throwMax = 2;
const throwMin = 0;
const throws = {
	rock: 0,
	paper: 1,
	scissors: 2
};
throws.find = val => {
	for (let key in throws) {
		if (throws.hasOwnProperty(key)) {
			if (throws[key] === val) {
				return key;
			}
		}
	}
};

const compareThrows = require('./compareThrows');
const makeThrow = require('./makeThrow');

const exit = () => {
	process.exit(0);
};

rl.setPrompt('Input throw: ');
rl.prompt();
rl.on('line', (line) => {
	line = Number(line);
	if (!line || line < throwMin || line > throwMax) {
		console.log('Not a valid selection.');
		return rl.prompt();
	}
	line -= 1;
	const userThrow = line;
	const cpuThrow = makeThrow();
	const winner = compareThrows(userThrow, cpuThrow);

	console.log('You threw ' + throws.find(userThrow));
	console.log('I threw ' + throws.find(cpuThrow));
	if (winner === cpuThrow) {
		console.log('I won!');
	} else if (winner === userThrow) {
		console.log('You won...');
	} else {
		console.log('We threw the same. No winner.');
	}
	console.log('-------');
	rl.prompt();
}).on('close', exit);
