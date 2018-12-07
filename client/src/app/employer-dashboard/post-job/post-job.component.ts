import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  formRows: Fbgroups = {
    row1: this.fb.group({
      jobTitle: [''],
      location: [''],
      category: ['']
    }),
    row2: this.fb.group({
      company: [''],
      companyIndustry: [''],
      employmentType: ['']
    }),
    skills: [''],
    jobDescription: ['']
  };
  postJobForm: FormGroup = this.fb.group(this.formRows);
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}

interface Fbgroups {
  row1: FormGroup;
  row2: FormGroup;
  skills: string[];
  jobDescription: string[];
}
