import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiple-dropdown',
  templateUrl: './multiple-dropdown.component.html',
  styleUrls: ['./multiple-dropdown.component.scss']
})
export class MultipleDropdownComponent implements OnInit {

  @Input() dropdownName: string = 'select';
  @Input() isSearchable: boolean = true;
  @Input() translateObjectKey: string = 'name';
  @Input() items: any[];
  @Output() selectResult = new EventEmitter();

  selectedItems = [];
  storedItems: any[];

  constructor() {
  }

  ngOnInit(): void {
    this.storedItems = [...this.items]
  }

  stopClose(event): void {
    event.stopPropagation();
  }

  selectData(event, item: {}): void {
    if (event.target.checked) {
      this.selectedItems.push(item)
    } else {
      const index = this.selectedItems.indexOf(item);
      if (index > -1) {
        this.selectedItems.splice(index, 1);
      }
    }
  }

  emitData(): void {
    const items = [...this.selectedItems]
    this.selectResult.emit(items);
  }

  search(data) {
    this.items = ((this.storedItems).filter((item: any) => ((item[this.translateObjectKey]).toLowerCase().trim()).indexOf(data.toLowerCase().trim()) > -1));
  }

}
