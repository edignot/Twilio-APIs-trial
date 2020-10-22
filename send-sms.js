require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const fromNumber = process.env.FROM_NUMBER
const toNumber = process.env.TO_NUMBER

const client = require('twilio')(accountSid, authToken)

client.messages
  .create({
    to: toNumber,
    from: fromNumber,
    body: 'Hello!!!',
  })
  .then((message) => console.log(message))
