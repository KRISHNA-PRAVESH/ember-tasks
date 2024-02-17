import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AddRoute extends Route {
  @service dataStore;
  async model() {
    let data = await this.dataStore.getData();
    let keys = Object.keys(data[0]);
    return { keys, title: 'Add Page',isEdit:false };
  }
}
