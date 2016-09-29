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

const FSM = require('./FSM');
const states = FSM();

rl.setPrompt('>: ');
rl.prompt();

const isValidInput = require('./isValidInput');

rl.on('line', function(line) {
	if (!isValidInput(line)) {
		invalidInput();
		return;
	}
	line = line.toLowerCase();

	states(line);
}).on('close', close);
