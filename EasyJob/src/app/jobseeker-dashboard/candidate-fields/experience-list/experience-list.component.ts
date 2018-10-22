import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { EXPERIENCE } from "../../../job";
import { List, Map } from "immutable";
@Component({
  selector: "experience-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./experience-list.component.html",
  styleUrls: ["../shared-fields-style.scss", "./experience-list.component.scss"]
})
export class ExperienceListComponent implements OnInit {
  @Input()
  EXPERIENCE: List<EXPERIENCE>;
  @Input()
  trackById;
  constructor() {}

  ngOnInit() {}
}
