import Ember from 'ember';

export default Ember.Controller.extend({
	modalVisible: true,

	actions: {
		close: function() {
			this.transitionToRoute("music.album");
		},
		addSong: function(song, album) {
			var songRecord = this.store.createRecord("song", {
				title: song.title,
				artist: song.artist,
				album: album,
			});

			album.get("songs").pushObject(songRecord);

			songRecord.save().then(function() {
				album.save();
			});
		}
	}
});