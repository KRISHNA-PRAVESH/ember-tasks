import { modifier } from 'ember-modifier';

export default modifier((element, [eventName, handler]) => {
  console.log('cusomt on mod');
  element.addEventListener(eventName, handler);

  // Return a cleanup function to remove the event listener
  return () => {
    element.removeEventListener(eventName, handler);
  };
});
