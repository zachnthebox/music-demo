import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    okay: function() {
      this.$('.modal').modal('hide');
      this.sendAction('okay');
      return true;
    }
  },
  show: function() {
    this.$('.modal').modal().on('hidden.bs.modal', function() {
      this.sendAction('close');
    }.bind(this));
  }
});
