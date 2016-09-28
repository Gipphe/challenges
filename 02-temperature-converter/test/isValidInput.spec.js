/* jshint loopfunc: true */
'use strict';
import test from 'ava';
import fn from '../isValidInput';

let isNumber = true;
for (let i = 0; i < 2; i += 1) {
	const pfn = fn.bind(null, isNumber);
	test('should return false for invalid input', t => {
		t.false(pfn('foo'));
		t.false(pfn(''));
		t.false(pfn([]));
		t.false(pfn({}));
		t.false(pfn(true));
		if (isNumber) {
			t.false(pfn('f'));
			t.false(pfn('c'));
		} else {
			t.false(pfn(12));
			t.false(pfn(1));
		}
	});
	test('should return true for invalid input', t => {
		if (isNumber) {
			t.true(pfn(21));
			t.true(pfn(192));
		} else {
			t.true(pfn('d'));
			t.true(pfn('1'));
			t.true(pfn('ø'));
		}
	});
	isNumber = !isNumber;
}
