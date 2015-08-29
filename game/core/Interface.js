define(['jquery'], function($) {

	var Interface = {

		make: function(path)
		{
			var html = Interface.load(path);

			$('body').append(html);
		},

		load: function(path)
		{
			var html = null;

			$.ajax({
				type: 		'GET',
				async: 		false,
				url: 		'/game/interface/' + path + '.html',
				success: 	function(result) {
					html = result;
				}
			});

			return html;
		}

	}

	return Interface;

});