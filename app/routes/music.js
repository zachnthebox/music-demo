import Ember from "ember";

export default Ember.Route.extend({
	model: function() {
		return this.store.query("album", {});
	},
	actions: {
		loading: function() {
			return true;
		}
	}
});