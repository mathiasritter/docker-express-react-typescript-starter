var fs = require("fs");

if (!fs.existsSync("./dist")) {
    fs.mkdirSync("./dist");
}

if (!fs.existsSync("./dist/server.js")) {
    fs.writeFileSync("./dist/server.js", "");
}
