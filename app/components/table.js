import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { computed } from '@ember/object';
import { contains } from '@ember/object/computed';
import { gt } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class TableComponent extends Component {
  //Task 2

  @service router;
  @service flashMessages;
  @service dataStore;

  @tracked load = false;
  @tracked headers = [];
  @tracked records = [];
  data = [];
  ids = [];

  // @tracked search_value = '';

  sleep(ms = 0) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  filtered_data = [];
  @action filter() {
    // console.log(this.search_value)
    this.load = false;
    this.headers = [];
    this.records = [];
    this.router.transitionTo({ queryParams: { searchStr: this.search_value } });
  }

  @action resetFilter() {
    this.data = this.data_backup;
    this.search_value = '';
  }

  //Task 3 -> Edit and multiple delete features

  selectedRows = [];

  @action check(id) {
  
    //if current id is not selected
    if (!this.selectedRows.includes(id)) {
      this.selectedRows.push(id);
    } else {
      this.selectedRows = this.selectedRows.filter((val) => {
        if (val == id) return false;
        else return true;
      });
    }
    console.log("checked: ",this.selectedRows);
    // console.log(this.selectedRows);
  }

  @action isChecked(id){
    console.log("here:",id)
  }

 

  @action async deleteSelectedRows() {
    // console.log(this.selectedRows);
    await this.dataStore.deleteRows(this.selectedRows);
    this.records = await this.dataStore.getData();
    
  }

  @action display() {
    this.records = this.args.data;

    this.load = true;
  }

  @action outsideClick() {
    if (!this.load) this.display();
  }
}
