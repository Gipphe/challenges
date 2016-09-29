'use strict';

const prot = function() {};
prot.stateMin = 0;
prot.stateMax = 3;
prot.state = prot.stateMin;
prot.incrementState = () => prot.state += 1;
prot.resetState = () => prot.state = prot.stateMin;
prot.cycle = () => {
	prot.incrementState();
	const newState = prot.mapping[prot.state];
	prot[newState]();
};
prot.mapping = {
	0: 'start',
	1: 'fromInputted',
	2: 'toInputted',
	3: 'tempInputted'
};
prot.start = () => {};
prot.fromInputted = () => {};
prot.toInputted = () => {};
prot.tempInputted = () => {};
prot.init = () => {
	const currentState = prot.mapping[prot.state];
	prot[currentState]();
};

const FSM = function() {
	let fn = function() {};
	fn.prototype = Object.create(prot);
	return fn;
};
module.exports = FSM;
