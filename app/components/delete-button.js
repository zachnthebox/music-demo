import Ember from "ember";

export default Ember.Component.extend({
  showConfirm: function() {
    var domNode = this.get("element");
    if (domNode) {
      this.$(".delete-icon", domNode).addClass("hidden");
      this.$(".delete-button", domNode).removeClass("hidden");
    }
  },

  hideConfirm: function() {
    var domNode = this.get("element");
    if (domNode) {
      this.$(".delete-icon", domNode).removeClass("hidden");
      this.$(".delete-button", domNode).addClass("hidden");
    }
  },

  actions: {
    delete: function() {
      this.hideConfirm();
      this.$(window).off("click.confirmDeletebutton");
      this.sendAction("delete");
    },

    confirmDelete: function() {
      this.showConfirm();
      this.$(window).on("click.confirmDeletebutton", function() {
        this.hideConfirm();
        this.$(window).off("click.confirmDeletebutton");
      }.bind(this));
    }
  }
});
