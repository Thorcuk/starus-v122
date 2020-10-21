const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#fff000")
.setTitle("Moderasyon 2 Menüsü")
 .setTimestamp()  
.addField("s!çekiliş",               `**Çekiliş Yaparsın.**`,)
.addField("s!slow-mode",             `**Yavaş Modu Açarsın.**`,)
.addField("s!sohbet-aç/kapat",       `**Herkese Yazmayı Açar Ve Kapatırsınız.**`,)
.addField("s!oto-tag-ayarla/kapat",  `**Sunucuya Gelenlere Otomatik Tag Verir.**`,)
.addField("s!isim-değiştir",         `**İstediğiniz Kullanıcının İsmini Değiştirirsiniz.**`,)

.addField("<a:krmzelmas:764099211536760845> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu]() `, false)
.setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: true, 
   aliases: ["Moderasyon2",],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon2',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}