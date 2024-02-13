import { modifier } from 'ember-modifier';

export default modifier(function hideElement(element /*, positional, named*/) {
  element.classList.add('hide-element');
});
