import Service from '@ember/service';

export default class DataStoreService extends Service {
  data = [
    {
      id: '1',
      name: 'Harry Potter',
      profile: 'Student',
      department: 'IT',
      time: '10:33',
      date: '2024-01-22',
    },
    {
      id: '2',
      name: 'Severus Snape',
      profile: 'Proffesor',
      department: 'CSE',
      time: '11:44',
      date: '2024-01-22',
    },
    {
      id: '3',
      name: 'Albus Dumbledore',
      profile: 'Proffesor',
      department: 'IT',
      time: '14:22',
      date: '2024-01-22',
    },
  ];

  addData(new_data) {
    this.data.push(new_data);
  }

  getData() {
    return this.data;
  }
}
