$(document).ready(function(){

	// Discount rate

	$("#rate").val($("#room-rate").val());
	$('#discount-rates').change(function(){
		var roomRate = parseInt($('#room-rate').val());
		var discount = roomRate * (parseInt(this.value) / 100);
		var discountRate = roomRate - discount;
		$("#rate").val(discountRate);
	})

	// Calendar days calculator

})
