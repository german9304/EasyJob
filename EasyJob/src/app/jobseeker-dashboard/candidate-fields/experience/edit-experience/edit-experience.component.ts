import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { EXPERIENCE, FIELDS } from "../../../../job";
import { CandidateFieldsService } from "../../../services/candidate-fields.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { List} from "immutable";
import { FieldsService } from "../../../services/fields.service";
@Component({
  selector: "edit-experience",
  templateUrl: "./edit-experience.component.html",
  styleUrls: [
    "../../shared-profile-fields.component.scss",
    "./edit-experience.component.scss"
  ]
})
export class EditExperienceComponent implements OnInit {
  _id: string;
  experienceForm: FormGroup = this.fb.group({
    position: [""],
    company: [""],
    location: [""],
    date: this.fb.group({
      start: [""],
      end: [""]
    }),
    description: [""]
  });
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private candidateField: CandidateFieldsService,
    private fieldSeriviceExperience: FieldsService<EXPERIENCE>,
    private fieldService: FieldsService<FIELDS>
  ) {}

  ngOnInit() {
    this.updateExperience();
    this.route.paramMap.subscribe(
      (param: ParamMap) => (this._id = param.get("id"))
    );
  }
  updateExperience() {
    this.route.data.subscribe(({ field }: { field: EXPERIENCE }) => {
      const { position, company, location, date, description } = field;
      this.experienceForm.setValue({
        position,
        company,
        location,
        date,
        description
      });
    });
  }
  save() {
    const { value }: { value: EXPERIENCE } = this.experienceForm;
    const { _id }: { _id: string } = this;
    const url: string = `/api/fields/experience/${_id}`;
    this.fieldSeriviceExperience
      .updateField(url, value)
      .pipe(
        switchMap(data => {
          // console.log(`data received: ${JSON.stringify(data)}`);
          return this.fieldService.getFields();
        })
      )
      .subscribe(({ experience }: { experience: Array<EXPERIENCE> }) => {
        this.fieldSeriviceExperience.EXPERIENCE = List<EXPERIENCE>(experience);
        this.fieldSeriviceExperience.goBackToProfile();
      });
  }
  delete() {
    // const { value } = this.experienceForm;
    const { _id }: {_id: string} = this;
    //console.log(this.experienceForm.value);
    const url: string = `/api/fields/experience/${_id}`;
    this.fieldSeriviceExperience
      .deleteField(url)
      .pipe(
        switchMap(data => {
          //console.log(`data received: ${JSON.stringify(data)}`);
          return this.fieldService.getFields();
        })
      )
      .subscribe(({ experience }: {experience: Array<EXPERIENCE>}) => {
        this.fieldSeriviceExperience.EXPERIENCE = List<EXPERIENCE>(experience);
        this.fieldSeriviceExperience.goBackToProfile();
      });
    console.log("delete");
  }
}
