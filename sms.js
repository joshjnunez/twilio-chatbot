require('dotenv').config()


const accountSid = 'AC1d15f792cbee3ea001f72cf1f8d998f4';
const authToken = 'fde74b9b7f194a440d92bd479a9e92ce';

const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: '+15045121694',
    from: '+19084598121',
    body: 'Hello world!',
}).then((message)=> console.log(message.sid))