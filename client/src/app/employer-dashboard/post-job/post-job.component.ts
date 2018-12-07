import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  postJobForm: FormGroup = this.fb.group({
    row1: this.fb.group({}),
    row2: this.fb.group({}),
    row3: this.fb.group({})
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
