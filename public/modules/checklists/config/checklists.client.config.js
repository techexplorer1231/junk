'use strict';

// Configuring the Articles module
angular.module('checklists').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Checklists', 'checklists', 'dropdown', '/checklists(/create)?');
		Menus.addSubMenuItem('topbar', 'checklists', 'View Checklists', 'checklists');
		Menus.addSubMenuItem('topbar', 'checklists', 'Create Checklist', 'checklists/create');
	}
]);