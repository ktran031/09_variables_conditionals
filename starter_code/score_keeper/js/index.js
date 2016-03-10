$(document).ready(documentReady);
function documentReady(){

	var total = 0;
	var response = "hello";

	$("#zero").click(zero);
	$("#add5").click(add5);
	$("#add10").click(add10);
	$("#sub1").click(sub1);

	function zero() {
		total = 0;
		$("#result").text(total);

	}

	function add5() {
		
		total = total + 5;	
		console.log(total);
		$("#result").text(total);
	}

	function add10() {
		total = total + 10;
		console.log(total);
		$("#result").text(total);
	}

	function sub1() {
		total = total - 1;
		console.log(total);
		$("#result").text(total);
	}
}