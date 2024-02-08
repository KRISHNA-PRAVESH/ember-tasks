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
  @tracked newData = {
    id: '',
    name: '',
    profile: '',
    department: '',
    time: '',
    date: '',
  };

  @tracked search_value = '';

  data_backup = [];

  filtered_data = [];
  @action filter() {
    // console.log(this.search_value)
    this.router.transitionTo({ queryParams: { searchStr: this.search_value } });
  }

  @action resetFilter() {
    this.data = this.data_backup;
    this.search_value = '';
  }

  //Task 3 -> Edit and multiple delete features

  @tracked selectedRows = [];

  @action check(id) {
    if (this.selectedRows.includes(id)) {
      var index = this.selectedRows.indexOf(id);
      this.selectedRows.splice(index, 1);
      this.selectedRows = this.selectedRows;
    } else {
      this.selectedRows = [...this.selectedRows, id];
    }
    console.log(this.selectedRows);
  }

  @action deleteSelectedRows() {
    this.data = this.data.filter((record) => {
      if (this.selectedRows.includes(record.id)) return false;
      else return true;
    });
    console.log(this.selectedRows);
  }

  
}
