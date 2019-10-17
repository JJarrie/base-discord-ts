import {Message} from 'discord.js';

export interface MessageHandler {
    support(message: Message): boolean;
    handle(message: Message): void;
}
