import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // This route handles 404 and should ALWAYS be the last one.
  this.route('route-not-found', {path: '*path'});
});

export default Router;
