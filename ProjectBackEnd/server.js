// Working with Files

// Load file system -> fs
// const fs = require("fs");

// For async await promises we do
const fsPromises = require("fs").promises;
const path = require("path");

// fs.readFile(
// 	path.join(__dirname, "files", "input.txt"),
// 	"utf-8",
// 	(err, data) => {
// 		if (err) throw err;
// 		console.log(data.toString());
// 	}
// );
//
// This was we are risking the order in which these functions are run
//
// fs.writeFile(
// 	path.join(__dirname, "files", "output.txt"),
// 	"Sample Output Text",
// 	(err) => {
// 		if (err) throw err;
// 		console.log(`Written to output.txt`);
// 	}
// );
//
// fs.appendFile(
// 	path.join(__dirname, "files", "output.txt"),
// 	"\nSample Append Text",
// 	(err) => {
// 		if (err) throw err;
// 		console.log(`Written to output.txt`);
// 	}
// );
//
// To maintain relative order, we place one inside the callback of the other\
//
// fs.writeFile(
// 	path.join(__dirname, "files", "output.txt"),
// 	"Sample Output Text",
// 	(err) => {
// 		if (err) throw err;
// 		console.log(`Written to output.txt`);
//
// 		fs.appendFile(
// 			path.join(__dirname, "files", "output.txt"),
// 			"\nSample Append Text",
// 			(err) => {
// 				if (err) throw err;
// 				console.log(`Appended to output.txt`);
//
// 				fs.rename(
// 					path.join(__dirname, "files", "output.txt"),
// 					path.join(__dirname, "files", "newOutput.txt"),
// 					(err) => {
// 						if (err) throw err;
// 						console.log(`Renamed output.txt to newOutput.txt`);
// 					}
// 				);
// 			}
// 		);
// 	}
// );
//
// This is called the callback hell :salute:
// Instead we can do async await bro :joy:
//
//
//
// Async Await Approach: AAA
const fileOps = async () => {
	try {
		const data = await fsPromises.readFile(
			path.join(__dirname, "files", "input.txt"),
			"utf-8"
		);
		console.log(data);

		await fsPromises.unlink(path.join(__dirname, "files", "input.txt"));

		await fsPromises.writeFile(
			path.join(__dirname, "files", "output.txt"),
			data
		);
		await fsPromises.appendFile(
			path.join(__dirname, "files", "output.txt"),
			"\n\nAppending some data here"
		);
		await fsPromises.rename(
			path.join(__dirname, "files", "output.txt"),
			path.join(__dirname, "files", "promisesOutput.txt")
		);

		console.log(
			"\nSuccessfully completed all Operations (Read, Write, Append, Rename)\n"
		);

		const newData = await fsPromises.readFile(
			path.join(__dirname, "files", "promisesOutput.txt"),
			"utf-8"
		);
		console.log(newData);
	} catch (err) {
		console.error(err);
	}
};

fileOps();

// Exit on uncaught errors
process.on("uncaughtException", (err) => {
	console.error(`There was an Uncaught Error: ${err}`);
	process.exit(1);
});
