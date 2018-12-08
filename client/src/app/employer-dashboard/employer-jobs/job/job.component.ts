import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JOB } from '../../../job';
import { EmployerService } from '../../employer.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  job: JOB;
  jobForm: FormGroup = this.fb.group({
    title: [''],
    location: [''],
    category: [''],
    company: [''],
    industry: [''],
    skill: [''],
    description: ['']
  });
  constructor(
    private employerService: EmployerService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getJob();
    this.updateJobForm();
  }
  getJob() {
    const { JOBS } = this.employerService;
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      const id: number = +params.get('id');
      const jobResult: JOB = JOBS.find(({ _id }) => _id === id);
      this.job = jobResult;
    });
  }
  updateJobForm() {
    const {
      title,
      location,
      company,
      category: { name },
      description,
      industry,
      skills
    } = this.job;
    this.jobForm.setValue({
      title,
      location,
      category: name,
      company,
      industry,
      skill: '',
      description
    });
    console.log(this.jobForm.value);
  }
}
