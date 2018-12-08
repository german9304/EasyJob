import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { EmployerService } from '../employer.service';
import { SKILL } from '../../job';
@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  id = 0;
  skills: SKILL[] = [];
  formRows: Fbgroups = {
    row1: this.fb.group({
      title: [''],
      location: [''],
      category: ['']
    }),
    row2: this.fb.group({
      company: [''],
      industry: [''],
      type: ['select one']
    }),
    skill: [''],
    description: ['']
  };
  postJobForm: FormGroup = this.fb.group(this.formRows);
  constructor(
    private fb: FormBuilder,
    private employerSrvce: EmployerService
  ) {}

  ngOnInit() {}

  handleSubmit() {
    const { value } = this.postJobForm;
    console.log(value);
  }
  handleSkill() {
    const { value } = this.Skill;
    // console.log(`skill ${value}`);
    const skill: SKILL = {
      id: this.id++,
      skill: value
    };
    this.skills = [...this.skills, skill];
  }
  handleRemoveSkill(id: number) {
    const { skills } = this;
    // console.log(`id: ${id}`);
    // console.log(skills);
    const resultRemoveSkill = skills.filter(skill => skill.id !== id);
    this.skills = resultRemoveSkill;
  }
  get Row1() {
    return this.postJobForm.get('row1') as FormControl;
  }
  get Skill() {
    return this.postJobForm.get('skill') as FormControl;
  }
}

interface Fbgroups {
  row1: FormGroup;
  row2: FormGroup;
  skill: string[];
  description: string[];
}
