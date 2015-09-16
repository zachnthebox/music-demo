import Ember from 'ember';

export default Ember.Controller.extend({
	isFulFilled: function() {
		return this.get("model").isFulFilled;
	}.property("model"),

	selectedAlbum: undefined,

	actions: {
		albumDetail: function(id) {
			this.transitionToRoute("music.album", id);
		},
		removeAlbum: function(album) {
			if (!album) {
				return;
			}

			var songs = album.get("songs").map(song => song);
			album.destroyRecord().then(function() {
				songs.forEach(song => song.destroyRecord());
				this.transitionToRoute("music");
			}.bind(this));
		},
		addAlbum: function(song) {
			var album = this.store.createRecord("album", {
				title: song.album,
				artist: song.artist
			});
			var song = this.store.createRecord("song", {
				title: song.title,
				artist: song.artist,
				album: album,
			});

			album.get("songs").pushObject(song);

			song.save().then(function() {
				album.save();
			});
		}
	}
});