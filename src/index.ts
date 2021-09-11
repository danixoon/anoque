import dotenv from "dotenv";
import { VK } from "vk-io";

dotenv.config();

const vk = new VK({ token: process.env.API_TOKEN ?? "" });

const init = async () => {
  vk.updates.on("message_new", (context) => {
    if (context.isOutbox) return;

    console.log("message: " + context.text);
    context.reply("oh hi mark");
  });

  await vk.updates.startPolling();

  console.log("started.");
};

init();
