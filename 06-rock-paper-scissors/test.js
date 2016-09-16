import test from 'ava';
import compareThrows from './compareThrows';

test('returns null for identical throws', t => {
	t.is(compareThrows(1,1), null);

});

let throw1 = 1;
let throw2 = 1;
for (;throw1 <= 3; throw1 += 1) {
	for (;throw2 <= 3; throw2 += 1) {
		(function (t1, t2) {
			test('compareThrows(' + throw1 + ', ' + throw2 + ')', t => {
				let expected;
				if (t1 > t2)
					expected = t1;
				else 
					expected = t2;
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
			})
		}(throw1, throw2));
	}
	throw2 = 1;
}