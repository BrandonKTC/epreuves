arg = process.argv.splice(2);
let [first, second] = arg;
first = parseInt(first);
second = parseInt(second);

// console.log({ first, second });

if (first > second) {
	while (second < first) {
		console.log(second);
		second += 1;
	}
} else if (second > first) {
	while (first < second) {
		console.log(first);
		first += 1;
	}
} else {
	console.log("error");
}
