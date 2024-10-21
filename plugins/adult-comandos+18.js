import axios from "axios";
import fetch from "node-fetch";
import fs from "fs"
const handler = async (m, {command, conn}) => {
let porn = 'https://qu.ax/bXMB.webp'
let porn2 = 'https://qu.ax/TxtQ.webp'
if (!db.data.chats[m.chat].modohorny && m.isGroup) return conn.sendFile(m.chat, [porn, porn2].getRandom(), 'sticker.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: `The horny commands are disabled if you are an admin and want to enable them use:`, body: '#enable modehorny', mediaType: 2, sourceUrl: md, thumbnail: imagen3}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})   
//'*[ STOP THERE IS PAJIN ]*n\nThe +18 command is disabled in this group, if you are an admin activate it with: #enable horny mode*';
 
if (command == 'hentai') {
//sendImageAsUrl("https://delirius-nsfw.onrender.com/media/h/bdsm", '🥵')
conn.sendButton(m.chat, '🥵', botname, "https://delirius-nsfw.onrender.com/media/h/bdsm", [['🔄 𝗟𝗢𝗔𝗗𝗜𝗡𝗚 🔄', `/${command}`]], null, null, m)
}

if (command == 'nsfwloli') {
let nsfw = JSON.parse(fs.readFileSync('./src/nsfw/nsfwloli.json'))
conn.sendButton(m.chat, '🥵', botname, result.url, [['🔄 𝗟𝗢𝗔𝗗𝗜𝗡𝗚 🔄', `/${command}`]], null, null, m)
}

if (command == 'china') {
conn.sendButton(m.chat, '*You like me 😏*', botname, "https://deliriusapi-official.vercel.app/api/china", [['🔄 𝗟𝗢𝗔𝗗𝗜𝗡𝗚 🔄', `/${command}`]], null, null, m)
}

if (command == 'boobs') {
conn.sendButton(m.chat, '*wanna suck it😏*', botname, "https://deliriusapi-official.vercel.app/api/boobs", [['🔄 𝗟𝗢𝗔𝗗𝗜𝗡𝗚 🔄', `/${command}`]], null, null, m)
}

if (command == 'hentai2') {
let hentai = JSON.parse(fs.readFileSync('./src/nsfw/neko.json'))
let hentairesult = hentai.getRandom()
conn.sendButton(m.chat, '🥵', botname, hentairesult, [['🔄 𝗟𝗢𝗔𝗗𝗜𝗡𝗚 🔄', `/${command}`]], null, null, m)
}
 
if (command == 'porno') {
conn.sendButton(m.chat, '🥵 Yeah baby put it in🥵', botname, "https://delirius-nsfw.onrender.com/media/r/ass", [['🔄 𝗟𝗢𝗔𝗗𝗜𝗡𝗚 🔄', `/${command}`]], null, null, m)
}

if (command == 'tetas') {
const resError = (await axios.get(`https://raw.githubusercontent.com/elrebelde21/NovaBot-MD/master/src/nsfw/tetas.json`)).data;
let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/boobs?apikey=fg-dylux`).data;
if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
conn.sendButton(m.chat, `🥵 Give me some milk from there 🥵`, botname, res, [['🔄 𝗟𝗢𝗔𝗗𝗜𝗡𝗚 🔄', `/${command}`]], null, null, m)
//conn.sendFile(m.chat, res, 'thumbnail.jpg', `listo`, m)
}

  if (command == 'pornololi') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwloli.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `🥵`.trim()}, {quoted: m});
  }

if (command == 'nsfwfoot') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwfoot.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwass') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwass.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `🥵 wanna suck it 🥵`.trim()}, {quoted: m});
  }

  if (command == 'nsfwbdsm') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwbdsm.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwcum') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwcum.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwero') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwero.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwfemdom') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwfemdom.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwglass') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwglass.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }
  
if (command == 'nsfworgy') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfworgy.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }
  
  if (command == 'booty') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/booty.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/ass?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'ecchi') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/ecchi.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'furry') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/furro.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `And this furry?`.trim()}, {quoted: m});
  }

  if (command == 'trap') {
    const res = await fetch(`https://api.waifu.pics/nsfw/trap`);
    const json = await res.json();
    const url = json.url;
    conn.sendMessage(m.chat, {image: {url: url}, caption: `Uh no a transplant`.trim()}, {quoted: m});
  }

  if (command == 'imagelesbians') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/imagenlesbians.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/lesbian?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'panties') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/panties.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'pene') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/pene.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/penis?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `Damn little lazy boy 🙊`.trim()}, {quoted: m});
  }

  if (command == 'randomxxx') {
    const rawjsonn = ['https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/tetas.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/booty.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/imagenlesbians.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/panties.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/porno.json'];
    const rawjson = await rawjsonn[Math.floor(rawjsonn.length * Math.random())];
    const res = (await axios.get(rawjson)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'yaoi') {
    const res = await fetch(`https://nekobot.xyz/api/image?type=yaoi`);
    const json = await res.json();
    const url = json.message;
    conn.sendMessage(m.chat, {image: {url: url}, caption: `Ummm`.trim()}, {quoted: m});
  }

  if (command == 'yaoi2') {
    const res = await fetch(`https://purrbot.site/api/img/nsfw/yaoi/gif`);
    const json = await res.json();
    const url = json.link;
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'yuri') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/yuri.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }
 
if (command == 'breast') {
const res = (await axios.get(`https://raw.githubusercontent.com/elrebelde21/NovaBot-MD/master/src/nsfw/pechos.json`)).data;
const url = await res[Math.floor(res.length * Math.random())];
conn.sendButton(m.chat, `Nice breasts to give you milk 🥵`, botname, url, [['🔄 𝗟𝗢𝗔𝗗𝗜𝗡𝗚 🔄', `/${command}`]], null, null, m)
//conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m})
}

  if (command == 'yuri2') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/yuri.json`)).data;
    const res = await fetch(`https://purrbot.site/api/img/nsfw/yuri/gif`);
    const json = await res.json();
    let url = json.link;
    if (url == '' || !url || url == null) url = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

if (command == 'hentaisearch' || command == 'searchhentai') {
if (!text) throw '*⚠️ Enter the name of any hentai to search*';
const searchResults = await searchHentai(text);
let teks = searchResults.result.map((v, i) => `${i+1}. *_${v.title}_*
↳ 📺 *_Views:_* ${v.views}
↳ 🎞️ *_Link:_* ${v.url}`).join('\n\n');
let randomThumbnail;
if (searchResults.result.length > 0) {
const randomIndex = Math.floor(Math.random() * searchResults.result.length);
randomThumbnail = searchResults.result[randomIndex].thumbnail;
} else {
randomThumbnail = 'https://pictures.hentai-foundry.com/e/Error-Dot/577798/Error-Dot-577798-Zero_Two.png';
teks = '*[❗] No results found*';
}
conn.sendFile(m.chat, randomThumbnail, 'error.jpg', teks, fake, m);
}}
handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trap', 'imagelesbians', 'pene', 'porno', 'randomxxx', 'breast', 'hentai', 'hentai2', 'nsfwloli', 'porno', 'tetas', 'china', 'boobs'];
handler.tags = ['nsfw'];
handler.command = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trap', 'imagelesbians', 'pene', 'porno', 'randomxxx', 'breast', 'hentai', 'hentai2', 'nsfwloli', 'porno', 'tetas', 'china', 'boobs', 'hentaisearch', 'searchhentai']
handler.limit = 3
handler.register = true
export default handler

async function searchHentai(search) {
  return new Promise((resolve, reject) => {
    axios.get('https://hentai.tv/?s=' + search).then(async ({data}) => {
      const $ = cheerio.load(data);
      const result = {};
      const res = [];
      result.coder = 'rem-comp';
      result.result = res;
      result.warning = 'It is strictly forbidden to reupload this code, copyright © 2022 by rem-comp';
      $('div.flex > div.crsl-slde').each(function(a, b) {
        const _thumbnail = $(b).find('img').attr('src');
        const _title = $(b).find('a').text().trim();
        const _views = $(b).find('p').text().trim();
        const _url = $(b).find('a').attr('href');
        const hasil = {thumbnail: _thumbnail, title: _title, views: _views, url: _url};
        res.push(hasil);
      });
      resolve(result);
    }).catch((err) => {
      console.log(err);
    });
  });
}
