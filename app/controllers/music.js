import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addSong: function(song) {
      this.store.createRecord("song", song).save();
    },

    deleteSong: function(song) {
      song.deleteRecord();
      song.save();
    }
  }
});
