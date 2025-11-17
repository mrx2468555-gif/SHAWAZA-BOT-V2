let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/3782975aafc54e78e9d0c.mp4'
  let { name } = global.db.data.users[who]
  m.react('🔕')
let str = `                  *┃━━━━⬣𝗯𝗼𝘁-𝗮𝗯𝗱𝘂𝗹𝗿𝗮𝗵𝗺𝗮𝗻⬣━━━━┃*
*【..≼قــســم الجروبات≽..】*
                   ⋄━───═◞⬪🧸⬪◟═───━⋄
*『 🧸 』 ⇇╎جروبي⌉*
*『 🧸 』 ⇇╎معلوم_الجروب⌉*
*『 🧸 』 ⇇╎منشن⌉*
*『 🧸 』 ⇇╎مخفي⌉*
*『 🧸 』 ⇇╎طرد⌉*
*『 🧸 』 ⇇╎اضافه⌉*
*『 🧸 』 ⇇╎ترقيه⌉*
*『 🧸 』 ⇇╎خفض⌉*
*『 🧸 』 ⇇╎حذف⌉*
*『 🧸 』 ⇇╎جروب⌉*
*『 🧸 』 ⇇╎تغير_المغادره⌉*
*『 🧸 』 ⇇╎تغير_الدخول⌉*
*『 🧸 』 ⇇╎تغييرالصورة⌉*
*『 🧸 』 ⇇╎تغيير_الوصف⌉*
*『 🧸 』 ⇇╎تغيير_الاسم⌉*
*『 🧸 』 ⇇╎لينك⌉*
*『 🧸 』 ⇇╎رستر⌉*
*『 🧸 』 ⇇╎المشرفين⌉*
*『 🧸 』 ⇇╎انذار⌉*
*『 🧸 』 ⇇╎الغاء_الانذار⌉*
*『 🧸 』 ⇇╎الانذارات⌉*
                    *┃━━━━⬣𝗯𝗼𝘁-𝗮𝗯𝗱𝘂𝗹𝗿𝗮𝗵𝗺𝗮𝗻⬣━━━━┃*
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['الجروب']

export default handler
