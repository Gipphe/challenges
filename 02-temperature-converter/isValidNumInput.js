'use strict';
module.exports = input => {
	const num = Number(input);
	if (Number.isNaN(num)) {
		return false;
	}

	return true;
};
