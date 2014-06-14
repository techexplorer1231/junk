'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Tracker Schema
 */
var TrackerSchema = new Schema({
	details: {
		type: String,
		default: '',
		required: 'Please fill Tracker details',
		trim: true
	},
	value: {
		type: [],
		required: 'Please fill Tracker values'
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Tracker', TrackerSchema);