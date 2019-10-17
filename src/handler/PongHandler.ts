import {MessageHandler} from "./MessageHandler";
import {Message} from "discord.js";

export class PongHandler implements MessageHandler {
    handle(message: Message): void {
        message.reply('pong!');
    }

    support(message: Message): boolean {
        return message.content.startsWith('!ping');
    }

}
