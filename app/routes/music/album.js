import Ember from "ember";

export default Ember.Route.extend({
	model: function(params) {
		var musicController = this.controllerFor("music");
		musicController.set("selectedAlbum", params.album_id);
		musicController.set("isDetail", true);

		var applicationController = this.controllerFor("application");
		applicationController.set("backRoute", "music");

		return this.store.find("album", params.album_id);
	},
	deactivate: function() {
		var musicController = this.controllerFor("music");
		musicController.set("selectedAlbum", this.paramsFor().album_id);
		musicController.set("isDetail", false);

		var applicationController = this.controllerFor("application");
		applicationController.set("backRoute", undefined);
	}
});
