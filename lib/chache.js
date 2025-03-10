const fs = require("fs");
const chalk = require("chalk");
const moment = require("moment");
const time = moment(new Date()).format("HH:mm:ss DD/MM/YYYY");

function uncache(module = ".") {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

function nocache(module, cb = () => {}) {
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}

require("../index");
nocache("../index");

require("../main");
nocache("../main");

// Auto Update Server
require("./myfunc");
nocache("./myfunc");

module.exports = { nocache, uncache };
