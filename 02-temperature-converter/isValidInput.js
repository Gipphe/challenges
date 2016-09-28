'use strict';
module.exports = function(isNumber, input) {
	let num;
	if (isNumber) {
		num = Number(input);
		if (Number.isNaN(num)) {
			return false;
		}
	} else {
		if (
			typeof input !== 'string' ||
			input.length > 1 ||
			input.length <= 0
		) {
			return false;
		}
	}

	return true;
};