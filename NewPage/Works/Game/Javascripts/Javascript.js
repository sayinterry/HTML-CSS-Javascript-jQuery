/* Game Development by Terry Cho.
Will take time and will be fun. Expect it. */

var name = prompt("Please enter your name here.", "");
var title = $("<div />").attr("id", "title");
var start = $("<div />").attr("id", "begin-button");

alert("Hello " + name + ", this game is still in progress.");

$("#game").append(title);
$("#game").append(start);

