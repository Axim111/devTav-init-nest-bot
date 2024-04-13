import TelegramBot from "node-telegram-bot-api"

import express from 'express'

const token = '7138409167:AAGCQ-0w101zQYtLYxsxlvdUtwiEYGgF_yI';

const webUrl = "https://gorgeous-dusk-a3880d.netlify.app/"
// const webAppUrl = "/"

//t.me/testo_ax_my_bot

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
const bot = new TelegramBot(token, { polling: true });


// bot.onText(/\/echo (.+)/, (msg, match) => {

//   const chatId = msg.chat.id;
//   const resp = match[1];

//   bot.sendMessage(chatId, resp);
// });
const commands = [
  {

    command: "menu",
    description: "меню"

  },
  {

    command: "start",
    description: "Запуск бота"

  },
  {

    command: "ref",
    description: "Получить реферальную ссылку"

  },
  {

    command: "help",
    description: "Раздел помощи"

  },

]

bot.setMyCommands(commands);
bot.on('message', async (msg) => {
  const text = msg.text
  const chatId = msg.chat.id
  console.log(msg)

  if (msg.text == '/menu') {

    await bot.sendMessage(msg.chat.id, `Меню бота`, {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Кнопка 1', web_app: { url: webUrl } }],
          [{ text: 'Кнопка 2', callback_data: 'data 2' }],
          [{ text: 'Кнопка 3', callback_data: 'text 3' }]
        ]
      }


    })

  }
  else if (msg.text == "1") {
    bot.sendMessage(msg.chat.id, `бан`)
  }
});