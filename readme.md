# Send and Receive Text Message with Twilio and Node

To send a text message:
- add environmental variables
- `node send-sms.js` 
```
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
```

To receive a text message response: 
- `node server.js`
- `ngrok http 1337`
- Add 'A MESSAGE COMES IN' webhook to Twilio account 
```
const http = require('http')
const express = require('express')
const MessagingResponse = require('twilio').twiml.MessagingResponse

const app = express()

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse()
  twiml.message('This is an automated response')
  res.writeHead(200, { 'Content-Type': 'text/xml' })
  res.end(twiml.toString())
})

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337')
})
```