const arg = process.argv.splice(2)[0];
let [hour, minute] = arg.split(":");

function terre10(hour, minute) {
	if (hour > 12) return `${hour - 12}:${minute}PM`;
	else return `${hour}:${minute}AM`;
}

console.log(terre10(hour, minute));
