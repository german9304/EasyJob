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
  @Output() removeSkill: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}
  handleAddSkill() {
    this.clickSkill.emit(null);
  }
  handleRemoveSkill(id: number) {
    this.removeSkill.emit(id);
  }
  ngOnInit() {}
}
