import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TableComponent extends Component {
   
    @tracked load = false;
    @tracked headers = [];
    @tracked records = [];
    @tracked data = [];
    @tracked search_value = '';
    @tracked no_results = false;

    @service router;
    @service flashMessages;

    @action msg(){
      this.flashMessages.success("Shake that!")
    }
   
    @action filter() {
        this.load = false;
        this.headers = [];
        this.records = [];
        this.router.transitionTo({ queryParams: { searchStr: this.search_value } });
      }

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
    
        // console.log(this.selectedRows);
      }

      @action deleteSelectedRows() {
        this.records = this.records.filter((record) => {
          if (this.selectedRows.includes(record[0])) return false;
          else return true;
        });
      }

      
   
    @action display() {
        this.data = this.args.data;
        if(this.data.length == 0) this.no_results = true;
        else{
        // console.log(this.data);
        this.headers = Object.keys(this.data[0]);
        // console.log(this.headers)
    
        this.data.forEach((record) => {
          this.records.push(Object.values(record));
          
        });
        this.records = this.records;
        // console.log(this.records)
    
        this.load = true;
    
        // console.log(Object.keys(this.args.data[0]));
      }
    }
}
