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

			var promises = album.get("songs").map(function(song) {
				if (song && !song.get("isDeleted")) {
					return song.destroyRecord();
				}
			});

			if (!album.get("isDeleted")) {
				Ember.RSVP.Promise.all(promises).then(function() {
					album.destroyRecord().then(function() {
						this.transitionToRoute("music");
					}.bind(this));
				}.bind(this));
			}
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

			album.save();
			song.save();
		}
	}
});