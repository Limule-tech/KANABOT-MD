import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//---------[ Añada los numeros a ser Propietario/a ]---------

global.owner = [['237698581946', 'ＰＲＯＰＲＩAＴＯＲ', true], ['237693538738'], ['237686724137'], ['237621214234']]
global.mods = []
global.prems = ['237698581946']

//BETA: If you want to avoid writing the number that will be the bot in the console, add it from here then:
//Only applies to option 2 (being a bot with an 8-digit text code)
global.botNumberCode = "+237693538738" //Example: +237698581946
global.confirmCode = "+237693538738" 

// Change to false to use the Bot from the same Bot number
global.isBaileysFail = false

//---------[ APIS GLOBAL ]---------

global.openai_key = 'sk-...OzYy' /* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */
global.openai_org_id = 'HITjoN7H8pCwoncEB9e3fSyW' /* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */
global.Key360 = ['964f-0c75-7afc']//key de violetics
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = "GataDiosV2"
global.itsrose = ['4b146102c4d500809da9d1ff']
global.baileys = '@whiskeysockets/baileys'

global.APIs = {xteam: 'https://api.xteam.xyz', 
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
violetics: 'https://violetics.pw',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',	
fgmods: 'https://api-fgmods.ddns.net',
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',	
rose: 'https://api.itsrose.site',
popcat : 'https://api.popcat.xyz',
xcoders : 'https://api-xcoders.site' },
global.APIKeys = {'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': `${lolkeysapi}`,
'https://api.neoxr.my.id': `${keysneoxr}`,	
'https://violetics.pw': 'beta',
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren' }

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//------------------------[ Stickers ]-----------------------------

global.packname = 'KanaBot-Md'
global.author = 'Limule-Solitarus'

//------------[ Versión | Nombre | cuentas ]------------

global.wm = '𝛫𝛥𝛮𝛥𝐵𝛩𝑇-𝛭𝐷' 
global.botname = '𝙆𝙖𝙣𝙖𝘽𝙤𝙩-𝙈𝘿'
global.vs = '1.0.0'
global.yt = 'https://www.youtube.com/@Darklimule'
global.tiktok = 'tiktok.com/@limulesol67'
global.md = 'https://github.com/Limule3650/KanaBot-Md'
global.fb = 'https://www.facebook.com/elrebelde21'
global.face = 'https://www.facebook.com/Login'

global.nna = 'https://whatsapp.com/channel/0029Vafhjw0IXnlonRAQMM2l' //Update
global.nn = 'https://chat.whatsapp.com/Bph2Nt7qdqf1p1pQmkIy9U' //Group 1
global.nnn = 'https://chat.whatsapp.com/JQ1dPUBap3U2pS9SHqwzh9' //Group 2
global.nnnt = 'https://chat.whatsapp.com/BudzAp7dkcWLIVvEZcSEe5' //Group in collaboration 
global.nnnt2 = 'https://chat.whatsapp.com/GNsD6DEfgN2BKaN3qmJYCe' // Group COL 2
global.nnntt = 'https://chat.whatsapp.com/GyrsXQcn2gC4SEd1aYXwgE' //Group COL 3
global.nnnttt = 'https://chat.whatsapp.com/Bph2Nt7qdqf1p1pQmkIy9U' //KanaBot Link
global.nnntttt = 'https://chat.whatsapp.com/L86QMJQ2HFtHwhGstHBT9B' //Bot Help Group
global.bot = 'Not available for the moment...'
global.asistencia = `${fb}`
global.redes = [nna, yt, nn, md, tiktok, fb, nnn, face]

//------------------------[ Info | Datos ]---------------------------

global.wait = 'Calm down senpai Im processing💕\n\n> *❗Please do not spam👏❗*'
global.waitt = '*⌛ _Charging..._ ▬▬▭▭▭*'
global.waittt = '*⌛ _Charging..._ ▬▬▬▬▭▭*'
global.waitttt = '*⌛ _Charging..._ ▬▬▬▬▬▬▭*'
global.waittttt = '*⌛ _Charging..._ ▬▬▬▬▬▬▬*'
global.rg = '『✅ 𝙍𝙀𝙎𝙐𝙇𝙏 ✅』\n\n'
global.resultado = rg
global.ag = '『⚠️ *_WARNING_* ⚠️』\n\n'
global.advertencia = ag
global.iig = '『❕ *_INFORMATION_* 』\n\n'
global.informacion = iig
global.fg = '『❌ 𝙀𝙍𝙍𝙊𝙍 ❌』\n\n'
global.fallo = fg
global.mg = '『❗️*_USER WRONG_*❗』\n\n'
global.mal = mg
global.eeg = '『📩 *_REPPORT_* 📩』\n\n'
global.envio = eeg
global.eg = '『💚 𝙀𝙓𝙄𝙏 💚』\n\n'
global.exito = eg

//-------------------------[ IMAGEN ]------------------------------
global.img = "https://qu.ax/Zgqq.jpg"
global.img1 = 'https://qu.ax/hNJk.jpg'
global.img2 = 'https://iili.io/23i7GEX.jpg'

global.imagen = fs.readFileSync('./Menu2.jpg')
global.imagen1 = fs.readFileSync('./media/Menu1.jpg')
global.imagen2 = fs.readFileSync('./media/Menu2.jpg')
global.imagen3 = fs.readFileSync('./media/Menu3.jpg')
global.imagen4 = fs.readFileSync('./media/Menu4.jpg')
global.imagen5 = 'https://qu.ax/rULv.jpg'
global.imagen6 = 'https://iili.io/23i79XS.jpg'
global.menu18 = 'https://qu.ax/MOgO.jpg'
global.vid1 = 'https://qu.ax/dcAc.mp4'
global.img = [imagen, imagen1, imagen2, imagen3, imagen4]

//----------------------------[ NIVELES | RPG ]---------------------------------

global.multiplier = 850 // Cuanto más alto, más difícil subir de nivel
global.maxwarn = '4' // máxima advertencias

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
