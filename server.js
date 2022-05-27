const express = require("express");

const app = express();
const port = 8080;

let count = 0;

app.get("/", (req, res) => {
    console.log(req.ip);
    console.log("lol");
    count++;
    res.send({ msg: "lol this is working somehow!", count: count });
});

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
});
