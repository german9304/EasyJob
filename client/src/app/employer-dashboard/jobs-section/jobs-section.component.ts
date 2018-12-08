import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
import { JOB } from '../../job';

@Component({
  selector: 'app-jobs-section',
  templateUrl: './jobs-section.component.html',
  styleUrls: ['../shared-jobs-candidates.css', './jobs-section.component.css']
})
export class JobsSectionComponent implements OnInit {
  JOBS: JOB[] = this.employerService.JOBS;

  constructor(private employerService: EmployerService) {}

  ngOnInit() {}
}
