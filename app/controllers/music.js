import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addMusic: function() {
      var title = this.get("title");
      var album = this.get("album");
      var artist = this.get("artist");

      if (!title || !album || !artist) {
        alert("Enter in everything or else!");
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
    }
  }
});
