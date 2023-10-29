import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent {
  // input params are used to pass data from parent to child component
  @Input() totalCount?: number;
  @Input() pageSize?: number;
  @Input() pageNumber?: number;

  // Output params are used to pass data from child to parent component
  @Output() pageChanged = new EventEmitter<number>();
  //by emitting the event upwards
  onPagerChanged(event: any) {
    this.pageChanged.emit(event.page);
  }
}
