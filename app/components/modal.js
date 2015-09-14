import Ember from "ember";

export default Ember.Component.extend({
  tagName: "div",
  classNames: ["modal"],

  didInsertElement: function() {
    this.$().modal({
      backdrop: "static"
    });
    return this.$().modal("show");
  },

  willDestroyElement: function() {
    return this.$().modal("hide");
  }
});
