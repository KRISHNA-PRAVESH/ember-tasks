import Route from '@ember/routing/route';
import {inject as service} from  '@ember/service';

export default class IndexRoute extends Route {
    @service dataStore;

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


    async model(params){

        await this.dataStore.fetchData.perform();

        var data = this.dataStore.getData();
        if(params.searchStr){
            var searchStr = params.searchStr.toLowerCase();
            // console.log(searchStr);

            var filtered = data.filter((record) => {
                const val = Object.values(record);
                if (this.includes(val, searchStr)) return true;
            });
        
            return {data: filtered,title:'Display Page'};
        }
        
        return {data,title:'Display Page'}
    }
}
