// Working with Files

// Load file system -> fs
const fs = require("fs");
const path = require("path");

fs.readFile(
	path.join(__dirname, "files", "input.txt"),
	"utf-8",
	(err, data) => {
		if (err) throw err;
		console.log(data.toString());
	}
);

fs.writeFile(
	path.join(__dirname, "files", "output.txt"),
	"Sample Output Text",
	(err) => {
		if (err) throw err;
		console.log(`Written to output.txt`);
	}
);

fs.appendFile(
	path.join(__dirname, "files", "output.txt"),
	"\nSample Append Text",
	(err) => {
		if (err) throw err;
		console.log(`Written to output.txt`);
	}
);

// Exit on uncaught errors
process.on("uncaughtException", (err) => {
	console.error(`There was an Uncaught Error: ${err}`);
	process.exit(1);
});
