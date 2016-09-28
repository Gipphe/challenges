'use strict';
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const StateMachine = require('javascript-state-machine');

console.log('What do you want to convert FROM?');
console.log('Fahrenheit (F) or Celcius (C)');

const invalidInput = function() {
	rl.setPrompt('Invalid input. Try again: ');
	rl.prompt();
};
const close = function() {
	process.exit(0);
};

const fsm = StateMachine.create({
	initial: 'from',
	events: [
		{ name: 'fromTempInputted', from: 'from',              to: 'to'    },
		{ name: 'toTempInputted',   from: 'to',                to: 'convert' },
		{ name: 'reset',            from: ['to', 'convert'],   to: 'from'      }
	],
	callbacks: {
		onfrom: fromTempInput,
		onto: toTempInput,
		onreset: reset
	}
});

rl.setPrompt('>: ');
rl.prompt();

const isValidInput = function(input) {
	if (typeof input !== 'string' || input.length > 1 || input.length <= 0) {
		return false;
	}
	return true;
};

rl.on('line', function(line) {
	if (!isValidInput(line)) {
		invalidInput();
		return;
	}
	line = line.toLowerCase();
}).on('close', close);
