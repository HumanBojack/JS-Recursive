const findNextPrime = (n) => {
	return (isPrimeNumber(n)) ? (n) : (findNextPrime(n + 1))
}
console.log(findNextPrime(25));