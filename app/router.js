import EmberRouter from '@ember/routing/router';
import config from 'tables/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/list' });
  this.route('add');
  this.route('edit', { path: '/edit/:id' });
  this.route('scroll');
});
