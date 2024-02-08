import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';


export default class AddDAtaComponent extends Component {
  profiles = [
    'Proffesor',
    'Asst.Proffesor',
    'Student'
  ]

  @tracked selected = 'Proffesor'

  @action
  selectProfile(profile) {
    this.selected = profile;
  }

  @service dataStore;

  @tracked newData = {
    id: '',
    name: '',
    profile: '',
    department: '',
    time: '',
    date: '',
  };

  idExists(id, data) {
    var f = 0;

    data.forEach((record) => {
      if (record.id == id) f = 1;
    });
    if (f == 1) return true;
    return false;
  }

  @action update() {
    // console.log(this.newData);
    this.newData.profile = this.selected;
    var data = this.dataStore.getData();
    
    if (this.idExists(this.newData.id, data)) {
      // console.log("Id Exists, updating")
      //updating the value
      var idx = -1;
      for (var i = 0; i < data.length; i++) {
        if (data[i].id == this.newData.id) {
          idx = i;
          break;
        }
      }
      data[idx] = this.newData;
    } else {
      this.dataStore.addData(this.newData);
    }

    // console.log('Done');
    this.newData = {
      id: '',
      name: '',
      profile: '',
      department: '',
      time: '',
      date: '',
    };
  }

  

}
