import Route from '@ember/routing/route';
import {inject as service} from  '@ember/service';

export default class AddRoute extends Route {
    @service dataStore;

    model(){
        let data = this.dataStore.getData();
        let keys = Object.keys(data[0]);
        return { keys, title: 'Add Page' };
    }
}
