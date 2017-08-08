import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model() {
    return this.get('store').createRecord('book');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function(model) {
        self.transitionTo( "book", model );
      }).catch( function() {
        alert("Creation of book failed");
      });
    }
  }
});