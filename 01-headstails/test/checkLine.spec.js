'use strict';
import test from 'ava';
import fn from '../checkLine';

const values = [
	'',
	0,
	2,
	{},
	[],
	true,
	false,
	null,
	undefined
];
const testTarget = function(value) {
	return function() {fn(value, 'foobar');};
};
const testLine = function(value) {
	return function() {fn('q', value);};
};
test('throws if target is not a non-empty string', t => {
	for (let i = 0; i < values.length; i += 1) {
		const value = values[i];
		t.throws(testTarget(value), Error);
	}
});
test('throws if line is not a non-empty string', t => {
	for (let i = 0; i < values.length; i += 1) {
		const value = values[i];
		t.throws(testLine(value), Error);
	}
});
test('matches character in line', t => {
	t.true(fn('q', 'qoo'));
	t.true(fn('q', 'q'));
	t.true(fn('wo', 'wq'));
});
