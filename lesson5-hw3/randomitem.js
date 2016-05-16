function randomItem(arr) {
	var randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
}

// Test:

var animals = ['cat', 'aardvark', 'melon'];
for (var i = 0; i < 20; i++) {
	console.log(randomItem(animals));
}
