var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
var checkInput = function() {
	$('.form-control').change(function() {
		$(this).parent().addClass("has-success");

	});
	$('select').click(function() {
		$(this).parent().addClass("has-success");

	});
	$('.ip').change(function() {
		var a = $(this).val();
		if (reg.test(a) == false) {
			$(this).parent().removeClass("has-success");
			$(this).parent().addClass("has-error");
		} else {
			$(this).parent().removeClass("has-error");
			$(this).parent().addClass("has-success");
		}

	});
}
