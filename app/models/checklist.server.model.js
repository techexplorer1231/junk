'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Checklist Schema
 */
var ChecklistSchema = new Schema({
	checklist: {
		type: [],
		default: '',
		required: 'Please fill Checklist name',
		trim: true
	},
	category: {
		type: String,
		default: '',
		unique: true,
		required: 'Please fill Checklist category type',
		trim: true
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

mongoose.model('Checklist', ChecklistSchema);