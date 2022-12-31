const arg = process.argv.splice(2)[0];
let [hour, minute] = arg.split(":");

function terre11(hour, minute) {
	if (minute.includes("PM"))
		return `${Number(hour) + 12}:${minute.slice(0, 2)}`;
	else return `${hour}:${minute.slice(0, 2)}`;
}

console.log(terre11(hour, minute));
