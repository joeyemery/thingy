define(['core/Interface', 'vendor/hammer/touchemulator'], function(Interface, TouchEmulator) {

	var Controls = {
		options: false,
		current: false,

		make: function(options)
		{
			this.options = options;

			// Load the HTML into the DOM.
			this.overlayControls();

			// Bind the events.
			this.bindEvents();
		},

		overlayControls: function()
		{
			var interface = Interface.make('generic/controls');
		},

		bindEvents: function()
		{
			TouchEmulator();

			$('body').on('touchmove', '#controls li', Controls.touched);
			$('body').on('touchstart', '#controls li', Controls.touchStart);
			$('body').on('touchend', '#controls li', Controls.touchEnd);
		},

		touched: function(e)
		{
			e.preventDefault();
			
			var touch = e.originalEvent.touches[0];
  			Controls.calculateCurrent(touch.clientX, touch.clientY);
		},

		touchStart: function(e)
		{
			e.preventDefault();

			$(this).addClass('active');
		},

		touchEnd: function(e)
		{
			e.preventDefault();

			$('#controls li').removeClass('active');
		},

		calculateCurrent: function(x, y)
		{
			$('#controls li').removeClass('active');

			$('#controls li').each(function() {
		      	if(!(
		          	x <= $(this).offset().left || x >= $(this).offset().left + $(this).outerWidth() ||
		          	y <= $(this).offset().top  || y >= $(this).offset().top + $(this).outerHeight()
		      	)) {
		        	$('#controls li').removeClass('active');
		        	$(this).addClass('active');
		      	}
		    });
		}

	}

	return Controls;

});