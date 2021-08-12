const express = require("express");
const { Client, RichEmbed } = require("discord.js"); 
const app = express();
const chalk = require("chalk");
const fs = require("fs");
const ytdl = require("ytdl-core");
function sleep(milliseconds) { 
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) { 
      break;
    }
  }
}
const http = require("http");
app.get("", (request, response) => {
  console.log(Date.now() + " Rejoin Vocale.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http:${process.env.PROJECT_DOMAIN}.glitch.me`);
}, 280000);
const log = message => {
  console.log(`${message}`);
};

const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const token1 = new Discord.Client();
const token2 = new Discord.Client();
const token3 = new Discord.Client();
const token4 = new Discord.Client();
const token5 = new Discord.Client();
const token6 = new Discord.Client();
const token7 = new Discord.Client();
const token8 = new Discord.Client();
const token9 = new Discord.Client();
const token10 = new Discord.Client();

token1.on("ready", () => { 
  token1.channels.get("849798915314286602").join();
});

token2.on("ready", () => {
  token2.channels.get("849798915314286602").join(); 
});

token3.on("ready", () => {
  token3.channels.get("849798915314286602").join();
});

token4.on("ready", () => {
  token4.channels.get("849798915314286602").join();
});

token5.on("ready", () => {
  token5.channels.get("849798915314286602").join(); 
});

token6.on("ready", () => {
  token6.channels.get("849798915314286602").join();
});

token7.on("ready", () => {
  token7.channels.get("849798915314286602").join(); 
});

token8.on("ready", () => {
  token8.channels.get("849798915314286602").join(); 
});

token9.on("ready", () => {
  token9.channels.get("845531418355433473").join(); 
});

token10.on("ready", () => {
  token10.channels.get("845531418355433473").join();
});

token1.login(process.env.TOKEN1);
token2.login(process.env.TOKEN2);
token3.login(process.env.TOKEN3); 
token4.login(process.env.TOKEN4);
token5.login(process.env.TOKEN5);
token6.login(process.env.TOKEN6);
token7.login(process.env.TOKEN7);
token8.login(process.env.TOKEN8);
token9.login(process.env.TOKEN9); 
token10.login(process.env.TOKEN10)
