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


  @tracked load = false;
  @tracked headers = [];
  @tracked records = [];
  data = [];
  ids = [];

  @tracked search_value = '';


  sleep(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
    if(!this.selectedRows.includes(id)){
      this.selectedRows.push(id);
    }else{
      this.selectedRows = this.selectedRows.filter((val)=>{
        if(val == id) return false;
        else return true;
      })
    }
  
    // console.log(this.selectedRows);
  }

  @action deleteSelectedRows() {
     this.records = this.records.filter((record)=>{
       if(this.selectedRows.includes(record[0])) return false;
       else return true;
     })
  }

  @action display(){
    this.data = this.args.data;

    // console.log(data);
    this.headers = Object.keys(this.data[0]);
    // console.log(this.headers)
 
    this.data.forEach((record)=>{
      this.records.push(Object.values(record));
      this.ids.push(record.id);
    })
    this.records = this.records;
   
    this.load = true;
    
    // console.log(Object.keys(this.args.data[0]));
  }
}
