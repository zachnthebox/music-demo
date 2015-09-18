import Ember from 'ember';

export default Ember.Component.extend({
	tagName: "li",
	classNames: ["list-group-item"],
	showDelete: true,
	actions: {
		removeSong: function() {
			this.sendAction("removeSong", this.get("song"));
		}
	}
});