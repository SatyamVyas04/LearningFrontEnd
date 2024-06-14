// For larger file, we need to move data from readStream to writeStream as and when data changes
// We accomplish this, more efficiently using streams

const fs = require("fs");

const rs = fs.createReadStream("./files/SampleLargeData.txt", {
	encoding: "utf8",
});

const ws = fs.createWriteStream("./files/SampleDataOutput.txt");

rs.pipe(ws);

rs.on((dataChunk) => {
	ws.write(dataChunk);
});
