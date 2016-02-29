"use strict";

let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
let dob = [];
let dobElems = ['year', 'month', 'day'];

console.log('Input your date of birth');

let displayAge = () => {
	console.log('Your date of birth is ' + dob[0] + '/' + dob[1] + '/' + dob[2]);
};
let calcDays = (dob) => {
	let then = new Date();
	then.setFullYear(dob[0]);
	then.setMonth(dob[1]-1);
	then.setDate(dob[2]);
	then.setHours(0);
	then.setMinutes(0);
	then.setSeconds(0);
	then.setMilliseconds(0);
	then = then.getTime();

	let now = new Date();
	now.setHours(0);
	now.setMinutes(0);
	now.setSeconds(0);
	now.setMilliseconds(0);
	now = now.getTime();
	
	let age = now - then;
	age /= 1000 * 60 * 60 * 24;
	return age;
};
let exit = () => {
	process.exit(0);
};

let i = 0;
let len = 3;
let setPrompt = function(prompt) {
	rl.setPrompt(prompt);
};

setPrompt(dobElems[i].toUpperCase() + ': ');
rl.prompt();
rl.on('line', (line) => {
	line = Number(line);
	let next = dobElems[i + 1];
	if (line) {
		dob.push(line);
	}
	if (next && line) {
		setPrompt(next.toUpperCase() + ': ');
	} else if (!next) {

	} else {
		console.log('Error: not a number');
		rl.prompt();
		return;
	}
	i += 1;
	if (i < len) {
		rl.prompt();
	} else {
		console.log('');
		displayAge();
		let age = calcDays(dob);
		console.log('You are ' + age + ' days old.');
		rl.removeAllListeners();
		exit();
	}
}).on('close', exit);
