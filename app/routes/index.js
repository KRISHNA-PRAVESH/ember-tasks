import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { computed } from '@ember/object';

export default class IndexRoute extends Route {
  @service dataStore;

  // queryParams = ['searchStr'];
  // searchStr = 'harry';

  queryParams = {
    searchStr: {
      refreshModel: true,
    },
  };



  model(params) {
    var data = this.dataStore.getData();
    console.log(params.searchStr);

    //if query param exist returned the data that matches the query param
    if (params.searchStr) {
      var searchName = params.searchStr.toLowerCase();
      var idx = -1;
      for (var i = 0; i < data.length; i++) {
        var currName = data[i].name.toLowerCase();
        if (currName.indexOf(searchName) > -1) {
          idx = i;
          break;
        }
      }
      data = [data[idx]];
      return data;
    }

    //if not exists return the entire data
    return data;
  }
}
