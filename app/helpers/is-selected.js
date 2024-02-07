// app/helpers/is-selected.js

import { helper } from '@ember/component/helper';

function isSelected([id, selectedRows]) {
  // console.log(selectedRows.includes(id));
   return selectedRows.includes(id);
}

export default helper(isSelected);
