'use strict';

// Configuring the Articles module
angular.module('trackers').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Trackers', 'trackers', 'dropdown', '/trackers(/create)?');
		Menus.addSubMenuItem('topbar', 'trackers', 'View Trackers', 'trackers');
		Menus.addSubMenuItem('topbar', 'trackers', 'Create Tracker', 'trackers/create');
	}
]);