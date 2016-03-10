console.log("hello");
console.log(4+4);

$("#click-target").click(clickHandler);

function clickHandler() {
	console.log("p got clicked!");
	alert("it's me! the handler!");
}