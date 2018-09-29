import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { CATEGORY } from "../../job";
import { map, tap , debounceTime} from "rxjs/operators";
import { of } from "rxjs";
import { JobDataService } from "../../job-data.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  searchForm = this.fb.group({
    category: [""],
    location: [""]
  });
  constructor(private fb: FormBuilder, private jb: JobDataService) {}

  ngOnInit() {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(200),

        map(data => {
          console.log(data)
          data.category = data.category.toLowerCase();
          return data;
        })
      )
      .subscribe(data => console.log(data));
  }
}
