import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { map, filter } from "rxjs/operators";
import { EXPERIENCE, FIELDS, EDUCATION, FILE } from "../../../job";
import { FormControl } from "@angular/forms";
import { CandidateFieldsService } from "../../services/candidate-fields.service";
import { FieldsService } from "../../services/fields.service";
import {
  Router,
  ActivatedRoute,
  ActivationStart,
  ActivationEnd,
  ChildActivationStart,
  ChildActivationEnd
} from "@angular/router";
import { List, Map } from "immutable";
import { CandidateFilesService } from "../../services/candidate-files.service";
//import { FILE } from "../.././file";
@Component({
  selector: "candidate-profile",

  // templateUrl: "./candidate-profile.component.html",
  template: `
    <div class="candidateprofile">
      <candidate-profile-view 
      [experience]="fsexp.EXPERIENCE" 
      [education]="fsedu.EDUCATION"
       [trackByExp]="trackByExperience"
       [file]="fileUpload"
       (fileChosen)="uploadFile($event)"
       [fileInfo]="fileService.fileInfo">
      </candidate-profile-view>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: [
    // "../shared-profile-fields.component.scss",
    "./candidate-profile.component.css"
  ]
})
export class CandidateProfileComponent implements OnInit {
  fileUpload: FormControl = new FormControl("");
  constructor(
    private fields: CandidateFieldsService,
    private fsedu: FieldsService<EDUCATION>,
    private fsexp: FieldsService<EXPERIENCE>,
    private router: Router,
    private route: ActivatedRoute,
    private fileService: CandidateFilesService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { CandidateFields: FIELDS }) => {
      if (data) {
        const {
          CandidateFields: { experience, education, fileInfo }
        }: { CandidateFields: FIELDS } = data;
        // console.log(data);

        this.fsexp.EXPERIENCE = List<EXPERIENCE>(experience);
        // console.log(this.fsexp.FIELD);
        this.fsedu.EDUCATION = List<EDUCATION>(education);
        const fInfo: FILE = fileInfo;
        const {
          originalName,
          uploadDate
        }: { originalName: string; uploadDate: string } = fInfo;
        const fInfoObj = { originalName, uploadDate };
        this.fileService.fileInfo = Map<string, string>(fInfoObj);
        const { fileInfo: fi } = this.fileService;
        console.log(fi.toObject());
      }
      console.log("ng init");
    });
  }
  trackByExperience(index: number, experience: EXPERIENCE): string {
    //console.log(`id: ${experience._id}`);
    return experience._id;
  }
  async uploadFile(event): Promise<void> {
    const { files } = event.target;
    const [file] = files;
    console.log(file);
    const fileInfo: FILE = await this.fileService.uploadResume(file);
    const { originalName, uploadDate } = fileInfo;

    console.log(fileInfo);
  }
}
