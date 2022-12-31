arg = process.argv.splice(2)[0];

function eau07(arg) {
	tab = arg.split(" ");
	//  split la chaine de charactère
	maj = [];
	//  créer une nouvelle chaine de charactère
	tab.forEach((el) => {
		maj.push(String.fromCharCode(el.charCodeAt(0) - 32) + el.slice(1));
	});
	//  push word in majuscule in new chaine
	return maj.join(" "); // return chaine de charactère en majuscule
}

console.log(eau07(arg));
