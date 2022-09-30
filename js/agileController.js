$(document).ready(function() {
	// Initializing variables

	var roomRate = parseInt($("#room-rate").val());
	var balance = $("#balance");

	// Discount rate

	$("#rate").val($("#room-rate").val());
	$("#discount-rates").change(function() {
		var discount = roomRate * (parseInt(this.value) / 100);
		var discountRate = roomRate - discount;
		$("#rate").val(discountRate);
	});

	// Calendar days calculator


	//	Balance calcultor

	$("#deposit").change(function() {
		var discountedRate = $("#rate").val();
		var deposit = this.value;
		balance.html(discountedRate - deposit);
	});
});
