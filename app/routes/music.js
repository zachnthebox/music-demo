import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('song');
  },
  actions: {
    removeSong: function(song) {
      //return this.send('openModal', 'confirm-modal', song);
      song.deleteRecord();
      song.save();
    },
    openModal: function(modalName, model) {
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal',
        model: model
      });
    },
    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
