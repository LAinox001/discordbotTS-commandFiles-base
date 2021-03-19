import { CommandNotFound, Discord, CommandMessage, On, ArgsOf, Client } from "@typeit/discord";
import * as Path from "path";

@Discord("!", {
    import: [
        Path.join(__dirname, "..", "commands", "*.ts")
    ]
})
export class Main {
    private static _client: Client;

    static get Client(): Client {
        return this._client;
    }

    static start(): void {
        this._client = new Client();

        this._client.login(
            "BOT_TOKEN",
            `${__dirname}/*.ts`,
            `${__dirname}/*.js`,
        );
    }
}

Main.start();
