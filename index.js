const server = require("./server.js");
const persist = require("./persist.js");
const model = require("./model.js");

const portNumber = process.argv[2] || process.env.PORT || 8080;

persist.connect(function () {

  server.listen(portNumber, () => {
    console.log(`Running Server on Port ${portNumber}`);
  });
});
