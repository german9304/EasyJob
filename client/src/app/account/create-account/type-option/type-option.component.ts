import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type-option',
  templateUrl: './type-option.component.html',
  styleUrls: ['./type-option.component.scss']
})
export class TypeOptionComponent implements OnInit {
  @Input() selected: boolean;
  constructor() {}
  ngOnInit() {}
  handleType(type: number) {
    console.log(`type clicked ${type}`);
  }
}
