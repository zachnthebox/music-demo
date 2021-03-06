import Ember from 'ember';

export default Ember.Component.extend({
	hasError: false,

	defaultArtist: function() {
		var album = this.get("album");
		return album && album.get("artist");
	}.property("album"),

	artistPlaceholder: function() {
		return "Default: " + this.get("defaultArtist");
	}.property("defaultArtist"),

	artist: undefined,

	songToAdd: undefined,

	songs: function() {
		var album = this.get("album");
		return album && album.get("songs") || [];
	}.property("album"),

	album: undefined,

	actions: {
		add: function() {
			var song = {
				title: this.get("songToAdd"),
				artist: this.get("artist") || this.get("defaultArtist")
			};
			this.sendAction("addSong", song);
		},
		change: function() {
			this.set("hasError", false);
		},
		removeSong: function(song) {
			this.sendAction("removeSong", song);
		}
	}
});