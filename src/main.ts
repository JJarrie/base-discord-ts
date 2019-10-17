import {config} from 'dotenv';
import {DiscordBot} from './DiscordBot';
import {MessageHandlerAware} from "./MessageHandlerAware";
import {PongHandler} from "./handler/PongHandler";

config();

if (process.env.DISCORD_BOT_TOKEN === undefined) {
    throw new Error('No token provided');
}

const messageHandlerAware = new MessageHandlerAware([
    new PongHandler(),
]);

const bot = new DiscordBot(process.env.DISCORD_BOT_TOKEN, messageHandlerAware);

bot.listen().then(() => console.log('Logged.'))
    .catch((error) => console.log(`Error during logging: ${error}`));
