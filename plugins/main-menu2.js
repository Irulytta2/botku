const fs = require('fs')
const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let tag = `https://wa.me/6285925111603`
  let mentionedJid = [m.sender]
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let suka = `Saya Rull`
global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': suka, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${suka},;;;\nFN:${suka},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

let str = `┏┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╼
┢╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╼
┣╌ ⟪ *Yᴏᴜʀ Iɴғᴏ* ⟫
┃▷ *Nᴀᴍᴇ* : ${conn.getName(m.sender)}
┃▷ *Sᴛᴀᴛᴜs* :@${m.sender.split`@`[0]}
╰╴╴╴╳`
let isi =`▎▍▌▋▊▍▋▍▌▌▌▋▍▎▎▍▍▎▎▎▎▍
𝑩𝒐𝒕 𝑼𝒑𝒅𝒂𝒕𝒆 𝑭𝒊𝒕𝒖𝒓
▷𝑹𝑷𝑮 𝑮𝒂𝒎𝒆𝒔
▷𝑷𝒆𝒏𝒂𝒎𝒃𝒂𝒉𝒂𝒏 𝑮𝒂𝒎𝒆𝒔
▷𝑺𝒐𝒖𝒏𝒅`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.send3ButtonImg(m.chat, `https://i.postimg.cc/MZ0SzKjV/20221203-213329.jpg`, str, isi, 'Menu', '.command', 'Owner', '.owner', '\nAku Pedo Ygy', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/pkphn4',
    mediaType: 2, 
    description: urlnya,
    title: "𝙅𝙤𝙞𝙣 𝙎𝙞𝙣𝙞 𝘾𝙪𝙮𝙮",
    body: wm,
    thumbnail: thumb,
    sourceUrl: 'https://chat.whatsapp.com/HlasRqVqqt5I3Ia2UuFDQY'
     }}
  })
          }
handler.help = ['menu']
handler.tags = ['main']
handler.command =  /^(menu)$/i

handler.register = false

module.exports = handler
