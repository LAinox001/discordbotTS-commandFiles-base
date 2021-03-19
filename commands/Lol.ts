import { Command, CommandMessage } from "@typeit/discord";

export abstract class Lol {
    @Command("Lol")
    async lol(command: CommandMessage) {
        command.reply("lol");
    }
}
