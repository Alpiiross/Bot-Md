let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI Dark* ´ˎ˗
│ ✎ _Nama_ : Dark
│ ✎ _Sekolah_ : SMA 1 BANTARBOLANG
│ ✎ _Umur_ : 17
│ ✎ _Asal_ : Jatim
│ ✎ _Status_ : Pelajar SMA
│ ✎ _WhatsApp_ :
│    wa.me/62858505394047
╰──────────────
`.trim(), m)
}

handler.help = ['info dark']
handler.tags = ['main', 'utama']
handler.command = /^(infoalpi)$/i

handler.exp = 150

module.exports = handler
