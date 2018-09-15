import { Component, OnInit, Input, EventEmitter,Output} from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-account-view',
  templateUrl: './create-account-view.component.html',
  styleUrls: ['./create-account-view.component.scss']
})
export class CreateAccountViewComponent implements OnInit {
  @Input() createaccount: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
