'use strict';
import test from 'ava';
import compareThrows from '../compareThrows';

test('returns null for identical throws', t => {
	t.is(compareThrows(1,1), null);
});

let throw1 = 0;
let throw2 = 0;
const testFn = function (t1, t2) {
	test('compare throws ' + throw1 + ' and ' + throw2, t => {
		let expected;
		if (t1 > t2){
			expected = t1;
		} else {
			expected = t2;
		}
		if (t1 - t2 === 2) {
			expected = t2;
		}
		if (t2 - t1 === 2) {
			expected = t1;
		}
		if (t1 === t2) {
			expected = null;
		}
		t.is(compareThrows(t1, t2), expected, expected + ' wins');
	});
};
for (;throw1 <= 2; throw1 += 1) {
	for (;throw2 <= 2; throw2 += 1) {
		testFn(throw1, throw2);
	}
	throw2 = 0;
}
