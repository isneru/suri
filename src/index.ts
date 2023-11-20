import { Client, GatewayIntentBits } from "discord.js"
import "dotenv/config"

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})

client.login(process.env.DISCORD_TOKEN)
