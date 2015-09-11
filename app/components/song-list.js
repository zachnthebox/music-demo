import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "ul",
  classNames: ["list-group"],
  actions: {
    removeSong: function(song) {
      this.sendAction("removeSong", song);
    }
  }
});
