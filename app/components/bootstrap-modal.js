import Ember from "ember";

export default Ember.Component.extend({
	tagName: "div",

	classNames: ["modal"],

	visibleOnStartup: false,

	static: false,

	hide: function() {
		//force modal to close for removing backdrop
		this.$().modal("hide");
	}.on("willDestroyElement"),

	show: function() {
		var properties = {};
		properties.show = this.get("visibleOnStartup");
		if (this.get("static")) {
			properties.backdrop = "static";
			properties.keyboard = false;
		}
		this.$().modal(properties).on("hidden.bs.modal", function() {
			this.sendAction("close");
			this.$().modal().off("hidden.bs.modal");
		}.bind(this));
	}.on("didInsertElement")
});