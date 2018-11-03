import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'candidate-files',
  templateUrl: './candidate-files.component.html',
  styleUrls: ['./candidate-files.component.scss']
})
export class CandidateFilesComponent implements OnInit {
  FAKE_FILE = {
    filename: 'Blank.pdf',
    date: '01/02'
  }
  constructor() { }

  ngOnInit() {
  }

}
