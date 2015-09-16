import Ember from "ember";

export default Ember.Route.extend({
	model: function(params) {
		this.controllerFor("music").set("selectedAlbum", params.album_id);
		return this.store.find("album", params.album_id);
	},
	deactivate: function() {
		this.controllerFor("music").set("selectedAlbum", this.paramsFor().album_id);
	}
});