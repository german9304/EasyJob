import { Component, OnInit } from '@angular/core';
import {map, filter} from 'rxjs/operators'
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRoute,
  ActivatedRouteSnapshot
} from "@angular/router";

@Component({
  selector: 'candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	// this.router.events.pipe(
  	// 	val.filter( route => instanceOf )
  	// )
  	// .subscribe(val => console.log(val));
  }

}
