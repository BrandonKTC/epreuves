let arr = [];
let i = 0;
const arg = process.argv.splice(2);

function terre13(arg) {
	while (i < arg.length) {
		if (arr.length > 1) {
			if (arr[i - 1] < Number(arg[i])) {
				arr.push(Number(arg[i]));
			} else {
				return "Pas triée !";
			}
			return " Triée !";
		} else if (!isNaN(arg[0])) {
			arr.push(Number(arg[i]));
		} else {
			return "erreur.";
		}
		i++;
	}
}

console.log(terre13(arg));
