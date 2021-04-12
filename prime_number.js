let isPrime = true;
let count = 1;
const isPrimeNumber = (n) => {
	count++
	if (n % count == 0){
		isPrime = false;
	}	
	return (count < number) ? (isPrimeNumber(n)) : (isPrime)
}

console.log(isPrimeNumber(28));