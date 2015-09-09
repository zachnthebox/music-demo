import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('songs', {
    path: '/songs'
  });
  this.route('artists', {
    path: '/artists'
  });
});

export default Router;
