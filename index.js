const config = require('config');

const Discord = require("discord-user-bots");
const client = new Discord.Client(config.get('token'));

const messages = config.get('messages')

client.on.ready = function () {
    console.log("Client online!");

    for (const message of messages) {
        setTimeout(async (message) => {
            for (const channel of message.channels) {
                console.log(channel)
                const sended = await client.send(channel, {
                    content: message.text,
                    // attachments: []
                    attachments: message.attachments
                })
                console.log(JSON.stringify(sended))
            }
        }, message.period * 1000, message)
    }
};

// client.on.message_create = function (message) {
//     console.log(message);
// };