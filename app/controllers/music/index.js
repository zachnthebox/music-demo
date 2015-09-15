import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
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
		}
	}
});
