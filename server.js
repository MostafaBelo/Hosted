const express = require("express");

const app = express();
const port = 8080;

app.get("/home", (req, res) => {
    console.log(req.ip);
    console.log("lol");
    res.send({ msg: "lol this is working somehow!" });
});

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
});
