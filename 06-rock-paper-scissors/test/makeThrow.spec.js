'use strict';
import test from 'ava';
import fn from '../makeThrow';

test('returns a number', t => {
	t.is(typeof fn(), 'number');
});
test('returns a number between 0 and 2, inclusive', t => {
	for (let i = 0; i < 10; i += 1) {
		t.true(fn() <= 2 && fn() >= 0);
	}
});
