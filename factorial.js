let number = 5 //prompt("Please enter the number of which you want the Factorial");

const FactorialIterative = (n) => {
	let accumulator = n;
	for (var i = 1; i < n; i++) {
		accumulator *= (n - i);
	}
	return accumulator
}
console.log(FactorialIterative(number));

const FactorialRecursive = (n) => {
	return (n > 1) ? (n * FactorialRecursive(n - 1)) : (n)
}
console.log(FactorialRecursive(number));