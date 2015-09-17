import Ember from 'ember';

export default Ember.Controller.extend({
<<<<<<< HEAD
=======
	isDetail: false,
>>>>>>> origin/master
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
		}
	}
});
