import ModalController from 'mustache-you/controllers/modal';

export default ModalController.extend({
	actions: {
		cancel: function() {
			debugger;
			if (this.content) {
				this.content.rollback();
			}
			return this.send('closeModal');
		},
		okay: function() {
			debugger;
			this.$('.modal').modal('hide');
			this.sendAction('okay');
			return true;
		}
	}
});
