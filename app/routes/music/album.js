import Ember from "ember";

export default Ember.Route.extend({
	model: function(params) {
		this.store.query("song", {
			album_id: params.album_id
		}).then(function(song) {
			console.log(song, song.get("title"))
		});
		return this.store.query("song", {
			album: params.album_id
		});
	},
	renderTemplate: function() {
		this.render({
			outlet: "song-list"
		});
	}
});
