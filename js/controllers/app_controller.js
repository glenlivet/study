App.ApplicationController = Ember.ArrayController.extend({
	size : function(){
		return this.get('length');
	}.property('model.length')
});