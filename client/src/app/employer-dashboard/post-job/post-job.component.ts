import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  formRows: Fbgroups = {
    row1: this.fb.group({
      title: [''],
      location: [''],
      category: ['']
    }),
    row2: this.fb.group({
      company: [''],
      industry: [''],
      type: ['']
    }),
    skills: [''],
    description: ['']
  };
  postJobForm: FormGroup = this.fb.group(this.formRows);
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.Row1);
  }

  get Row1() {
    return this.postJobForm.get('row1') as FormControl;
  }
}

interface Fbgroups {
  row1: FormGroup;
  row2: FormGroup;
  skills: string[];
  description: string[];
}
