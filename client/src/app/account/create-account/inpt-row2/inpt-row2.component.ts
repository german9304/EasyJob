import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inpt-row2',
  templateUrl: './inpt-row2.component.html',
  styleUrls: ['../../sharedstyle.component.scss', './inpt-row2.component.css']
})
export class InptRow2Component implements OnInit {
  @Input() formParent: FormGroup;
  constructor() {}

  ngOnInit() {}
}
