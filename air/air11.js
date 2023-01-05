tab = process.argv.splice(2);
num = Number(tab[tab.length - 1]);
char = tab[0];

function air11(char, times) {
	let sup = 1;
	for (let i = 0; i < times; i++) {
		console.log(" ".repeat(times - i) + char.repeat(i + sup));
		sup++;
	}
}

air11(char, num);
