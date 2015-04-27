var generateForm = function(data) {
	$("#div2").html("");
	$.each(data, function(key1, val1) {
		$('<h1/>', {
			html : key1
		}).appendTo('#div2');
		var items = [];
		$.each(val1, function(key2, val2) {
			if (val2.type == "text") {
				items.push("<td style='padding:15px'>" + '<label class="control-label" for="'+key2+'">'+val2.text+'</label>'
						+ '<br/><input class="form-control" type="' + val2.type+'" id="'+key2
						+ '"></td>');

			}
			if (val2.type == "ip") {
				items.push("<td style='padding:15px'>" + '<label class="control-label" for="'+key2+'">'+val2.text+'</label>'
						+ '<br/><input class="form-control ip" type="text" id="'+key2
						+ '"></td>')
			} else if (val2.type == "select") {
				var select = "<td style='padding:15px'>" + '<label class="control-label" for="'+key2+'">'+val2.text+'</label>'
						+ '<br/><select class="form-control" id="'+key2+'">';
				$.each(val2.option, function(value, text) {
					select = select + "<option value=" + value + ">" + text
							+ "</option>";
				});
				select = select + "</select></td>";
				items.push(select);
			}
		});
		items.join("");
		$('<form/>', {
			html : items
		}).appendTo('#div2');

	});
}