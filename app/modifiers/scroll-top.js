import { modifier } from 'ember-modifier';

export default modifier(function scrollTop(element /*, positional, named*/) {
  console.log('insde scroll top mod');
  element.scrollTop = 0;
});
