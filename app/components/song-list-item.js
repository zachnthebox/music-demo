import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "li",
  classNames: ["list-group-item"],
  actions: {
    remove: function(song) {
      this.sendAction("removeSong", song);
    }
  }
});
