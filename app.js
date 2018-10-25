var Express = require('express')
var BodyParser = require('body-parser')
var Multer = require('multer')

var app = Express()
var upload = Multer()

var players = require('./playerHandle')

var path= '/mnt/home/jogordo/Chess/';

app.use(Express.static(path+"static/"));

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended : true}));

app.get('/', function(req,res) {
	res.sendFile(path+'index.html');
});

app.post('/match', function(req,res) {
	console.log("Recieved!");
	console.log(req.body);
	recordMatch(req.body.winner,req.body.loser);
	res.status(201).send()
});

function recordMatch(winner,loser) {
	players.addMatch(winner,loser);	
}

app.listen(8000, () => console.log("Running on port 8000!"));
