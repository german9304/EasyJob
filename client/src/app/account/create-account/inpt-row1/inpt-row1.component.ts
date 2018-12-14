import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inpt-row1',
  templateUrl: './inpt-row1.component.html',
  styleUrls: ['../../sharedstyle.component.scss', './inpt-row1.component.css']
})
export class InptRow1Component implements OnInit {
  @Input() formParent: FormGroup;
  constructor() {}

  ngOnInit() {}
}
