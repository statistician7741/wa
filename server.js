const express = require('express')

const app = express()
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const server = require('http').createServer(app)

//modul morgan utk debug log ke console
var logger = require('morgan');
app.use(logger('dev'));

app.use(cookieParser("ID==&&%^&A&SHBJSAsjhbJGhUGkbKiUvii^%^#$%^&98G8UIugg=="));
app.use(bodyParser.urlencoded({extended: true}));

//modul session utk tracking visitor
const session = require('express-session')({
	resave: false,
	saveUninitialized: true,
	secret: "ID==&&%^&A&SHBJSAsjhbJGhUGkbKiUvii^%^#$%^&98G8UIugg=="
});
app.use(session);

const index = require('./routes/index.route')
app.use('/', index);

server.listen(process.env.PORT || 80, function(){
	console.log('Server listening on '+(process.env.PORT || 80));
});