fs = require("fs");

filename = process.argv.splice(2);
fs.readFile(`${__dirname}/${filename}`, "utf8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(data);
});
