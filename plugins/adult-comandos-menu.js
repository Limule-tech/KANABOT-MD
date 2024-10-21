import { xpRange } from "../lib/levelling.js";
var handler = async (m, {conn, usedPrefix, usedPrefix: _p, text}) => {
let porn = 'https://qu.ax/bXMB.webp'
let porn2 = 'https://qu.ax/TxtQ.webp'
if (!db.data.chats[m.chat].modohorny && m.isGroup) return conn.sendFile(m.chat, [porn, porn2].getRandom(), 'sticker.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: `ᴸᵒˢ ᶜᵒᵐᵃⁿᵈᵒ ʰᵒʳⁿʸ ᵉˢᵗᵃ ᵈᵉˢᵃᶜᵗᶦᵛᵃᵈᵒ ˢᶦ ᵉʳᵉˢ ᵃᵈᵐᶦⁿ ʸ ᵠᵘᶦᵉʳᵉ ᵃᶜᵗᶦᵛᵃʳˡᵒˢ ᵘˢᵃʳ:`, body: '#enable modohorny', mediaType: 2, sourceUrl: md, thumbnail: imagen3}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})   

  let {exp, limit, level, role} = global.db.data.users[m.sender];
  let {min, xp, max} = xpRange(level, global.multiplier);

  let d = new Date(new Date() + 3600000);
  let locale = "es";
  let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(d / 84600000) % 5];
  let week = d.toLocaleDateString(locale, {weekday: "long"});
  let date = d.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  let dateIslamic = Intl.DateTimeFormat(locale + "-TN-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
  let time = d.toLocaleTimeString(locale, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  let _uptime = process.uptime() * 1000;
  let _muptime;
  if (process.send) {
    process.send("uptime");
    _muptime =
      (await new Promise((resolve) => {
        process.once("message", resolve);
        setTimeout(resolve, 1000);
      })) * 1000;
  }
  let {money} = global.db.data.users[m.sender];
  let muptime = clockString(_muptime);
  let uptime = clockString(_uptime);
  let totalreg = Object.keys(global.db.data.users).length;
  let rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
  let replace = {
    "%": "%",
    p: _p,
    uptime,
    muptime,
    me: conn.getName(conn.user.jid),

    exp: exp - min,
    maxexp: xp,
    totalexp: exp,
    xp4levelup: max - exp,

    level,
    limit,
    weton,
    week,
    date,
    dateIslamic,
    time,
    totalreg,
    rtotalreg,
    role,
    readmore: readMore,
  };
  text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, "g"), (_, name) => "" + replace[name]);

  let pp = "./Menu2.jpg";
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let username = conn.getName(who);
  //let user = global.db.data.users[m.sender]
  //user.registered = false

  let menu = `Hello ${username} senpai 💕

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
😏😏😏😏😏😏😏😏😏
◉ *EXPERIENCE | EXP ➺ ${exp}*
◉ *NIVEAU | LEVEL ➺ ${level}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
◉ *DATE ➺ ${week}, ${date}*
◉ *UTILISATEUR | USERS ➺ ${Object.keys(global.db.data.users).length}* 
😏😏😏😏😏😏😏😏😏
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

*Commands to watch porn 🔞*
*Use under your own responsibility*
*NOTE: Don't be a jerk*
*NSFW ✅*
┌──「 *NSFWMENU*  」──┈❖
◉ ${usedPrefix}pack
◉ ${usedPrefix}pack2
◉ ${usedPrefix}pack3
◉ ${usedPrefix}pack4
◉ ${usedPrefix}china
◉ ${usedPrefix}boobs
◉ ${usedPrefix}videoxxx
◉ ${usedPrefix}videolesbixxx
◉ ${usedPrefix}tetas
◉ ${usedPrefix}booty
◉ ${usedPrefix}ecchi
◉ ${usedPrefix}furry
◉ ${usedPrefix}pussy
◉ ${usedPrefix}panties
◉ ${usedPrefix}pene
◉ ${usedPrefix}porno
◉ ${usedPrefix}randomxxx
◉ ${usedPrefix}pechos
◉ ${usedPrefix}yuri
◉ ${usedPrefix}yuri2
◉ ${usedPrefix}trap
◉ ${usedPrefix}hentai
◉ ${usedPrefix}pornololi
◉ ${usedPrefix}pornoorgy
◉ ${usedPrefix}pornofoot
◉ ${usedPrefix}pornoass
◉ ${usedPrefix}pornouniform
◉ ${usedPrefix}pornobdsm
◉ ${usedPrefix}pornocum
◉ ${usedPrefix}pornonetorare
◉ ${usedPrefix}pornofeet
◉ ${usedPrefix}pornoero
◉ ${usedPrefix}pornofemdom
◉ ${usedPrefix}pornoglass
◉ ${usedPrefix}pornosuccubus
◉ ${usedPrefix}pornochupada
◉ ${usedPrefix}pornomuslos
└──────────┈❖  
> Yaoi is for girls, not just men who have fun. 🤓`.trim();
  conn.sendMessage(m.chat, { image: { url: "https://iili.io/2FHbh1j.jpg", }, caption: menu, 
contextInfo: {
externalAdReply: {
title: `🥵🔥 𝐒𝐄𝐗𝐘-𝐌𝐎𝐃𝐄 🔥🥵`,
sourceUrl: nna, 
mediaType: 1,
showAdAttribution: true,
thumbnailUrl: "https://iili.io/2FHbh1j.jpg",
}}}, { quoted: m })
}
handler.help = ["menu18", "hornymenu"]
handler.tags = ["main"];
handler.command = /^(hornymenu|menu18|menucaliente)$/i;
handler.register = true
handler.exp = 70;
export default handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
function clockString(ms) {
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
