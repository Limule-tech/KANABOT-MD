//By @NeKosmic || https://github.com/NeKosmic/ //

import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
if (m.isBaileys && m.fromMe) return !0
if (!m.isGroup) return !1
m.isBot = m.id.startsWith('BAE5') && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || m.id.startsWith('B24E') && m.id.length === 20;
if (m.isBot) return
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
let delet = m.key.participant
let bang = m.key.id
let name = await conn.getName(m.sender)
let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": 'ᴋᴀɴᴀʙᴏᴛ-ᴍᴅ', 'jpegThumbnail': null}}}
if (chat.antiTraba && m.text.length > 5000) { //Cantidad máxima de caracteres aceptados en un mensaje//
if (isAdmin) return conn.sendMessage(m.chat, { text: `⚠️The administrator @${m.sender.split("@")[0]} has just sent a text containing too many -.- characters!`, mentions: [m.sender] }, { quoted: fakemek })
conn.sendButton(m.chat, `*[ ! ] A message containing many [ ! ] characters was detected*\n`,  `${isBotAdmin ? '' : 'I'm not an administrator, I can't do anything :/'}`, null, [['ᴅᴇsᴀᴄᴛɪᴠᴀᴛᴇ ᴀɴᴛɪᴛʀᴀʙᴀ', `/disable antitraba`]], null, null, m)
//await conn.sendButton(m.chat, `*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]*\n`, `${isBotAdmin ? '' : 'No soy administrador, no puedo hacer nada :/'}`, author, ['[  ]', usedPrefix+'apagar antitraba'], fakemek )
if (isBotAdmin) {
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
setTimeout(() => { 
conn.sendMessage(m.chat, { text: `Mark chat as read ✓\n${"\n".repeat(400)}\n• The number: wa.me/${m.sender.split ("@")[0]}\n• Alias: ${name}\n‼️You just sent a text that contains many characters that can cause device crashes`, mentions: [m.sender] }, { quoted: fakemek })
}, 0)
setTimeout(() => { 
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}, 1000)} else if (!bot.restrict) return m.reply(`This command is disabled by my boss`)
}
return !0
} 
