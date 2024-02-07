import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { computed } from '@ember/object';
import { contains } from '@ember/object/computed';
import { gt } from '@ember/object/computed';

export default class TableComponent extends Component {
  //Task 2

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
  @tracked data = [
    {
      id: "1",
      name: 'Harry Potter',
      profile: 'Student',
      department: 'IT',
      time: '10:33',
      date: '2024-01-22',
    },
    {
      id: "2",
      name: 'Severus Snape',
      profile: 'Proffesor',
      department: 'CSE',
      time: '11:44',
      date: '2024-01-22',
    },
    {
      id: "3",
      name: 'Albus Dumbledore',
      profile: 'Proffesor',
      department: 'IT',
      time: '14:22',
      date: '2024-01-22',
    },
  ];

  idExists(id) {
    var f = 0;
    this.data.forEach((record) => {
      if (record.id == id) f = 1;
    });
    if (f == 1) return true;
    return false;
  }
  @action update() {
    //adding new record to data
    // reassigning instead of push , since the data array
    //is being tracked by ember, the changes will be notice
    //only while reassigning.

    //checking if Id already exists

    if (this.idExists(this.newData.id)) {
      // console.log("Id Exists, updating")
      //updating the value
      var idx = -1;
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].id == this.newData.id) {
          idx = i;
          break;
        }
      }
      // console.log(idx);
      //updating the new values
      this.data[idx] = this.newData;
      this.data = this.data;
    } else {
      
      this.data = [...this.data, this.newData];
    }
    this.newData = {
      id: '',
      name: '',
      profile: '',
      department: '',
      time: '',
      date: '',
    };
  }
  filtered_data = [];
  @action filter() {
    // console.log(this.search_value)
    this.data.forEach((record) => {
      const name = record.name.toUpperCase();
      const search = this.search_value.toUpperCase();
      if (name.indexOf(search) > -1) {
        this.filtered_data.push(record);
      }
    });
    this.data_backup = this.data;
    this.data = this.filtered_data;
    this.filtered_data = [];
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
      this.selectedRows.splice(index,1);
      this.selectedRows = this.selectedRows;
     
    } else {
      this.selectedRows = [...this.selectedRows,id]
      
    }
    console.log(this.selectedRows);
  }
  
  @action deleteSelectedRows(){
    this.data = this.data.filter((record)=>{
      if(this.selectedRows.includes(record.id)) return false;
       else return true;
    })
    console.log(this.selectedRows);
  }
}
