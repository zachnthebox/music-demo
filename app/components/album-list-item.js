import Ember from 'ember';

export default Ember.Component.extend({
	tagName: "",
	actions: {
		removeAlbum: function() {
			this.sendAction("removeAlbum", this.get("album"));
		}
	}
});