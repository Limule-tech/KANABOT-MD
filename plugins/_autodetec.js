let WAMessageStubType = (await import(global.baileys)).default
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';
export async function before(m, { conn, participants, groupMetadata}) {
if (!m.messageStubType || !m.isGroup) return
let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://telegra.ph/file/2a1d71ab744b55b28f1ae.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
let usuario = `@${m.sender.split`@`[0]}` 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let users = participants.map(u => conn.decodeJid(u.id))
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')

/*if (chat.detect && m.messageStubType == 2) {
const chatId = m.isGroup ? m.chat : m.sender;
const uniqid = chatId.split('@')[0];
const sessionPath = './BotSession/';
const files = await fs.readdir(sessionPath);
let filesDeleted = 0;
for (const file of files) {
if (file.includes(uniqid)) {
await fs.unlink(path.join(sessionPath, file));
filesDeleted++;
console.log(`⚠️ Eliminacion session (PreKey) que provocan el undefined el chat`)}}*/

if (chat.detect && m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `${usuario} \`𝙔𝙤𝙪 𝙝𝙖𝙫𝙚 𝙘𝙝𝙖𝙣𝙜𝙚𝙙 𝙩𝙝𝙚 𝙣𝙖𝙢𝙚 𝙤𝙛 𝙩𝙝𝙚 𝙜𝙧𝙤𝙪𝙥 𝙩𝙤:\`\n\n> *${m.messageStubParameters[0]}*`, mentions: [m.sender], mentions: [...groupAdmins.map(v => v.id)] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
} else if (chat.detect && m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `${usuario} \`𝙔𝙤𝙪 𝙝𝙖𝙫𝙚 𝙘𝙝𝙖𝙣𝙜𝙚𝙙 𝙩𝙝𝙚 𝙜𝙧𝙤𝙪𝙥 𝙥𝙝𝙤𝙩𝙤\``, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
} else if (chat.detect && m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `${usuario} 𝙉𝙚𝙬 𝙜𝙧𝙤𝙪𝙥 𝙙𝙚𝙨𝙘𝙧𝙞𝙥𝙩𝙞𝙤𝙣 𝙞𝙨:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (chat.detect && m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `🔒 𝙉𝙤𝙬 *${m.messageStubParameters[0] == 'on' ? '𝙊𝙣𝙡𝙮 𝘼𝙙𝙢𝙞𝙣𝙨' : '𝘼𝙡𝙡'}* 𝘾𝙖𝙣 𝙀𝙙𝙞𝙩 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (chat.detect && m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `𝙏𝙝𝙚 𝙂𝙧𝙤𝙪𝙥 *${m.messageStubParameters[0] == 'on' ? '𝙄𝙨 𝘾𝙡𝙤𝙨𝙞𝙣𝙜 🔒' : '𝙄𝙨 𝙊𝙥𝙚𝙣 🔓'}*\n ${m.messageStubParameters[0] == 'on' ? '𝙊𝙣𝙡𝙮 𝘼𝙙𝙢𝙞𝙣𝙨 𝘾𝙖𝙣 𝙒𝙧𝙞𝙩𝙚' : '𝙉𝙤𝙬 𝙀𝙫𝙚𝙧𝙮𝙊𝙣𝙚 𝘾𝙖𝙣 𝙒𝙧𝙞𝙩𝙚'} 𝙄𝙣 𝙏𝙝𝙞𝙨 𝙂𝙧𝙤𝙪𝙥`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (chat.detect && m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} 𝙄𝙨 𝙉𝙤𝙬 𝘼𝙙𝙢𝙞𝙣 𝙊𝙛 𝙏𝙝𝙞𝙨 𝙂𝙧𝙤𝙪𝙥\n\n😼🫵𝘼𝙘𝙩𝙞𝙤𝙣 𝙋𝙚𝙧𝙛𝙤𝙧𝙢𝙚𝙙 𝘽𝙮: ${usuario}`, mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (chat.detect && m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} 𝙄𝙨 𝙉𝙤𝙩 𝙈𝙤𝙧𝙚 𝘼𝙙𝙢𝙞𝙣 𝙄𝙣 𝙏𝙝𝙞𝙨 𝙂𝙧𝙤𝙪𝙥\n\n😼🫵𝘼𝙘𝙩𝙞𝙤𝙣 𝙋𝙚𝙧𝙛𝙤𝙧𝙢𝙚𝙙 𝘽𝙮: ${usuario}`, mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (chat.detect && m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `${usuario} 𝙄 𝘾𝙝𝙖𝙣𝙜𝙚𝙙 𝙏𝙝𝙚 𝘿𝙪𝙧𝙖𝙩𝙞𝙤𝙣 𝙊𝙛 𝙏𝙝𝙚 𝙏𝙚𝙢𝙥𝙤𝙧𝙖𝙧𝙮 𝙈𝙚𝙨𝙨𝙖𝙜𝙚 𝙏𝙤 *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (chat.detect && m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `${usuario} *𝘿𝙞𝙨𝙖𝙗𝙡𝙚* 𝙏𝙚𝙢𝙥𝙤𝙧𝙖𝙧𝙮 𝙈𝙚𝙨𝙨𝙖𝙜𝙚.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}
