import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular multiple select dropdown';

  selectedItems: [];

  items = [{
    name: 'test',
    value: 'val'
  }, {
    name: 'test 2',
    value: 'val 2'
  }, {
    name: 'test 22',
    value: 'val 2'
  }, {
    name: 'test 222',
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
    this.setLanguage('en')
  }

  getSelectedItems(items): void {
    this.selectedItems = items;
  }

  setLanguage(lang: string): void {
    localStorage.setItem('lang', lang);
  }
}
