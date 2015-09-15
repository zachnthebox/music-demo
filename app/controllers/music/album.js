import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addSong: function(song, album) {
			var song = this.store.createRecord("song", {
				title: song.title,
				artist: song.artist,
				album: album,
			});

			album.get("songs").pushObject(song);

			album.save();
			song.save();
		},
		removeSong: function(song) {
			var album = song.get("album");
			album.removeObject(song);
			album.save();

			song.destroyRecord();
		}
	}
});
