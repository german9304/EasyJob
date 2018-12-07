import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['../post-job.component.css', './skills-form.component.css']
})
export class SkillsFormComponent implements OnInit {
  @Input() parentForm: FormGroup;
  constructor() {}

  ngOnInit() {}
}
