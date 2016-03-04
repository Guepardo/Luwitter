var express    = require("express");
var path       = require("path");
var http       = require("http");
var session    = require("express-session");
var bodyParser = require("body-parser");
var serverSocket = require("./modules/serverSocket"); 
var app = express();

require('./mongo/db')();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: 'apenasumtestemuitodoido', resave: true, saveUninitialized: true })); //Seting the name of handle cookie. 

app.use('/', require("./routes/main-router"));
app.use('/', require("./routes/people-router"));
app.use('/', require("./routes/login-router"));
app.use('/', require("./routes/service-router")); 

app.use(express.static(path.join(__dirname, 'public' )));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


var port = process.env.PORT || 3000;

app.set('port', port);
var server = http.createServer(app);
server.listen(port);
serverSocket.init(server); 
