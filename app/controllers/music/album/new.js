import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		close: function() {
			this.transitionToRoute("music.album");
		},
		addSong: function(song) {
			var album = this.get("model");

			var songRecord = this.store.createRecord("song", {
				title: song.title,
				artist: song.artist,
				album: album,
			});

			album.get("songs").pushObject(songRecord);

			songRecord.save().then(function() {
				album.save();
			});
		},
		removeSong: function(song) {
			song.get("album").then(function(album) {
				album.get("songs").removeObject(song);
				album.save().then(function() {
					song.destroyRecord();
				});
			});
		}
	}
});