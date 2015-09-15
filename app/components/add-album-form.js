import Ember from 'ember';

export default Ember.Component.extend({
	expanded: false,

	classNames: ["panel panel-default"],
	hasError: false,

	didInsertElement: function() {
		this.$(".panel-heading").click(function() {
			this.$(".panel-body").collapse("toggle");
		}.bind(this));
	},

	actions: {
		toggleAdd: function() {
			var expanded = this.get("expanded");
			this.set("expanded", !expanded);

			$(".addMusicTwistieIcon").animate({
				rotation: expanded ? 0 : 90
			}, {
				step: function(now) {
					$(this).css('transform', "rotate(" + now + "deg)");
				},
				duration: "fast"
			}, "linear");
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
