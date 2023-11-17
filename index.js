const TelegramBot = require("node-telegram-bot-api");

// Здесь необходимо вставить токен вашего бота
const token = "6943426606:AAHXAa-HzZOZBGZzn_6WYoqm--lElZOfRSw";

const bot = new TelegramBot(token, { polling: true });

// Код перед началом работы бота
// bot.on("beforeLaunch", () => {
//   // console.log("Бот готов к запуску!");

//   bot.sendMessage(
//     msg.chat.id,
//     `\n<b>Что может бот?</b>\n<i>🎲 Создать розыгрыш и определить победителей случайным образом.</i>\n<i>🔢 Найти до 100 рандомных чисел в диапазоне от 0 до 9999, воспользовавшись генератором случайных чисел.\n👤 Админ: @mib_support\n`,
//     {
//       parse_mode: "HTML",
//     }
//   );
// });

// Начало работы бота
bot.on("text", async (msg) => {
  try {
    if (msg.text == "/start") {
      await bot.sendMessage(msg.chat.id, `Вы запустили бота!`);
    } else {
      await bot.sendMessage(msg.chat.id, msg.text);
    }
  } catch (error) {
    console.log(error);
  }
});

bot.onText(/\/run_contest/, (msg) => {
  const chatId = msg.chat.id;

  // Здесь можно добавить код для проведения конкурса, например, выбрать случайного победителя из списка участников
  const participants = ["Участник 1", "Участник 2", "Участник 3", "Участник 4"];
  const winner = participants[Math.floor(Math.random() * participants.length)];

  bot.sendMessage(chatId, `Победитель: ${winner}`);
});
