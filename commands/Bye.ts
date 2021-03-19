import { Command, CommandMessage } from "@typeit/discord";

export abstract class Bye {
    @Command("bye")
    async bye(command: CommandMessage) {
        command.reply("Bye!");
    }
}
