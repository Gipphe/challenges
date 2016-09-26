'use strict';
module.exports = function() {
	let coin = Math.floor(Math.random() * 2);
	return coin ? 'Heads' : 'Tails';
};
