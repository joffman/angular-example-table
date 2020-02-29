const express = require("express");
const app = express();

app.use(express.static("public"));
const portnum = 5000;
app.listen(portnum, function() {
	console.log(`Listening on port ${portnum}.`);
});
