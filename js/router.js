App.Router.map(function(){
	this.route("about", {path: "/about"});

});

App.ApplicationRoute = Ember.Route.extend({
  model : function(){
    return this.store.find('study');
  }
});