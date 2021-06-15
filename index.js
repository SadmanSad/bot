const api = require('node-telegram-bot-api')
require('dotenv').config()
const token = process.env.TOKEN
const id =  process.env.ID
const fetch = require('node-fetch')
const bot = new api(token,{polling: true})
String.prototype.isMatch = function(txt){
return this.toLowerCase() === txt
}
String.prototype.isIndex = function(txt){
return this.toLowerCase().indexOf(txt) != -1
    }
var node = {}

    bot.onText(/\/start/, (msg) => {      
        bot.sendMessage(msg.chat.id,1)
        console.log(msg.chat.id)
        });
     
// 
  //msg.from.first_name