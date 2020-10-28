const Discord = require('./../src/index.js');
const stdvoid = require('./thingies/stdvoid.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log("client ready");
});

client.on('message', (message) => {
  
});

client.login(process.env.dtoken, () => stdvoid) //login and gobble up the debug stuff that floods the console