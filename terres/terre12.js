const arg = process.argv.splice(2);

function terre12(arg) {
	let arr = [];
	let i = 0;
	while (arr.length < 3) {
		arr.push(Number(arg[i]));
		i++;
	}
	if (arr[0] > arr[1] && arr[0] < arr[2]) return arr[0];
	if (arr[1] > arr[0] && arr[1] < arr[2]) return arr[1];
	if (arr[2] > arr[0] && arr[2] < arr[1]) return arr[2];
	else return "erreur.";
}

console.log(terre12(arg));
