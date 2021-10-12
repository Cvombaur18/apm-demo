const express = require('express');
const path = require('path');
const Rollbar = require('rollbar');
const rollbar = new Rollbar( {
    accessToken: 'ff619d95f0dc465fad521e1981fe9dac',
    captureUncaught: true,
    captureUnhandledRejections: true
})

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully')
})

const port = process.env.PORT || 4400

app.listen(port, () => 
console.log(`server is up and runnning on ${port}!`));

