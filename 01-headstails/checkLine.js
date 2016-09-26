'use strict';
module.exports = function(target, line) {
	if (!target || typeof target !== 'string') {
		throw new Error('target should be a non-empty string.');
	}
	if (!line || typeof line !== 'string') {
		throw new Error('line should be a non-empty string.');
	}
	return line.trim().charAt(0).toLowerCase() === target.trim().charAt(0).toLowerCase();
};
