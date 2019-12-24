var c = 0;
var t;
var box;
var x = 1;

function spam() {
	if (c != 1) {
		alert("Spam! Bwahahahaha");
		t=setTimeout("spam()", 2000);
	}
}

function hello() {
	var name = prompt("Please enter your name","");
	if (name != null && name != "") {
		alert("Hello " + name + "! I am going to spam you with virus's.");
		spam();
		setTimeout("show()", 10000);
	} else {
		alert("Please enter a valid name.");
		hello();
	}
}

function show() {
	show = document.getElementById("show");
	show.style.display = "block";
}

function stop() {
	c = 1;
}

function runaway() {
	box = document.getElementById("box");
	box.style.marginLeft = 50 + Math.floor(Math.random() * 400) + "px";
	box.style.marginTop = 50 + Math.floor(Math.random() * 400) + "px";
	x++;
}

function explain() {
	lol = document.getElementById("explain");
	lol.style.display = "block";
}