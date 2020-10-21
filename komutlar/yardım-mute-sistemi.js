const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#fff000")
.setTitle("Starus Ses & Chat Mute'")
 .setTimestamp()  

.addField("s!mute <@üyeEtiket> 1m",            `**Yazılı kanallarda mutelemek için kullanılır.**`)
.addField("s!unmute <@üyeEtiket>",             `**Yazılı kanaldan mute kaldırır.**`)
.addField("s!mute-yetki-rol <@rolEtiket>",     `**Muteliyecek yetkili rolünü etiketleyerek aktif yaparsınız.**`)
.addField("s!mute-log <#kanalEtiket>",         `**Mute bilgilerinin yazılacağı kanalı etiketleyiniz.**`)
.addField("**Ayarları Sıfırlama Komutları**",  `Ayarları Sıfırlama Komutları`)
.addField("s!mute-yetkili-sil",                `**Ayarlı olan mute yetki rolünü sıfırlar.**`)
.addField("s!mute-log-kapat",                  `**Ayarlı olan mute kanalını sıfırlar.**`)


.addField("<a:krmzelmas:764099211536760845> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu]() `, false)
.setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: true, 
   aliases: ["mute-sistemi",],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'mute-sistem',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}