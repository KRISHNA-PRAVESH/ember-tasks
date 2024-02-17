import Component,{didInsertElement} from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class AddDAtaComponent extends Component {
  @service dataStore;
  @service flashMessages;
  @service router;


  @tracked formData = {};
  

  

  // idExists(id, data) {
  //   var f = 0;

  //   data.forEach((record) => {
  //     if (record.id == id) f = 1;
  //   });
  //   if (f == 1) return true;
  //   return false;
  // }


  @action async update() {
    // console.log(this.newData);

    let isEdit = this.args.data.isEdit;
    if(isEdit){
      await this.dataStore.editData(this.formData);
    }
    else{
      await this.dataStore.addData(this.formData);
       this.flash();
    }
    this.router.transitionTo('/list');
  }

  @action updateFormFieldValue(fieldName, event) {
    this.formData[fieldName] = event.target.value;
  }

  @action flash() {
    this.flashMessages.success('New Data Inserted!', {
      timeout: 1000,
      priority: 100,
      sticky: false,
      showProgress: true,
    });
  }

  @action submit() {
    console.log('Add/edit component, Is edit:',this.args.data.isEdit);

  }
}
