import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cl';

  selectedItems: [];

  items = [{
    name: 'test',
    value: 'val'
  }, {
    name: 'test 2',
    value: 'val 2'
  }, {
    name: 'test 3',
    value: 'val 3'
  }, {
    name: 'test 4',
    value: 'val 4'
  }, {
    name: 'test 5',
    value: 'val 5'
  }];

  constructor() {
  }

  getSelectedItems(items) {
    this.selectedItems = items;
  }
}
