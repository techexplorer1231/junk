'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var trackers = require('../../app/controllers/trackers');

	// Trackers Routes
	app.route('/trackers')
		.get(trackers.list)
		.post(users.requiresLogin, trackers.create);

	app.route('/trackers/:trackerId')
		.get(trackers.read)
		.put(users.requiresLogin, trackers.hasAuthorization, trackers.update)
		.delete(users.requiresLogin, trackers.hasAuthorization, trackers.delete);

	// Finish by binding the Tracker middleware
	app.param('trackerId', trackers.trackerByID);
};