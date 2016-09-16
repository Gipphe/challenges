const compareThrows = (throw1, throw2) => {
	if (throw1 - throw2 === 0) {
		return null;
	}
	if (throw2 - throw1 === 1) {
		return throw2;
	}
	if (throw1 - throw2 === 1) {
		return throw1;
	}
	if (throw1 - throw2 === 2) {
		return throw2;
	}
	if (throw2 - throw1 === 2) {
		return throw1;
	}
};

module.exports = compareThrows;