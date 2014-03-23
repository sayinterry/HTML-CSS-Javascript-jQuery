var my_div;
var newDiv;
var img;
var i;

function addElement()
{
	newDiv = document.createElement("div");
	i = Math.floor(Math.random()*6)
	if (i == 1) {
		newContent = document.createTextNode("Trollololololol");
	} else if (i == 2) {
		newContent = document.createTextNode("WUZZZUPPPPPPPP!!!!");
	} else if (i == 3) {
		newContent = document.createTextNode("Mr. Chun is AWESOME. Same with AOIT.");
	} else if (i == 4) {
		newContent = document.createTextNode("Javascript is fun C:");
	} else if (i == 5) {
		newContent = document.createTextNode("The Math.Random function is going to be my best friend.");
	} else if (i == 6) {
		newContent = document.createTextNode("I need to find out how to use the switch function...");
	} else {
		newContent = document.createTextNode("I broke ): ");
	}
	newDiv.appendChild(newContent);
	my_div = document.getElementById("starter");
	document.getElementById("content").insertBefore(newDiv, my_div);
}

function addImage()
{
	img = document.createElement("img");
	img.src = "http://1.bp.blogspot.com/-Aow9gzWl8QY/Tc8kPbm-yXI/AAAAAAAAAQ0/VrccEO8a44E/s1600/BlahBlah.png";
	img.setAttribute("height", "200px");
	newImg = document.getElementById("starter");
	document.getElementById("content").insertBefore(img, newImg);
}