'use strict';
const throws = {
	rock: 0,
	paper: 1,
	scissors: 2
};
throws.find = function(x) {
	for (let prop in throws) {
		if (throws.hasOwnProperty(value)) {
			if (throws[prop] === value) {
				return prop;
			}
		}
	}
};
module.exports = throws;
