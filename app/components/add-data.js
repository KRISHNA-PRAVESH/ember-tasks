import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class AddDAtaComponent extends Component {
  
  @service dataStore;

  @tracked formData = {};

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
    
    let data = this.dataStore.getData();

    if (this.idExists(this.formData.id, data)) {
      // console.log("Id Exists, updating")
      //updating the value
      var idx = -1;
      for (var i = 0; i < data.length; i++) {
        if (data[i].id == this.formData.id) {
          idx = i;
          break;
        }
      }
      data[idx] = this.formData;
    } else {
      this.dataStore.addData(this.formData);
    }
  }

  
 
  @action updateFormFieldValue(fieldName,event){
    this.formData[fieldName] = event.target.value;
  }

  @action submit(){
    console.log(this.formData);
  }

  
}
