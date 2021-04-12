// let isPrime = true;
// let count = 1;
// const isPrimeNumber = (n) => {
// 	count++
// 	if (n % count == 0){
// 		isPrime = false;
// 	}	
// 	return (count < number) ? (isPrimeNumber(n)) : (isPrime)
// }

const isPrimeNumber = (n, isPrime = true, count = 1) => {
	count++
	if (n % count == 0){
		isPrime = false;
	}	
	return (count < number) ? (isPrimeNumber(n, isPrime, count)) : (isPrime)
}

console.log(isPrimeNumber(29));