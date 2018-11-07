import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EDUCATION } from '../../../../job';
import { CandidateFieldsService } from '../../../services/candidate-fields.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FieldsService } from '../../../services/fields.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: [
    '../../shared-profile-fields.component.scss',
    './new-education.component.scss'
  ]
})
export class NewEducationComponent implements OnInit {
  educationForm = this.fb.group({
    school: [''],
    degree: [''],
    majorField: [''],
    date: this.fb.group({
      start: [''],
      end: ['']
    }),
    description: ['']
  });
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cf: CandidateFieldsService,
    private fs: FieldsService<EDUCATION>
  ) {}

  ngOnInit() {}
  addEducation() {
    const { value }: { value: EDUCATION } = this.educationForm;
    const url = '/api/fields/education';
    this.fs.createField(url, value).subscribe((res: EDUCATION) => {
      console.log(res);
      console.log(`res inside ${JSON.stringify(res)}`);
      console.log(this.cf.EDUCATION === this.cf.EDUCATION.push(res));
      this.fs.EDUCATION = this.fs.EDUCATION.push(res);
      this.educationForm.reset();
      this.router.navigate(['../jobseeker/profile']);
    });
  }
}
