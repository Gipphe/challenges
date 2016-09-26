'use strict';
module.exports = function(fromType, toType, temp) {
let newTemp;
	if (fromTemp === 'c') {
		newTemp = temp * 1.8 + 32;
	} else if (fromTemp === 'f') {
		newTemp = (temp - 32) / 1.8;
	}
	newTemp = Math.round(newTemp * 10) / 10;
};
