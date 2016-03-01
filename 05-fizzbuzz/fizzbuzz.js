"use strict";

for (let i = 1, len = 20; i <= len; i += 1) {
	let msg = '';
	if (i % 3 === 0) {
		msg += 'Fizz';
	} 
	if (i % 5 === 0) {
		msg += 'Buzz';
	}
	if (!msg) {
		msg = i;
	}
	console.log(msg);
}