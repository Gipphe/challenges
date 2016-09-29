'use strict';
const fToc = temp => (temp - 32) / 1.8;
const cTof = temp => temp * 1.8 + 32;
const kToc = temp => temp - 273.15;
const cTok = temp => temp + 273.15;
const coll = {
	fToc: fToc,
	cTof: cTof,
	kToc: kToc,
	cTok: cTok
};
const isValidType = type => {
	if (type !== 'c' && type !== 'f' && type !== 'k'){
		return false;
	}
	return true;
};

module.exports = function(fromType, toType, temp) {
	if (!isValidType(fromType) || !isValidType(toType)) {
		throw new Error('fromType of toType is not of a valid type');
	}
	let newTemp = coll[fromType + 'To' + toType](temp);
	newTemp = Math.round(newTemp * 10) / 10;
	return newTemp;
};
