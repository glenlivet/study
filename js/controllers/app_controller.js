App.ApplicationController = Ember.ArrayController.extend({
	size : function(){
		return this.get('length');
	}.property('model.length')
});

App.AboutController = Ember.ObjectController.extend({
	message : 'this is ABOUT section.'
});

