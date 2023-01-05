char = process.argv.splice(2);

function air00(char) {
	// check le nbr d'argument
	if (char.length > 1) return "erreur";
	// save la chaine de charactère et remplacer les tab et newline par des espaces
	str = char[0];
	str = str.replace("\n", " ");
	str = str.replace("   ", " ");
	// définir un nouvel array un string
	let arr = [];
	let newEl = "";
	// loop over la chaine de charactère
	for (let i = 0; i < str.length; i++) {
		// si charactère est un espace ajouter string au tableau
		if (str.charCodeAt(i) == 32) {
			arr.push(newEl);
			newEl = "";
			// si charactère pas un espace ajouté charactère au string
		} else {
			newEl += str[i];
		}
	}
	//  si charactère pas empty ajouter charactère au tableau
	if (newEl != "") arr.push(newEl);
	// return tableau
	return arr;
}

console.log(air00(char));
