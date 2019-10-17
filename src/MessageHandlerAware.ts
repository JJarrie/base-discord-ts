import {Message} from "discord.js";
import {MessageHandler} from "./handler/MessageHandler";

export class MessageHandlerAware {
    private readonly handlers: MessageHandler[];

    constructor(handlers: MessageHandler[]) {
        this.handlers = handlers;
    }

    public handle(message: Message): void {
        this.handlers.forEach((handler: MessageHandler): void => {
            if (handler.support(message)) {
                handler.handle(message);
            }
        });
    }
}
