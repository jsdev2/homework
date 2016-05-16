function sumOfEvenFibsUpTo(limit) {
	var total = 0;
	var current = 1;
	var previous = 0;
	var placeholderCurrent;
	while (current < limit) {
	    if (current % 2 === 0) {
	        total += current;
	    }
	    placeholderCurrent = current + previous;
	    previous = current;
	    current = placeholderCurrent;
	}
	return total;
}

console.log(sumOfEvenFibsUpTo(4000000))

