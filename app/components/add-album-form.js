import Ember from 'ember';

export default Ember.Component.extend({
	tagName: "form",

	classNames: ["form-horizontal"],

	hasError: false,

	actions: {
		submit: function() {
			this.send("addAlbum");
		},
		addAlbum: function() {
			var title = this.get("title");
			var album = this.get("album");
			var artist = this.get("artist");

			if (!title || !album || !artist) {
				this.set("hasError", true);
				return;
			}

			this.sendAction('addAlbum', {
				title: title,
				album: album,
				artist: artist
			});

			this.set("title", "");
			this.set("album", "");
			this.set("artist", "");
		},

		change: function() {
			this.set("hasError", false);
		}
	}
});