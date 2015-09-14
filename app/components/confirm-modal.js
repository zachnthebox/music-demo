import ModalComponents from 'mustache-you/components/modal';

export default ModalComponents.extend({
  templateName: "confirm-modal",

  show: function() {
    this.$('.modal').modal().on('hidden.bs.modal', function() {
      this.sendAction('close');
    }.bind(this));
  }
});
