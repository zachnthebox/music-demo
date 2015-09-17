import Ember from 'ember';

export default Ember.Controller.extend({
	hasBackRoute: function() {
		return this.get("backRoute");
	}.property("backRoute"),

	backRoute: undefined,

	actions: {
		back: function() {
			this.transitionToRoute("music");
		}
	}
});
