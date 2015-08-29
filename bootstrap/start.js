/**
 * RequireJS Configuration
 */
 var base = (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1) ? '' : '/';

requirejs.config({
    baseUrl: base,
    paths: {
        vendor:     'vendor',
        config:     'engine/config',
    	jquery: 	'vendor/jquery/jquery',
        crafty:     'vendor/crafty/crafty',

        scene:      'game/scenes',
        core:       'game/core'
    }
});

/**
 * Load in our initiation file, and run the start command.
 */
require(['bootstrap/game'], function(Game) {
	Game.launch();
});
