function sumOfMultiplesUpTo(limit) {
	var sum = 0;
	for (var n = 0; n < limit; n++) {
		if ((n % 3 === 0) || (n % 5 === 0)) {
			sum = sum + n;
		}
	}
	return sum;
}

console.log(sumOfMultiplesUpTo(1000));