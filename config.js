import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.owner = [
  [ '59894393163', 'chatGPT-bot-MD_07', true ],
  [ '59895199851', 'chatGPT-bot-MD_07', true ],
['50432441062'],
  ['155968113483985@lid'],
  ['155968113483985'],
]; 

global.suittag = ['59894393163'] 
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.Jadibts = true
global.packname = 'chatGPT-bot-MD_07';
global.botname = 'git branch -m main chatGPT-bot-MD
git fetch origen
git branch -u origen
git remoto set-head origin -a 𝑀𝐷'
global.author = 'Made By.chatGPT-bot-MD_07 -`ღ´-'
global.dev = '© ρσɯҽɾҽԃ Ⴆყ 𝑫ҽყʅιɳ'
global.textbot = 'ᴋɪʀɪᴛᴏ-ʙᴏᴛ ᴍᴅ • ꉣꄲꅐꏂꋪꏂ꒯ ꃳꌦ chatGPT-bot-MD_07'
global.etiqueta = 'chatGPT-bot-MD_07'
global.ch = {
ch1: '120363403593951965@newsletter',
ch2: '120363403593951965@newsletter',
}
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

let icono1 = [
  'https://i.postimg.cc/c4t9wwCw/1756162596829.jpg',
  'https://i.postimg.cc/c4MvC5Wz/1756167144046.jpg',
  'https://i.postimg.cc/qMdtkHPn/1756167135980.jpg',
]

global.inc = icono1[Math.floor(Math.random() * icono1.length)];

const res = await fetch(inc);
const img = Buffer.from(await res.arrayBuffer());


async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalIdM.length)
let id = canalIdM[randomIndex]
let name = canalNombreM[randomIndex]
return { id, name }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
