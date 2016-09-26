'use strict';
import test from 'ava';
import fn from '../tossCoin';

test('returns Heads or Tails', t => {
	for (let i = 0; i < 10; i += 1) {
		const actual = fn();
		t.true(actual === 'Heads' || actual === 'Tails');
	}
});
