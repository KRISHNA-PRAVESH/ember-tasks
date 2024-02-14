import { helper } from '@ember/component/helper';

export default helper(function toUpperCase(value/*, hash*/) {

   let s = value[0];
   if(typeof s == 'string') return s.toUpperCase();
   return value;
});
