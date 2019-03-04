const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*");

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connected ( THXBOT )");
});

bot.login("Mzg5MDc1MDY3MjA1NzEzOTUw.DQ2SZg.IRh8E6KTcQPmZSvHi92Us9x0e4g");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("```Liste des commandes: \nAucune commande disponible. Contacter MhBurgerKing pour rajouter```");
        console.log("Help effectué !");
    }

    if (message.content === prefix + "thxbot"){
        message.channel.sendMessage("```Coucou```");
        console.log("thxbot effectué");
    }
    
    if (message.content === prefix + "fabriquant"){
        message.channel.sendMessage("*Ce bot a été crée par MhBurgerKing*");
        console.log("fabriquant effectué");
    }
    
    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("salut");
    }
    
    if (message.content === "Bonjour"){
        message.reply("Bien le bonjour. :)");
        console.log("bonjour");
    }
    
    if (message.content === "slt"){
        message.reply("Bien le bonjour. :)");
        console.log("slt");
    }
    
    if (message.content === "bjr"){
        message.reply("Bien le bonjour. :)");
        console.log("bjr");
    }
    
    if (message.content === "Hey"){
        message.reply("Bien le bonjour. :)");
        console.log("hey");
    }

});
