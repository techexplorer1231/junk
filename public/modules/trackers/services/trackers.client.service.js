'use strict';

//Trackers service used to communicate Trackers REST endpoints
var app = angular.module('trackers');
app.factory('Trackers', ['$resource',
	function($resource) {
		return $resource('trackers/:trackerId', { trackerId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
