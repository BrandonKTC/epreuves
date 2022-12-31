let arr = [];
let arg = Number(process.argv.splice(2)[0]);

function fib() {
	while (arr.length < arg + 1) {
		if (arr.length < 2) {
			arr.push(0, 1);
		} else {
			arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
		}
	}
}

fib();

function eau03(arg) {
	return arr[arg];
}

console.log(eau03(arg));
