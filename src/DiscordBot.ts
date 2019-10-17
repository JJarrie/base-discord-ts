import {Client, ClientOptions, Message} from 'discord.js';
import {MessageHandlerAware} from "./MessageHandlerAware";

export class DiscordBot {
    private readonly token: string;
    private client: Client;
    private messageHandlerAware: MessageHandlerAware;

    constructor(token: string, messageHandlerAware: MessageHandlerAware, options?: ClientOptions) {
        this.token = token;
        this.client = new Client(options);
        this.messageHandlerAware = messageHandlerAware;
    }

    public listen(): Promise<string> {
        this.client.on('message', (message: Message) => {
            console.log(`Message received: ${message.content}`);
            this.messageHandlerAware.handle(message);
        });

        return this.client.login(this.token);
    }
}
