import Ember from 'ember';

export default Ember.Route.extend({
	renderTemplate: function() {
		this.render("music/loading", {
			outlet: "album-list",
		});
		this.render("music/loading");
	}
});