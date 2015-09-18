import Ember from 'ember';

export default Ember.Component.extend({
	tagName: "a",
	classNames: ["list-group-item"],
	showDelete: true,
	actions: {
		removeSong: function() {
			this.sendAction("removeSong", this.get("song"));
		}
	}
});