import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addSong: function(song) {
      var album = this.store.createRecord("album", {
        title: song.album,
        artist: song.artist,
        songs: []
      });
      var song = this.store.createRecord("song", {
        title: song.title,
        artist: song.artist,
        album: album,
      });

      album.save();
      song.save();
    },
    removeSong: function(song) {
      song.deleteRecord();
      song.save();
    }
  }
});
