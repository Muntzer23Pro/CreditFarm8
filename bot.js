const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523048543133630465")
setInterval(function() {
channel.send(`الله و اكبر لا اله الا الله , محمد رسول الله ................`);
}, 30)
})

client.login("NTMwNzYzMTk1MjcxNDc5MzA2.DxEJjQ.BkC_bJOnduCG9e9IQdqwE8XZjT0");
