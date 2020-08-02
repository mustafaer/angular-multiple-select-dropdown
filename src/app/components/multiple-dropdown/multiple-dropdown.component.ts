import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiple-dropdown',
  templateUrl: './multiple-dropdown.component.html',
  styleUrls: ['./multiple-dropdown.component.scss']
})
export class MultipleDropdownComponent implements OnInit {

  @Input() dropdownName: string;
  @Input() translateObjectKey: string;
  @Input() items: [];
  @Output() selectResult = new EventEmitter();

  selectedItems = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  stopClose(event) {
    event.stopPropagation();
  }

  selectData(event, item) {
    if (event.target.checked) {
      this.selectedItems.push(item)
    } else {
      const index = this.selectedItems.indexOf(item);
      if (index > -1) {
        this.selectedItems.splice(index, 1);
      }
    }
  }

  emitData() {
    const items = [...this.selectedItems]
    this.selectResult.emit(items);
  }

}
