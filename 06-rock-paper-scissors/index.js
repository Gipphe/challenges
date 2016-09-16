const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

console.log('Throw rock, paper or scissor');
console.log('1. Rock');
console.log('2. Paper');
console.log('3. Scissors');

const throwLimit = 3;
const throws = {
	rock: 1,
	paper: 2,
	scissors: 3
};

const compareThrows = require('./compareThrows');

const exit = () {
	process.exit(0);
};

rl.setPrompt('Input throw: ');
rl.prompt();
rl.on('line', (line) => {
	line = Number(line);
	if (!line || line < 1 || line > throwLimit) {
		console.log('Not a valid selection.');
		return rl.prompt();
	}


});
