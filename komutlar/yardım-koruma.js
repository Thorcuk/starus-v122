const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#fff000")
.setTitle("Koruma Menüsü")
 .setTimestamp()
.addField("s!everyone-here-engel",    `**Sunucuzda Ever Here Atamazlar.**`,)
.addField("s!mod-log-ayarla/sıfırla", `**sunucu Kayıtlarının Atılacağı Kanalı Belirler.**`,)
.addField("s!kanal-koruma",           `**Kanal Koruma Sistemi.**`,)
.addField("s!reklam-kick",            `**Reklam Yapanı Kickler.**`,)


.addField("<a:krmzelmas:764099211536760845> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu]() `, false)
.setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["koruma",],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'koruma',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}