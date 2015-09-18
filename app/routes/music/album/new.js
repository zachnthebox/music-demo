import Ember from "ember";

export default Ember.Route.extend({
	model: function() {
		return this.modelFor("music.album");
	},

	renderTemplate: function() {
		this.render({
			outlet: "modal",
			into: "application"
		});
		return this._super(arguments);
	},

	deactivate: function() {
		this._super(arguments);
		this.disconnectOutlet({
			outlet: "modal",
			parentView: "application"
		});
	},

	willTransition: function(transition) {
		/*
		if (form is dirty) {
			transition.abort();
		}
		*/
	}
});