import { Component, OnInit, Input } from "@angular/core";
import { Map } from "immutable";
@Component({
  selector: "candidate-files",
  templateUrl: "./candidate-files.component.html",
  styleUrls: ["./candidate-files.component.scss"]
})
export class CandidateFilesComponent implements OnInit {
  FAKE_FILE = {
    filename: "Blank.pdf",
    date: "01/02"
  };
  @Input()
  fileInfo: Map<string, string>;
  constructor() {}

  ngOnInit() {}
}
