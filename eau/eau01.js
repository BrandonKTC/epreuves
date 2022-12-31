let arr = [];

function eau01() {
	for (let i = 0; i <= 9; i++) {
		for (let j = 0; j <= 8; j++) {
			for (let k = 0; k <= 9; k++) {
				for (let l = j + 1; l <= 9; l++) {
					arr.push(`${i}${j} ${k}${l}`);
				}
			}
		}
	}
}

eau01();

console.log(arr.slice(-10));
