window.onload = () => console.log("Script loaded");

function submit() {
	console.log("Button clicked!");

	var form = new FormData(document.querySelector('form'));
	tosend = ""
	for (let e of form.entries()) {
		tosend += e[0];
		tosend += "=";
		tosend += e[1];
		tosend += "&";
	}
	/*
	var inp = document.getElementById("form");
	var winner = inp[0];
	var loser = inp[1];
	var tosend = {
		"winner" : winner,
		"loser" : loser
	}
	tosendstr = JSON.stringify(tosend);
	console.log(tosendstr);*/
	
	console.log("Sending: " + tosend);

	var request = new XMLHttpRequest();
	request.open("POST", "/match");
	request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	request.send(tosend);
}
