import Ember from 'ember';

export default Ember.Component.extend({
	tagName: "a",
	classNames: ["list-group-item"],
	classNameBindings: ["isActive"],
	selectedAlbum: undefined,

	isActive: function() {
		return (this.get("album").get("id") === this.get("selectedAlbum")) ? "active" : "";
	}.property("selectedAlbum"),

	actions: {
		click: function() {
			this.sendAction("click", this.get("album").get("id"));
		},
		removeAlbum: function() {
			this.sendAction("removeAlbum", this.get("album"));
		}
	}
});