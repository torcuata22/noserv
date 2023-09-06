const path = require("path");
//path to file responsible for app running
module.exports = path.dirname(process.mainModule.filename);

//in case of deprecation message: module.exports = path.dirname(require.main.filename);
