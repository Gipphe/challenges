'use strict';
import test from 'ava';
import fn from '../validateThrow';

test('valid throw', t => {
	t.true(fn(0,2,1));
});
test('invalid throw', t => {
	t.false(fn(0,1,2));
});
test('type safety', t => {
	t.throws(function() {
		fn('foo', 'bar', 'baz');
	}, TypeError, 'throws as it should');
});
