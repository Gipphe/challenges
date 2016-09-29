'use strict';
const isValidTextInput = require('./isValidTextInput');
const isValidNumInput = require('./isValidNumInput');
module.exports = function(isNumber, input) {
	if (typeof input !== 'string' || !input.length) {
		return false;
	}
	if (isNumber) {
		return isValidNumInput(input);
	} else {
		return isValidTextInput(input);
	}

	return true;
};