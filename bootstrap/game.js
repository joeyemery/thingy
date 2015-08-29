define(['crafty', 'core/Controls'], function(Crafty, Controls) {

	return {
        engine: false,

		launch: function()
		{
            this.engine = Crafty.init(500, 350, document.getElementById('stage'));
            this.engine.background('#fff');

            Controls.make({
            	'something': 'something'
            });

            console.log(Controls);
		}
	}
});
