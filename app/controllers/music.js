import Ember from 'ember';

export default Ember.Controller.extend({
  hasError: false,

  actions: {
    addMusic: function() {
      var title = this.get("title");
      var album = this.get("album");
      var artist = this.get("artist");

      if (!title || !album || !artist) {
        this.set("hasError", true);
        return;
      }

      this.store.createRecord("song", {
        title: title,
        album: album,
        artist: artist
      }).save();

      this.set("title", "");
      this.set("album", "");
      this.set("artist", "");
    },

    change: function() {
      this.set("hasError", false);
    },

    remove: function(song) {
      song.deleteRecord();
      song.save();
    }
  }
});
