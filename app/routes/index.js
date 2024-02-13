import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
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

  includes(val, searchStr) {
    for (var i = 0; i < val.length; i++) {
      if (
        typeof val[i] == 'string' &&
        val[i].toLowerCase().indexOf(searchStr) > -1
      ) {
        return true;
      } else if (typeof val[i] == 'number') {
        if (val[i] == searchStr) return true;
      }
    }
    return false;
  }

  async model(params) {
    await this.dataStore.fetchData.perform();
    // this.isLoading = false;
    var data = this.dataStore.getData();

    //if query param exist returned the data that matches the query param
    if (params.searchStr) {
      // console.log(params.searchStr);
      var searchStr = params.searchStr.toLowerCase();
      // var match_ids = [];
      // for (var i = 0; i < data.length; i++) {
      //   var currName = data[i].name.toLowerCase();
      //   if (currName.indexOf(searchName) > -1) {
      //     match_ids.push(i+1);
      //   }
      // }

      var filtered = data.filter((record) => {
        const val = Object.values(record);
        if (this.includes(val, searchStr)) return true;
      });

      return { data: filtered, title: 'Display Page' };
    }

    //if not exists return the entire data
    return { data, title: 'Display Page' };
  }
}
