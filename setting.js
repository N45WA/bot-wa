const chalk = require("chalk");
const fs = require("fs");

global.ownerNumber = "6281386547582@s.whatsapp.net";
global.kontakOwner = "6281386547582";
global.namaStore = "Nama store mu";
global.botName = "Nama bot mu";
global.ownerName = "Nama mu";

global.linkyt = "link chanel yt lu";
global.linkig = "link akun ig lu";
global.dana = "085xx";
global.ovo = "085xx";
global.gopay = "085xx";
global.sawer = "Link saweria mu";
global.linkgc1 = "Link grup WhatsApp mu (1)";
global.linkgc2 = "Link grup WhatsApp mu (2)";
//Jikalau dari salah satu di atas kalian tidak memiliki
//silahkan kosongkan atau isi --

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
