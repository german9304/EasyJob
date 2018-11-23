import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  ActivationStart,
  ActivationEnd,
  ChildActivationStart,
  ChildActivationEnd
} from '@angular/router';
import { EXPERIENCE, FIELDS, EDUCATION, FILE } from '../../../job';

@Component({
  selector: 'app-candidate-fields',
  templateUrl: './candidate-fields.component.html',
  styleUrls: ['./candidate-fields.component.css']
})
export class CandidateFieldsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.route.data.subscribe(data => {
    //   // console.log(data);
    //   const { candidateFields } = data;
    //   console.log( candidateFields );
    // });
  }
}
