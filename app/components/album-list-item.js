import Ember from 'ember';

export default Ember.Component.extend({
	tagName: "a",
	classNames: ["list-group-item"],
	selectedAlbum: undefined,

	updateStatus: function() {
		if (this.get("album").get("id") === this.get("selectedAlbum")) {
			this.$().addClass("active");
		} else {
			this.$().removeClass("active");
		}
	}.observes("selectedAlbum"),

	didInsertElement: function() {
		this.updateStatus();
	},

	actions: {
		click: function() {
			this.sendAction("click", this.get("album").get("id"));
		},
		removeAlbum: function() {
			this.sendAction("removeAlbum", this.get("album"));
		}
	}
});