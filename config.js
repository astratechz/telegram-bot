const fs = require("fs-extra");
const path = require("path");

if (fs.existsSync(".env")) {
  require("dotenv").config({ path: path.join(__dirname, ".env") });
}

const config = {
  token: process.env.BOT_TOKEN || "", // Your bot token
  owner_id: process.env.OWNER_ID || "1088583201", // Your telegram chat id
  prefix: process.env.PREFIX || "/", // Your preferred prefix
  apiKey: process.env.API_KEY || "gifted", //Replace with your unlimited/paid apikey
  botName: process.env.BOT_NAME || "Astra-MD",
  timezone: process.env.TIMEZONE || "Africa/Nairobi",
  ownerName: process.env.OWNER_NAME || "astra3code",
  ownerUsername: process.env.OWNER_USERNAME || "astra3code",
  apiUrl: process.env.API_URL || "https://api.giftedtech.co.ke", // Can replce with yours
  artistName: process.env.ARTIST_NAME || "Powered by AstraTech",
  url: process.env.URL || "https://i.postimg.cc/YSCQKKfz/280861.jpg",
  sourceUrl: process.env.SOURCE_URL || "https://github.com/mauricegift/telegram-bot",

  greetNewMembers: {
    enabled: process.env.GREET_ENABLED !== "false",
    gifUrl: process.env.GIF_URL || "https://files.catbox.moe/pm9x7c.gif",
  },

  antiLink: {
    enabled: process.env.ANTILINK !== "false",
  },
};

const currentFile = require.resolve(__filename);
fs.watchFile(currentFile, () => {
  fs.unwatchFile(currentFile);
  console.log(`Updating ${path.basename(__filename)}`);
  delete require.cache[currentFile];
  require(currentFile);
});

module.exports = config;
