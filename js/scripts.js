var numberString = "";

$(document).ready(function() {
	$("#_0").click(function() {
		numberString += "0";
		$("#result").html(numberString);
	});
	$("#_1").click(function() {
		numberString += "1";
		$("#result").html(numberString);
	});
	$("#_2").click(function() {
		numberString += "2";
		$("#result").html(numberString);
	});
	$("#_3").click(function() {
		numberString += "3";
		$("#result").html(numberString);
	});
	$("#_4").click(function() {
		numberString += "4";
		$("#result").html(numberString);
	});
	$("#_5").click(function() {
		numberString += "5";
		$("#result").html(numberString);
	});
	$("#_6").click(function() {
		numberString += "6";
		$("#result").html(numberString);
	});
	$("#_7").click(function() {
		numberString += "7";
	});
	$("#_8").click(function() {
		numberString += "8";
		$("#result").html(numberString);
	});
	$("#_9").click(function() {
		numberString += "9";
		$("#result").html(numberString);
	});

	$("#equal").click(function() {
		$("#result").html(numberString);
	});

	$("#AC").click(function() {
		numberString = "";

		$("#result").html("0");
	});


});


var add = function(n1,n2) {
	return n1 + n2;
}

var subtract = function(n1,n2) {
	return n1 - n2;
}

var multiply = function(number1, number2) {
	return number1 * number2;
}

var divide = function(n1,n2) {
	return n1 / n2;
}

var remainder = function(n1,n2) {
	return n1 % n2;
}
