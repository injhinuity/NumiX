/* eslint linebreak-style: 0 */
const Command = require('../util/Command.js');
const Discord = require("discord.js");
const snek = require("snekfetch");
const client = require('nekos.life');
const neko = new client();


class nekoslap extends Command {
  constructor(client) {
    super(client, {
      name: 'slap',
      description: 'Shows the current guild icon.',
      usage: 'guildicon',
      aliases: ['gicon', 'sicon'],
      cooldown: 5,
      category: 'General'
    });
  }

  async run(message, mem,) {
    // console.log(await neko.getSFWHug());
let img = await neko.getSFWSlap();
if (!message.mentions.users.size) {
    let hugEmbed = new Discord.MessageEmbed()
    .setColor('36393e')
    .setFooter(`Hey you can't slap yourself.`)
    .setImage(img.url)
    message.channel.send(hugEmbed)
    } else {
        let hentaiEmbed = new Discord.MessageEmbed()
        .setColor('36393e')
        .setFooter(`${message.author.username} slapped ${message.mentions.members.first().user.username}`)
        .setImage(img.url)
        message.channel.send(hentaiEmbed);
    }
  }
}

module.exports = nekoslap;