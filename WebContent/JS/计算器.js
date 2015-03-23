/**
 * 
 */
document.getElementById("button1").addEventListener("click", caculate);
function caculate() {
	var x = document.getElementById("first").value;
	var z = document.getElementById("last").value;
	var y = document.getElementsByClassName("radio").length;
	var w = document.getElementsByClassName("radio")
	var operate
	for (i = 0; i < y; i++) {
		if (w[i].checked == true) {
			operate = w[i].value
		}
	}
	var result
	if (operate == 1)
		result = Number(x) + Number(z)
	if (operate == 2)
		result = x - z
	if (operate == 3)
		result = x * z
	if (operate == 4)
		result = x / z
	document.getElementById("result").innerHTML=result


}
