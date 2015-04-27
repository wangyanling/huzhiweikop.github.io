// for (x in form) {
// if (form[x].textPosition == "before") {
// distination.innerHTML = (distination.innerHTML + form[x].text
// + "<input " + "type='" + form[x].type + "'>" + "<br/>");
// } else {
// distination.innerHTML = (distination.innerHTML + "<input " + "type='"
// + form[x].type + "'>" + form[x].text + "<br/>");
// }
// }
$(function() {
	$("#li1").click(function() {
		$.getJSON('json/hostnames.json', function(data){
			generateForm(data);
            checkInput();
		});
	});
	$("#li2").click(function() {
		$.getJSON('json/networking.json', function(data){
			generateForm(data);
            checkInput();
		});
	});	
	
});
