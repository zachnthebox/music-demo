import Ember from "ember";

export default Ember.Component.extend({
	tagName: "div",

	classNames: ["modal"],

	visible: false,

	toggle: function() {
		var action = this.get("visible") ? "show" : "hide";
		this.$().modal(action);
	}.observes("visible"),

	hide: function() {
		this.$().modal("hide");
	}.on("willDestroyElement"),

	didInsertElement: function() {
		debugger;
		this.$().modal({
			show: this.get("visible")
		}).on("hidden.bs.modal", function() {
			this.sendAction("close");
		}.bind(this));
	},

	willDestroyElement: function() {
		this.$().modal().off("hidden.bs.modal");
		return this._super(arguments);
	}
});