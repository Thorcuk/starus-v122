const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#fff000")
.setTitle("Kullanıcı Menüsü")
 .setTimestamp()  
.addField("s!say",          `**Sunucundaki Üye Sayısını Sayar.**`,)
.addField("s!sunucu-bilgi", `**Suncunun Bilgilerini Gösterir.**`,)
.addField("s!ping",         `**Botun Gecikmesini Gösterir.**`,)
.addField("s!profil",       `**Profilini Gösterir.**`,)
.addField("s!id",           `**İstediğiniz Kişinin İd'sini Görürsünüz.**`,)
.addField("s!davet",        `**Botun Davet Linki.**`,)
.addField("s!avatar",       `**Etiket Atığınız Kişinin Avatarını Gösterir.**`,)
.addField("s!banlananlar",  `**Ban Yiyenleri Görürsünüz.**`,)
.addField("s!emojiler",     `**Sunucudaki Emojileri Gösterir.**`,)
.addField("s!rol-bilgi",    `**Etiketlediginiz Rol Hakkında Bilgi Verir.**`,)
.addField("s!roller",       `**Sunucudaki Rolleri Gösterir.**`,)
.addField("s!hata-bildir",  `**Botumuzun Hatasını Bildirirsiniz.**`,)
.addField("s!istek-bilgi",  `**Botumuza İstek Komut Önerirsiniz.**`)

.addField("<a:krmzelmas:764099211536760845> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu]() `, false)
.setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: true, 
   aliases: ["Kullanıcı",],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}