const { Client, GatewayIntentBits } = require("discord.js")
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.on("messageCreate",(message)=>{
    if(message.author.bot) return;
    message.reply({
        content: "Hi from the bot",
    });
});

client.on("interactionCreate", interaction=>{
    console.log(interaction);
    interaction.reply("Pong!!");
})

client.login("MTE5MjAxNTY1NTUyNDkwNDk3MQ.Gws1jT.cEwE_OsWpDtwg7YXHyNtZM3ZcxLNqFufc0J-eY");