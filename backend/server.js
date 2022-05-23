const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 9000;

app.use(express.json())

app.get('/', (req, res, next) => {
    res.sendFile(path.join(`${__dirname}/../frontend/index.html`));
});

app.get("/beers", (req, res) => {
	res.sendFile(path.join(`${__dirname}/../frontend/pub/beers.json`));
})


app.use('/pub', express.static(`${__dirname}/../frontend/pub`))

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
})