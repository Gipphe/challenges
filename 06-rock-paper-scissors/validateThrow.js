'use strict';
module.exports = function(lowerLimit, upperLimit, xthrow) {
	if (typeof lowerLimit !== 'number' ||
		typeof upperLimit !== 'number' ||
		typeof xthrow !== 'number') {
		throw new TypeError('validateThrow is only usable with numbers');
	}
	if (!xthrow && xthrow !== 0 ||
		xthrow < lowerLimit ||
		xthrow > upperLimit) {
		return false;
	}
	return true;
};
