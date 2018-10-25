module.exports = {
	addMatch : addMatch
}

var fs = require('fs');

function addMatch(winner,loser) {
	var newdata = {}
	var fd = fs.openSync("players/"+winner+".json",'r+');
	fs.readFile("players/"+winner+".json",(err,sobj) => {
	var obj = JSON.parse(sobj);
	if(err){
		console.log(err);
		console.log(obj);
		fs.writeFileSync(winner+'.json',"{}");
		console.log("Writing file " + winner + ".json");
		addMatch(winner,loser);
	} else {
		console.log("Winner old data: " + JSON.stringify(obj));	
		newdata["games played"] = (obj["games played"] + 1) || 1;
		newdata[loser + " wins"] = (obj[loser + " wins"] + 1) || 1;
		console.log("New data: " + JSON.stringify(newdata));
	}
	fs.writeFileSync("players/"+winner+".json",JSON.stringify(newdata));
	fs.close(fd);});

	var newdata2 = {}
	var fd2 = fs.openSync("players/"+loser+".json",'r+');
	fs.readFile("players/"+loser+".json",(err,sobj) => {
	var obj = JSON.parse(sobj)
	if(err){
		console.log(err)
		console.log(obj);
		fs.writeFileSync(loser+'.json',"{}");
		console.log("Writing file " + loser + ".json");
		addMatch(winner,loser);
	} else {
		console.log("Loser old data: " + JSON.stringify(obj));
		newdata2["games played"] = (obj["games played"] + 1) || 1;
		newdata2[winner + " losses"] = (obj[winner + " losses"] + 1) || 1;
		console.log("New data: " + JSON.stringify(newdata2));
	}
	fs.writeFile("players/"+loser+".json",JSON.stringify(newdata2), function() {
	fs.close(fd2);
	console.log("Done");
	});});
}
