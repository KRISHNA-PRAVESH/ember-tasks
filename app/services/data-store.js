import Service from '@ember/service';
import fetch from 'fetch';
import { task } from 'ember-concurrency';

export default class DataStoreService extends Service {
  data = [];
  BASE_URL = "http://localhost:5173"
  isLoading = false;

  async addData(new_data) {
    // console.log(new_data);
    const response = await fetch(this.BASE_URL+'/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(new_data)
    });
    if (response.ok) {
      // handle success
      console.log("Data added")
    } else {
      console.log(response);
    }
  }

  async editData(new_data){
    const url = `${this.BASE_URL}/update/${new_data.id}`;
    // console.log("req url: "+url);

    const response = await fetch(url,{
      method:'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(new_data)
    });

    if(response.ok){
      console.log("Data Edited")
    }
    else{
      console.log("Error");
    }
  }

  async deleteRows(selectedRows){
    let transferData = { selectedIds: selectedRows};

    const url = `${this.BASE_URL}/delete`;
    // console.log("req url: "+url);

    const response = await fetch(url,{
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transferData)
    });

    if(response.ok){
      console.log("Datas deleted")
    }
    else{
      console.log("Error in deletion");
    }


  }

  sleep(ms = 0) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  @task
  *fetchData() {
      //https://hp-api.onrender.com/api/characters/students
      let response = yield fetch(this.BASE_URL+'/all');
      let parsed = yield response.json();
      // let parsed = [{"id":"9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8","name":"Harry Potter","alternate_names":["The Boy Who Lived","The Chosen One","Undesirable No. 1","Potty"],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"31-07-1980","yearOfBirth":1980,"wizard":true,"ancestry":"half-blood","eyeColour":"green","hairColour":"black","wand":{"wood":"holly","core":"phoenix tail feather","length":11},"patronus":"stag","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Daniel Radcliffe","alternate_actors":[],"alive":true,"image":"https://ik.imagekit.io/hpapi/harry.jpg"},{"id":"4c7e6819-a91a-45b2-a454-f931e4a7cce3","name":"Hermione Granger","alternate_names":["Hermy","Know-it-all","Miss Grant","Herm-own-ninny"],"species":"human","gender":"female","house":"Gryffindor","dateOfBirth":"19-09-1979","yearOfBirth":1979,"wizard":true,"ancestry":"muggleborn","eyeColour":"brown","hairColour":"brown","wand":{"wood":"vine","core":"dragon heartstring","length":10.75},"patronus":"otter","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Emma Watson","alternate_actors":[],"alive":true,"image":"https://ik.imagekit.io/hpapi/hermione.jpeg"}]

      // console.log(parsed);
      // var id = 1;
      // parsed.forEach((data) => {
      //   data.id = id;
      //   id++;
      // });
      // this.data = parsed.slice(0, 10);

      this.data = parsed;
  }

  async getData() {
    await this.fetchData.perform();
    return this.data;
  }

  //returns the data having given id
  readData(id){
    let dataToEdit;
    for(var i=0;i<this.data.length;i++){
      if(this.data[i].id == id){
        dataToEdit = this.data[i];
        break;
      }
    }
    return dataToEdit;
  }

  
}
