import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-type-option',
  templateUrl: './type-option.component.html',
  styleUrls: ['./type-option.component.scss']
})
export class TypeOptionComponent implements OnInit {
  @Input() selected: boolean;
  @Output() type: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}
  ngOnInit() {}
  handleType(type: number) {
    this.type.emit(type);
  }
}
