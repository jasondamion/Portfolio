const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').load();
const nodemailer = require('nodemailer');
let smtpTransport = require('nodemailer-smtp-transport');
const app = express();

// SERVE STATIC FILES
app.use('/public', express.static(path.join(__dirname, 'public')));

// DISPLAY PAGE
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// LISTEN
app.listen(process.env.PORT || 3000, () => console.log('Server started...'));