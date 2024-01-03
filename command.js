const {REST, Routes} = require("discord.js")

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];

  const rest = new REST({ version: '10' }).setToken("MTE5MjAxNTY1NTUyNDkwNDk3MQ.Gws1jT.cEwE_OsWpDtwg7YXHyNtZM3ZcxLNqFufc0J-eY");
  (async()=>{
  try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("1192015655524904971"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }})();