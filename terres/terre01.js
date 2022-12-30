function terre01() {
	const filename = __filename;
	const newfilename = filename.split("/");
	return newfilename[newfilename.length - 1];
}

console.log(terre01());
