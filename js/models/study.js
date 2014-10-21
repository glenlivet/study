App.Study = DS.Model.extend({
	title: DS.attr('string')
});

App.Study.FIXTURES = [
 {
   id: 1,
   title: 'Ember.js'
 },
 {
   id: 2,
   title: 'Hadoop'
 },
 {
   id: 3,
   title: 'CSS'
 }
];