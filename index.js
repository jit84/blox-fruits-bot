const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const prefix = "!";

client.once("ready", () => {
  console.log(`Bot aktif: ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.content.startsWith(prefix)) return;

  const args = message.content.slice(1).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") message.reply("🏓 Pong! Bot aktif.");

  if (command === "help") {
    message.reply("**🍈 BLOX FRUITS BOT**\n`!ping` - Cek bot\n`!stock` - Cek stok buah\n`!mirage` - Informasi Mirage\n`!update` - Informasi update");
  }

  if (command === "stock") message.reply("🍈 Fitur Fruit Stock sedang disiapkan.");
  if (command === "mirage") message.reply("🏝️ Fitur Mirage sedang disiapkan.");
  if (command === "update") message.reply("📢 Fitur update sedang disiapkan.");
});

client.login(process.env.DISCORD_TOKEN);