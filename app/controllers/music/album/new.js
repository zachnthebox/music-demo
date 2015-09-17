import Ember from 'ember';

export default Ember.Controller.extend({
	modalVisible: true,

	actions: {
		close: function() {
			this.transitionToRoute("music.album");
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