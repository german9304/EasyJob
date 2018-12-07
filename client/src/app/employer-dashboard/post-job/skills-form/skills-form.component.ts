import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SKILL } from '../post-job.component';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['../post-job.component.css', './skills-form.component.css']
})
export class SkillsFormComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() parentSkills: SKILL[];
  @Output() clickSkill: EventEmitter<null> = new EventEmitter<null>();
  constructor() {}
  handleAddSkill(i) {
    console.log(i);
    this.clickSkill.emit(null);
  }
  ngOnInit() {}
}
