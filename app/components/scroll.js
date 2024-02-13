import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ScrollComponent extends Component {
  @tracked items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 3' },
    { id: 5, name: 'Item 3' },
    { id: 6, name: 'Item 3' },
    { id: 7, name: 'Item 3' },
    { id: 8, name: 'Item 3' },
    { id: 9, name: 'Item 3' },
    { id: 10, name: 'Item 3' },
    { id: 11, name: 'Item 3' },
    { id: 12, name: 'Item 3' },
    { id: 13, name: 'Item 3' },
    { id: 14, name: 'Item 3' },
    { id: 15, name: 'Item 3' },
    { id: 16, name: 'Item 3' },
    { id: 17, name: 'Item 3' },
    { id: 18, name: 'Item 3' },
    { id: 19, name: 'Item 3' },
    { id: 20, name: 'Item 3' },
    { id: 21, name: 'Item 3' },
    { id: 22, name: 'Item 3' },
    { id: 23, name: 'Item 3' },
    { id: 24, name: 'Item 3' },
    { id: 25, name: 'Item 3' },
    { id: 26, name: 'Item 3' },
    { id: 27, name: 'Item 3' },
    { id: 28, name: 'Item 3' },
    { id: 29, name: 'Item 3' },
    { id: 30, name: 'Item 3' },
    { id: 31, name: 'Item 3' },
    { id: 32, name: 'Item 3' },
    { id: 33, name: 'Item 3' },
    { id: 34, name: 'Item 3' },
    { id: 35, name: 'Item 3' },
    { id: 36, name: 'Item 3' },
    { id: 37, name: 'Item 3' },
    { id: 38, name: 'Item 3' },
    { id: 39, name: 'Item 3' },
    { id: 40, name: 'Item 3' },
    { id: 41, name: 'Item 3' },
    { id: 42, name: 'Item 3' },
    { id: 43, name: 'Item 3' },
    { id: 44, name: 'Item 3' },
    { id: 45, name: 'Item 3' },
    { id: 46, name: 'Item 3' },
    { id: 47, name: 'new Item' },
    { id: 48, name: 'new Item' },
    { id: 49, name: 'new Item' },
    { id: 50, name: 'new Item' },
    { id: 51, name: 'new Item' },
    { id: 52, name: 'new Item' },
    { id: 53, name: 'new Item' },
    { id: 54, name: 'new Item' },
    { id: 55, name: 'new Item' },
    { id: 56, name: 'new Item' },
    { id: 57, name: 'new Item' },
    { id: 58, name: 'new Item' },
    { id: 59, name: 'new Item' },
    { id: 60, name: 'new Item' },
    { id: 61, name: 'new Item' },
    { id: 62, name: 'new Item' },
    { id: 63, name: 'new Item' },
    { id: 64, name: 'new Item' },
    { id: 65, name: 'new Item' },
    { id: 66, name: 'new Item' },
    { id: 67, name: 'new Item' },
    { id: 68, name: 'new Item' },
    { id: 69, name: 'new Item' },
    { id: 70, name: 'new Item' },
    { id: 71, name: 'new Item' },
    { id: 72, name: 'new Item' },
    { id: 73, name: 'new Item' },
    { id: 74, name: 'new Item' },
    { id: 75, name: 'new Item' },
    { id: 76, name: 'new Item' },
    { id: 77, name: 'new Item' },
    { id: 78, name: 'new Item' },
    { id: 79, name: 'new Item' },
    { id: 80, name: 'new Item' },
    { id: 81, name: 'new Item' },
    { id: 82, name: 'new Item' },
    { id: 83, name: 'new Item' },
    { id: 84, name: 'new Item' },
    { id: 85, name: 'new Item' },
    { id: 86, name: 'new Item' },
    { id: 87, name: 'new Item' },
    { id: 88, name: 'new Item' },
    { id: 89, name: 'new Item' },
    { id: 90, name: 'new Item' },
    { id: 91, name: 'new Item' },
    { id: 92, name: 'new Item' },
    { id: 93, name: 'new Item' },
    { id: 94, name: 'new Item' },
    { id: 95, name: 'new Item' },
    { id: 96, name: 'new Item' },
    { id: 97, name: 'new Item' },
    { id: 47, name: 'new Item' },
    { id: 48, name: 'new Item' },
    { id: 49, name: 'new Item' },
    { id: 50, name: 'new Item' },
    { id: 51, name: 'new Item' },
    { id: 52, name: 'new Item' },
    { id: 53, name: 'new Item' },
    { id: 54, name: 'new Item' },
    { id: 55, name: 'new Item' },
    { id: 56, name: 'new Item' },
    { id: 57, name: 'new Item' },
    { id: 58, name: 'new Item' },
    { id: 59, name: 'new Item' },
    { id: 60, name: 'new Item' },
    { id: 61, name: 'new Item' },
    { id: 62, name: 'new Item' },
    { id: 63, name: 'new Item' },
    { id: 64, name: 'new Item' },
    { id: 65, name: 'new Item' },
    { id: 66, name: 'new Item' },
    { id: 67, name: 'new Item' },
    { id: 68, name: 'new Item' },
    { id: 69, name: 'new Item' },
    { id: 70, name: 'new Item' },
    { id: 71, name: 'new Item' },
    { id: 72, name: 'new Item' },
    { id: 73, name: 'new Item' },
    { id: 74, name: 'new Item' },
    { id: 75, name: 'new Item' },
    { id: 76, name: 'new Item' },
    { id: 77, name: 'new Item' },
    { id: 78, name: 'new Item' },
    { id: 79, name: 'new Item' },
    { id: 80, name: 'new Item' },
    { id: 81, name: 'new Item' },
    { id: 82, name: 'new Item' },
    { id: 83, name: 'new Item' },
    { id: 84, name: 'new Item' },
    { id: 85, name: 'new Item' },
    { id: 86, name: 'new Item' },
    { id: 87, name: 'new Item' },
    { id: 88, name: 'new Item' },
    { id: 89, name: 'new Item' },
    { id: 90, name: 'new Item' },
    { id: 91, name: 'new Item' },
    { id: 92, name: 'new Item' },
    { id: 93, name: 'new Item' },
    { id: 94, name: 'new Item' },
    { id: 95, name: 'new Item' },
    { id: 96, name: 'new Item' },
    { id: 97, name: 'new Item' },
    { id: 98, name: 'new Item' },
    { id: 99, name: 'new Item' },
    { id: 100, name: 'new Item' },
    // Add more items as needed
  ];

  @service flashMessages;

  @tracked initialRenderCount = 10;
  // Calculate the total number of items based on the viewport
  get totalRenderCount() {
    // Calculate based on the viewport and item height
    // You may need to adjust this calculation based on your specific requirements
    const viewportHeight = window.innerHeight;
    const itemHeight = 50; // Adjust this based on your item's height
    const visibleItems = Math.ceil(viewportHeight / itemHeight);
    console.log(visibleItems);
    return Math.min(this.items.length, this.initialRenderCount + visibleItems);
  }

  @action loadMore() {
    console.log('end of file');
  }

  @action outsideClick() {
    console.log('clicking outsideee');
  }

  @action flash() {
    this.flashMessages.success('Sucess!',{
      timeout: 100,
      priority: 100,
      sticky: false,
      showProgress: true,
    });
  }
}
