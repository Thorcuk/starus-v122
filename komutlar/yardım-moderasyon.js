const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#fff000")
.setTitle("Moderasyon Menüsü")
 .setTimestamp()  
.addField("s!otorol",   `**Otorol Sistemi.**`,)
.addField("s!reklam",   `**Sunucunda Reklam Yapamazlar.**`,)
.addField("s!küfür",    `**Sunucuda Küfür Edemezler.**`,)
.addField("s!ban",      `**Etiket Atıgın Kişi Banlanır**`,)
.addField("s!unban",    `**Id'sini Yazdıgın Kişinin Banı Açılır**`,)
.addField("s!sil",      `**Mesajlarınızı Siler.**`,)
.addField("s!kick",     `**Sunucudan Kicklersiniz.**`,)
.addField("s!sa-as",    `**Sa As Sistemini açarsınız**`,)
.addField("s!kurallar", `**Hazır Kurallar Atar**`,)
.addField("s!embed",    `**Embed Şekilde Yazarsın**`,)
.addField("s!oylama",   `**Oylama Yaparsınız.**`,)
.addField("s!rol-al",   `**Etiketleyerek Rol Alırsınız.**`,)
.addField("s!rol-ver",  `**Etiketleyerek Rol Verir.**`,)

.addField("<a:krmzelmas:764099211536760845> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu]() `, false)
.setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: true, 
   aliases: ["Moderasyon",],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}