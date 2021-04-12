const IterativePowerOf = (n, p) => {
	let accumulator = n;
	for (var i = 1; i < p; i++) {
		accumulator *= n;
	}
	return accumulator;
}
console.log(IterativePowerOf(5,3))

const RecursivePowerOf = (n, p) => {
	return (p > 1) ? (n * RecursivePowerOf(n, p - 1)) : (Math.max(n * p, 1));
}
console.log(RecursivePowerOf(5,5))