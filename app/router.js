import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
	location: config.locationType
});

Router.map(function() {
	this.route("music", function() {
		this.route("album", {
			path: "/:album_id"
		}, function() {
			this.route("new");
		});
		this.route("new");
	});
});

export default Router;