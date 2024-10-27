const os = require('node:os');
const buffer = require('node:buffer');

const userInfo = os.userInfo();

console.log("\n\n--------------------------------");
console.log("       User Information         ");
console.log("--------------------------------");
console.log("   Domain Name: ", os.hostname());
console.log("     User Name: ", userInfo.username);
console.log("Home Directory: ", userInfo.homedir);
console.log("--------------------------------\n");