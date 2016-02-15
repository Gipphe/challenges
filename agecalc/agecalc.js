"use strict";

let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
let dob = [];
let dobElems = ['year', 'month', 'day'];

console.log('Input your date of birth');

let displayAge = () => {
	console.log('Your date of birth is ' + dob[0] + '/' + dob[1] + '/' + dob[2]);
};
let exit = () => {
	process.exit(0);
};

let i = 0;
let len = 3;
rl.setPrompt(dobElems[i].toUpperCase() + ': ');
rl.prompt();
rl.on('line', (line) => {
	let val = Number(line);
	if (!isNaN(val) || val !== 0) {
		dob.push(val);
		rl.setPrompt(dobElems[i+1].toUpperCase() + ': ');
	} else {
		console.log('Error: not a number');
		rl.prompt();
		return;
	}
	i += 1;
	if (i !== len) {
		rl.prompt();
	} else {
		displayAge();
		rl.removeAllListeners();
		exit();
	}
}).on('close', exit);
