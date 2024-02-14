import Component from '@glimmer/component';
import {inject as service} from  '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AddDataComponent extends Component {
    @service dataStore;
    @service flashMessages;
   
  
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
        // console.log(this.formData);
    
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
        this.flash();
       
        
      }

      @action flash() {
        this.flashMessages.success('New Data Inserted!',{
          timeout: 1000,
          priority: 100,
        })
      }
    
      @action updateFormFieldValue(fieldName, event) {
        this.formData[fieldName] = event.target.value;
      }
}
