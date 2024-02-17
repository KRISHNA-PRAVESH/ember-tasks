import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class EditRoute extends Route {
  @service dataStore;
  async model(params) {
    // console.log(params.id);
    let data = this.dataStore.readData(params.id);
    let keys = Object.keys(data);
    return { keys, title: 'Edit Page',data,isEdit:true };
  }
}
