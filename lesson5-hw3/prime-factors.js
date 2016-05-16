function greatestPrimeFactor(n) {
	var dividend = n;
	var gpf = 2;
	while (dividend > gpf) {
		if (dividend % gpf === 0) {
			dividend = dividend / gpf;
		} else {
			gpf = gpf + 1;
		}
	}
	return gpf;
}

console.log(greatestPrimeFactor(600851475143)) 